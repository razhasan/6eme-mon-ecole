/* =====================================================
   Moteur de leçons — verrouillage par date, quiz, progrès
   Utilisé par toutes les pages de matière (pages/*.html)
   ===================================================== */

const JOURS_FR = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
const MOIS_FR  = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

function dateFR(d){
  return `${JOURS_FR[d.getDay()]} ${d.getDate()} ${MOIS_FR[d.getMonth()]} ${d.getFullYear()}`;
}
function dateCourte(d){
  return `${d.getDate()} ${MOIS_FR[d.getMonth()]}`;
}
function today0(){
  const t = new Date();
  t.setHours(0,0,0,0);
  return t;
}
function addDays(date, n){
  const d = new Date(date);
  d.setDate(d.getDate()+n);
  return d;
}
function toISO(d){
  return d.toISOString().slice(0,10);
}

/* ---------- stockage local ---------- */
function storageKey(subjectKey){ return `cahier_${subjectKey}`; }

function getState(subjectKey){
  try{
    const raw = localStorage.getItem(storageKey(subjectKey));
    if(!raw) return null;
    return JSON.parse(raw);
  }catch(e){ return null; }
}
function saveState(subjectKey, state){
  try{
    localStorage.setItem(storageKey(subjectKey), JSON.stringify(state));
  }catch(e){
    console.warn("Impossible d'enregistrer la progression (stockage local indisponible).", e);
  }
}
function ensureState(subjectKey){
  let state = getState(subjectKey);
  if(!state){
    state = { startDate: toISO(today0()), completed: [] };
    saveState(subjectKey, state);
  }
  return state;
}

/* Exposé pour que la page d'accueil puisse lire la progression de chaque matière */
function getProgressSummary(subjectKey, totalLessons){
  const state = getState(subjectKey);
  const done = state ? state.completed.length : 0;
  return { done, total: totalLessons };
}

/* ---------- rendu d'une page de matière ---------- */
function initSubjectPage(subjectKey, subjectTitle, lessons){
  const state = ensureState(subjectKey);
  const startDate = new Date(state.startDate + "T00:00:00");
  const nextIndex = state.completed.length; // index (0-based) de la prochaine leçon à débloquer

  renderDayTrack(subjectKey, subjectTitle, lessons, state, startDate, nextIndex);

  if(nextIndex >= lessons.length){
    renderAllDone(subjectTitle, lessons.length);
    return;
  }

  const unlockDate = addDays(startDate, nextIndex);
  const isUnlocked = today0() >= unlockDate;

  if(isUnlocked){
    renderLesson(subjectKey, lessons, nextIndex, state, false);
  } else {
    renderWaiting(unlockDate, lessons[nextIndex].title);
  }
}

function renderDayTrack(subjectKey, subjectTitle, lessons, state, startDate, nextIndex){
  const track = document.getElementById('day-track');
  if(!track) return;
  track.innerHTML = '';
  lessons.forEach((lesson, i)=>{
    const dot = document.createElement('div');
    dot.textContent = i+1;
    let cls = 'day-dot ';
    if(i < state.completed.length){
      cls += 'done';
      dot.title = `Leçon ${i+1} terminée — revoir`;
      dot.addEventListener('click', ()=>renderLesson(subjectKey, lessons, i, state, true));
    } else if(i === nextIndex){
      const unlockDate = addDays(startDate, i);
      if(today0() >= unlockDate){
        cls += 'current';
        dot.title = `Leçon ${i+1} — aujourd'hui !`;
        dot.addEventListener('click', ()=>renderLesson(subjectKey, lessons, i, state, false));
      } else {
        cls += 'locked';
        dot.title = `Disponible le ${dateCourte(unlockDate)}`;
      }
    } else {
      cls += 'locked';
      dot.title = 'Pas encore débloquée';
    }
    dot.className = cls;
    track.appendChild(dot);
  });
}

function renderLesson(subjectKey, lessons, index, state, reviewMode){
  hideAll();
  const lesson = lessons[index];
  const area = document.getElementById('lesson-content');
  area.classList.remove('hidden');

  const levelClass = lesson.level === 'Bases' ? 'base' : (lesson.level === 'Moyen' ? 'moyen' : 'avance');

  area.innerHTML = `
    <div class="sheet">
      <span class="level-badge ${levelClass}">${lesson.level} · Jour ${index+1}</span>
      <h2>${lesson.title}</h2>
      ${lesson.content}
      <div style="margin-top:20px; display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn" id="btn-quiz">${reviewMode ? "Refaire le quiz" : "Faire le petit quiz"} →</button>
      </div>
    </div>
  `;
  document.getElementById('btn-quiz').addEventListener('click', ()=>{
    renderQuiz(subjectKey, lessons, index, state, reviewMode);
  });
}

function renderQuiz(subjectKey, lessons, index, state, reviewMode){
  hideAll();
  const lesson = lessons[index];
  const area = document.getElementById('quiz-content');
  area.classList.remove('hidden');

  let html = `<div class="sheet"><h2>Quiz — ${lesson.title}</h2><p>Choisis la bonne réponse pour chaque question.</p><form id="quiz-form">`;
  lesson.quiz.forEach((q, qi)=>{
    html += `<div class="quiz-q" data-qindex="${qi}">
      <p class="q-text">${qi+1}. ${q.q}</p>
      <div class="quiz-opts">`;
    q.options.forEach((opt, oi)=>{
      html += `<div class="quiz-opt" data-oindex="${oi}">${opt}</div>`;
    });
    html += `</div></div>`;
  });
  html += `<button type="button" class="btn" id="btn-check">Valider mes réponses</button></form><div id="quiz-result"></div></div>`;
  area.innerHTML = html;

  const answers = new Array(lesson.quiz.length).fill(null);
  area.querySelectorAll('.quiz-q').forEach(qEl=>{
    const qi = parseInt(qEl.dataset.qindex,10);
    qEl.querySelectorAll('.quiz-opt').forEach(optEl=>{
      optEl.addEventListener('click', ()=>{
        qEl.querySelectorAll('.quiz-opt').forEach(o=>o.classList.remove('selected'));
        optEl.classList.add('selected');
        answers[qi] = parseInt(optEl.dataset.oindex,10);
      });
    });
  });

  document.getElementById('btn-check').addEventListener('click', ()=>{
    let score = 0;
    lesson.quiz.forEach((q, qi)=>{
      const qEl = area.querySelector(`.quiz-q[data-qindex="${qi}"]`);
      const opts = qEl.querySelectorAll('.quiz-opt');
      opts.forEach((optEl, oi)=>{
        if(oi === q.correct) optEl.classList.add('correct');
        else if(oi === answers[qi]) optEl.classList.add('incorrect');
      });
      if(answers[qi] === q.correct) score++;
    });
    const passThreshold = Math.ceil(lesson.quiz.length * 0.6);
    const passed = score >= passThreshold;
    const resultBox = document.getElementById('quiz-result');

    if(passed){
      if(!reviewMode && !state.completed.includes(index)){
        state.completed.push(index);
        saveState(subjectKey, state);
      }
      resultBox.innerHTML = `<div class="result-box pass">Bravo ! ${score}/${lesson.quiz.length} bonnes réponses. Leçon réussie 🎉</div>
        <div style="text-align:center;margin-top:16px;"><button class="btn" id="btn-continue">Continuer →</button></div>`;
    } else {
      resultBox.innerHTML = `<div class="result-box fail">${score}/${lesson.quiz.length} bonnes réponses. Relis la leçon et réessaie, tu vas y arriver 💪</div>
        <div style="text-align:center;margin-top:16px;"><button class="btn secondary" id="btn-retry">Revoir la leçon</button></div>`;
    }
    document.getElementById('btn-check').style.display = 'none';

    setTimeout(()=>{
      const cont = document.getElementById('btn-continue');
      if(cont) cont.addEventListener('click', ()=>{
        location.reload();
      });
      const retry = document.getElementById('btn-retry');
      if(retry) retry.addEventListener('click', ()=>{
        renderLesson(subjectKey, lessons, index, state, reviewMode);
      });
    },0);
  });
}

function renderWaiting(unlockDate, nextTitle){
  hideAll();
  const area = document.getElementById('waiting-content');
  area.classList.remove('hidden');
  area.innerHTML = `
    <div class="sheet waiting">
      <div class="big">📅✨</div>
      <p class="hand">Leçon du jour terminée !</p>
      <p>La prochaine leçon (<strong>${nextTitle}</strong>) sera disponible le<br><strong>${dateFR(unlockDate)}</strong>.</p>
      <p>Reviens ce jour-là pour continuer ton cahier 🌿</p>
    </div>
  `;
}

function renderAllDone(subjectTitle, total){
  hideAll();
  const area = document.getElementById('waiting-content');
  area.classList.remove('hidden');
  area.innerHTML = `
    <div class="sheet waiting">
      <div class="big">🏆</div>
      <p class="hand">Toutes les leçons sont terminées !</p>
      <p>Tu as fini les ${total} leçons de <strong>${subjectTitle}</strong>. Bravo pour ton sérieux !</p>
      <p>Tu peux cliquer sur les ronds verts ci-dessus pour revoir une leçon quand tu veux.</p>
    </div>
  `;
}

function hideAll(){
  ['lesson-content','quiz-content','waiting-content'].forEach(id=>{
    const el = document.getElementById(id);
    if(el){ el.classList.add('hidden'); el.innerHTML=''; }
  });
}
