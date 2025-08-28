// ------- Data Section ---------

const oneWordMock1 = [
  {question: "A person who writes dictionaries:", options: ["Lexicographer","Philologist","Novelist","Publisher"], correct:0},
  {question: "One who eats too much:", options: ["Glutton","Gourmet","Hermit","Ascetic"], correct:0},
  {question: "One who loves books:", options: ["Bibliophile","Philatelist","Numismatist","Cartographer"], correct:0},
  {question: "Study of birds:", options: ["Ornithologist","Anthropologist","Geologist","Seismologist"], correct:0},
  {question: "Living on land and water:", options: ["Amphibian","Mammal","Reptile","Arthropod"], correct:0},
  {question: "Instrument to measure pressure:", options: ["Barometer","Microscope","Thermometer","Hydrometer"], correct:0},
  {question: "Unable to pay debts:", options: ["Insolvent","Affluent","Miser","Banker"], correct:0},
  {question: "Government by one person:", options: ["Autocracy","Democracy","Monarchy","Oligarchy"], correct:0},
  {question: "Fear of open spaces:", options: ["Agoraphobia","Hydrophobia","Claustrophobia","Xenophobia"], correct:0},
  {question: "A person new in a field:", options: ["Novice","Expert","Veteran","Scholar"], correct:0},

  {question: "Writing done by hand:", options: ["Manuscript","Agenda","Script","Text"], correct:0},
  {question: "One who talks too much:", options: ["Garrulous","Taciturn","Reticent","Silent"], correct:0},
  {question: "One who opposes war:", options: ["Pacifist","Pessimist","Optimist","Hedonist"], correct:0},
  {question: "Science of plants:", options: ["Botany","Zoology","Geology","Ecology"], correct:0},
  {question: "Always happy person:", options: ["Optimist","Pessimist","Pacifist","Atheist"], correct:0},
  {question: "Repairs shoes:", options: ["Cobbler","Mason","Smith","Tailor"], correct:0},
  {question: "Coin collector:", options: ["Numismatist","Philatelist","Archivist","Cartographer"], correct:0},
  {question: "Government by few:", options: ["Oligarchy","Autocracy","Democracy","Monarchy"], correct:0},
  {question: "Can use both hands equally well:", options: ["Ambidextrous","Amphibian","Ambiguous","Amoral"], correct:0},
  {question: "Speech without preparation:", options: ["Extempore","Dialogue","Debate","Symposium"], correct:0}
];

const pageState = {
    main: "main",
    vocabulary: "vocabulary",
    oneword: "oneword",
    coming: "coming"
};
// ---------- Render Functions -------------

function renderHome() {
    document.getElementById("app").innerHTML = `
        <div class="header">SSC CGL Mock Test Series</div>
        <div style="color:#444;margin-bottom:15px;">
            The SSC Combined Graduate Level (CGL) Exam is one of the most sought-after exams for government jobs in India. Practice topic-wise and full-length mock tests here for best preparation!
        </div>
        <div class="tile-grid">
            <div class="tile" onclick="navigate('${pageState.vocabulary}')">
                English Vocabulary<br>
                <span style="font-size:0.9em;font-weight:normal;">(Tap to open)</span>
            </div>
            <div class="tile coming-soon">Mathematics<br><span style="font-size:0.85em;">(Coming soon)</span></div>
            <div class="tile coming-soon">Reasoning<br><span style="font-size:0.85em;">(Coming soon)</span></div>
            <div class="tile coming-soon">GK and GS<br><span style="font-size:0.85em;">(Coming soon)</span></div>
        </div>
        <div style="margin-top:25px; color:#6c27c7; text-align:center;">About Website · Contact · Gmail</div>
    `;
}
function renderVocabularyLanding() {
    document.getElementById("app").innerHTML = `
        <button class="back-btn" onclick="navigate('${pageState.main}')">← Back</button>
        <div class="section-title">Vocabulary</div>
        <div style="color:#444;">
            Add a description about ENGLISH VOCABULARY in SSC EXAMS.<br>
        </div>
        <div class="sub-section" style="margin-top:18px;">
            <div class="mock-btn" onclick="navigate('${pageState.oneword}')">1. One Word Substitution</div>
            <div class="mock-btn coming">2. Idioms and Phrases (Coming soon)</div>
            <div class="mock-btn coming">3. Synonyms & Antonyms (Coming soon)</div>
            <div class="mock-btn coming">4. Spellings (Coming soon)</div>
        </div>
    `;
}
function renderOneWordMocks() {
    document.getElementById("app").innerHTML = `
        <button class="back-btn" onclick="navigate('${pageState.vocabulary}')">← Vocabulary</button>
        <div class="section-title">One Word Substitution</div>
        <div class="mock-list">
            <button class="mock-btn" onclick="startQuiz('oneword-mock1')">Mock-1</button>
            <button class="mock-btn coming">Mock-2 (Coming soon)</button>
            <button class="mock-btn coming">Mock-3 (Coming soon)</button>
            <button class="mock-btn coming">Mock-4 (Coming soon)</button>
            <button class="mock-btn coming">Mock-5 (Coming soon)</button>
            <button class="mock-btn coming">Mock-6 (Coming soon)</button>
        </div>
        <div style="margin-top:22px;">Each mock contains 20 questions. Practice to boost your vocabulary for SSC CGL!</div>
    `;
}
function renderComingSoonPage() {
    document.getElementById("app").innerHTML = `
        <button class="back-btn" onclick="navigate('${pageState.main}')">← Home</button>
        <div class="section-title">Mock Test - Coming Soon!</div>
        <div style="color:#644bb7;font-size:1.1em;text-align:center;margin:16px 0 0 0;">This section will be available soon. Stay tuned!</div>
    `;
}
// -------- Quiz Logic (for Mock-1 One Word Only) --------
let currentQuiz = [];
let quizIndex = 0;
let quizScore = 0;

function startQuiz(type) {
    if(type === "oneword-mock1") {
        currentQuiz = oneWordMock1;
        quizIndex = 0;
        quizScore = 0;
        renderQuiz();
    }
}
function renderQuiz() {
    const q = currentQuiz[quizIndex];
    let opts = "";
    for(let i=0;i<q.options.length;i++) {
        opts += `<label class="opt-radio">
            <input type="radio" name="ans" value="${i}"> ${q.options[i]}
        </label>`;
    }
    document.getElementById("app").innerHTML = `
        <button class="back-btn" onclick="renderOneWordMocks()">← Back</button>
        <div class="section-title">One Word Substitution - Mock 1</div>
        <div class="q-block">
            <div class="q-title">Q${quizIndex+1}: ${q.question}</div>
            <div>${opts}</div>
        </div>
        <button class="submit-btn" onclick="nextQuizQ()">Next</button>
    `;
}
function nextQuizQ() {
    const radios = document.getElementsByName("ans");
    let val = -1;
    for(let i=0;i<radios.length;i++) if(radios[i].checked) val = parseInt(radios[i].value);
    if(val < 0) { alert("Please select an option!"); return; }
    if(val === currentQuiz[quizIndex].correct) quizScore++;
    quizIndex++;
    if(quizIndex < currentQuiz.length) renderQuiz();
    else renderQuizResult();
}
function renderQuizResult() {
    document.getElementById("app").innerHTML = `
        <button class="back-btn" onclick="renderOneWordMocks()">← Back</button>
        <div class="section-title">Result</div>
        <div class="result-msg">You scored ${quizScore} out of ${currentQuiz.length} (${Math.round(quizScore/currentQuiz.length*100)}%)</div>
        <button class="submit-btn" onclick="renderHome()">Back to Home</button>
    `;
}
// --------- Navigation Logic ---------
function navigate(to) {
    if (to === pageState.main) renderHome();
    else if (to === pageState.vocabulary) renderVocabularyLanding();
    else if (to === pageState.oneword) renderOneWordMocks();
    else renderComingSoonPage();
}
navigate(pageState.main);
