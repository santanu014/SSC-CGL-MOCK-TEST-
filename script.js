// Questions for each topic - Mock-1 (20 questions) only. You can edit these.
const allQuestions = {
    'ows_1': [
        {question: "A person who writes dictionaries:", options: ["Lexicographer","Philologist","Novelist","Publisher"], correct: 0},
        {question: "One who eats too much:", options: ["Glutton","Gourmet","Hermit","Ascetic"], correct: 0},
        {question: "One who loves books:", options: ["Bibliophile","Philatelist","Numismatist","Cartographer"], correct: 0},
        {question: "Study of birds:", options: ["Ornithologist","Anthropologist","Geologist","Seismologist"], correct: 0},
        {question: "Animal living on land and water:", options: ["Amphibian","Mammal","Reptile","Arthropod"], correct: 0},
        {question: "Instrument for measuring pressure:", options: ["Barometer","Microscope","Thermometer","Hydrometer"], correct: 0},
        {question: "One unable to pay debts:", options: ["Insolvent","Affluent","Miser","Banker"], correct: 0},
        {question: "Government by one person:", options: ["Autocracy","Democracy","Monarchy","Oligarchy"], correct: 0},
        {question: "Fear of open spaces:", options: ["Agoraphobia","Hydrophobia","Claustrophobia","Xenophobia"], correct: 0},
        {question: "A person new in a field:", options: ["Novice","Expert","Veteran","Scholar"], correct: 0},
        {question: "Handwritten document:", options: ["Manuscript","Agenda","Script","Text"], correct: 0},
        {question: "One who talks too much:", options: ["Garrulous","Taciturn","Reticent","Silent"], correct: 0},
        {question: "One who opposes war:", options: ["Pacifist","Pessimist","Optimist","Hedonist"], correct: 0},
        {question: "Science of plants:", options: ["Botany","Zoology","Geology","Ecology"], correct: 0},
        {question: "Always happy person:", options: ["Optimist","Pessimist","Pacifist","Atheist"], correct: 0},
        {question: "Repairs shoes:", options: ["Cobbler","Mason","Smith","Tailor"], correct: 0},
        {question: "Coin collector:", options: ["Numismatist","Philatelist","Archivist","Cartographer"], correct: 0},
        {question: "Government by few:", options: ["Oligarchy","Autocracy","Democracy","Monarchy"], correct: 0},
        {question: "Can use both hands equally well:", options: ["Ambidextrous","Amphibian","Ambiguous","Amoral"], correct: 0},
        {question: "Speech without preparation:", options: ["Extempore","Dialogue","Debate","Symposium"], correct: 0}
    ],
    'idioms_1': [
        {question: "Spill the beans:", options: ["Expose a secret","Cook dinner","Make a mess","Plant seeds"], correct: 0},
        {question: "Beat around the bush:", options: ["Avoid the topic","Gardening","Win the battle","Have fun"], correct: 0},
        {question: "Kick the bucket:", options: ["To die","To win","To travel","To celebrate"], correct: 0},
        {question: "Let the cat out of the bag:", options: ["Reveal a secret","Catch a cat","Start fighting","Get a new pet"], correct: 0},
        {question: "Once in a blue moon:", options: ["Rarely","Often","Always","Never"], correct: 0},
        {question: "Burn the midnight oil:", options: ["Work late","Sleep late","Wake early","Party"], correct: 0},
        {question: "A blessing in disguise:", options: ["Good outcome from apparent misfortune","A holy gift","A curse","A strategy"], correct: 0},
        {question: "Under the weather:", options: ["Feeling sick","In rain","Very happy","Travelling"], correct: 0},
        {question: "Piece of cake:", options: ["Very easy","Very sweet","Impossible","Very fast"], correct: 0},
        {question: "Break the ice:", options: ["Begin conversation","Destroy something","Start fight","Cook"], correct: 0},
        {question: "Hit the sack:", options: ["Go to bed","Hit pillow","Eat dinner","Wake up"], correct: 0},
        {question: "A dime a dozen:", options: ["Common","Expensive","Rare","Tiny"], correct: 0},
        {question: "Cut corners:", options: ["Do something cheap/fast","Avoid corners","Do slowly","Be careful"], correct: 0},
        {question: "Back to the drawing board:", options: ["Start again","Break up","Go home","Finish"], correct: 0},
        {question: "Caught red-handed:", options: ["Caught in act","Painted hands","Left out","Helped others"], correct: 0},
        {question: "Let sleeping dogs lie:", options: ["Do not disturb","Play with dogs","Help dogs","Wake up"], correct: 0},
        {question: "Jump on the bandwagon:", options: ["Follow the trend","Get on vehicle","Leave group","Sing"], correct: 0},
        {question: "Bite the bullet:", options: ["Accept harsh task","Eat bullet","Fight","Refuse work"], correct: 0},
        {question: "Hit the nail on the head:", options: ["Do correctly","Get hurt","Start fight","Lose hope"], correct: 0},
        {question: "Go the extra mile:", options: ["Do more effort","Travel","Return home","Lose time"], correct: 0}
    ],
    'synonyms_1': [
        {question: "Synonym for 'Rapid':", options: ["Slow","Fast","Happy","Smart"], correct: 1},
        {question: "Synonym for 'Candid':", options: ["Honest","Secret","Rude","Excited"], correct: 0},
        {question: "Synonym for 'Vague':", options: ["Clear","Unclear","Precise","Bright"], correct: 1},
        {question: "Synonym for 'Adhere':", options: ["Stick","Leave","Open","Taste"], correct: 0},
        {question: "Synonym for 'Benevolent':", options: ["Kind","Cruel","Wise","Smart"], correct: 0},
        {question: "Synonym for 'Obscure':", options: ["Unclear","Simple","Visible","Direct"], correct: 0},
        {question: "Synonym for 'Illuminate':", options: ["Brighten","Darken","Silent","Ignore"], correct: 0},
        {question: "Synonym for 'Diminish':", options: ["Decrease","Increase","Grow","Expand"], correct: 0},
        {question: "Synonym for 'Reluctant':", options: ["Unwilling","Ready","Willing","Happy"], correct: 0},
        {question: "Synonym for 'Ruin':", options: ["Destroy","Build","Help","Create"], correct: 0},
        {question: "Synonym for 'Cease':", options: ["Stop","Begin","Continue","Open"], correct: 0},
        {question: "Synonym for 'Defy':", options: ["Resist","Obey","Love","See"], correct: 0},
        {question: "Synonym for 'Foster':", options: ["Encourage","Discourage","Punish","Judge"], correct: 0},
        {question: "Synonym for 'Liberate':", options: ["Free","Bind","Catch","Help"], correct: 0},
        {question: "Synonym for 'Migrate':", options: ["Move","Stay","Wait","Work"], correct: 0},
        {question: "Synonym for 'Rigid':", options: ["Stiff","Soft","Flexible","Blank"], correct: 0},
        {question: "Synonym for 'Sturdy':", options: ["Strong","Weak","Funny","Small"], correct: 0},
        {question: "Synonym for 'Tedious':", options: ["Boring","Exciting","Happy","Sad"], correct: 0},
        {question: "Synonym for 'Vivid':", options: ["Lively","Dull","Long","Short"], correct: 0},
        {question: "Synonym for 'Zeal':", options: ["Enthusiasm","Fear","Timidity","Calm"], correct: 0}
    ],
    'antonyms_1': [
        {question: "Antonym for 'Generous':", options: ["Selfish","Kind","Helpful","Brave"], correct: 0},
        {question: "Antonym for 'Humble':", options: ["Proud","Small","Shy","Friendly"], correct: 0},
        {question: "Antonym for 'Optimistic':", options: ["Pessimistic","Hopeful","Joyful","Happy"], correct: 0},
        {question: "Antonym for 'Rigid':", options: ["Flexible","Hard","Set","Rough"], correct: 0},
        {question: "Antonym for 'Permanent':", options: ["Temporary","Lasting","Durable","Good"], correct: 0},
        {question: "Antonym for 'Artificial':", options: ["Natural","Fake","Plastic","Manmade"], correct: 0},
        {question: "Antonym for 'Consent':", options: ["Dissent","Agree","Resent","Present"], correct: 0},
        {question: "Antonym for 'Include':", options: ["Exclude","Keep","Combine","Resolve"], correct: 0},
        {question: "Antonym for 'Confess':", options: ["Deny","Admit","Allow","Permit"], correct: 0},
        {question: "Antonym for 'Abundant':", options: ["Scarce","Plenty","Huge","Big"], correct: 0},
        {question: "Antonym for 'Barren':", options: ["Fertile","Dry","Salty","Sunny"], correct: 0},
        {question: "Antonym for 'Condemn':", options: ["Praise","Blame","Judge","Catch"], correct: 0},
        {question: "Antonym for 'Emancipate':", options: ["Enslave","Free","Happy","Quiet"], correct: 0},
        {question: "Antonym for 'Frugal':", options: ["Extravagant","Careful","Smart","Funny"], correct: 0},
        {question: "Antonym for 'Profound':", options: ["Superficial","Deep","Strong","Sad"], correct: 0},
        {question: "Antonym for 'Transparent':", options: ["Opaque","Clear","Glass","Shiny"], correct: 0},
        {question: "Antonym for 'Vague':", options: ["Clear","Cloudy","Small","Short"], correct: 0},
        {question: "Antonym for 'Sparse':", options: ["Dense","Thin","Wide","Deep"], correct: 0},
        {question: "Antonym for 'Timid':", options: ["Bold","Small","Shy","Active"], correct: 0},
        {question: "Antonym for 'Unity':", options: ["Division","Harmony","Community","Friend"], correct: 0}
    ],
    'spelling_1': [
        {question: "Correct spelling:", options: ["Recieve","Receeve","Receive","Recive"], correct: 2},
        {question: "Correct spelling:", options: ["Accommodate","Acommodate","Accomodate","Acomodete"], correct: 0},
        {question: "Correct spelling:", options: ["Definitely","Definately","Deffinitely","Definateley"], correct: 0},
        {question: "Correct spelling:", options: ["Separate","Sepperate","Seperate","Sepparate"], correct: 0},
        {question: "Correct spelling:", options: ["Occurred","Occured","Acurred","Occuerd"], correct: 0},
        {question: "Correct spelling:", options: ["Privilege","Priviledge","Privilige","Privlege"], correct: 0},
        {question: "Correct spelling:", options: ["Embarrass","Embarass","Embarras","Emberass"], correct: 0},
        {question: "Correct spelling:", options: ["Maintenance","Maintainance","Maintanence","Mantainance"], correct: 0},
        {question: "Correct spelling:", options: ["Pronunciation","Pronounciation","Pronaunciation","Prenounciation"], correct: 0},
        {question: "Correct spelling:", options: ["Questionnaire","Questionaire","Questioner","Questtionaire"], correct: 0},
        {question: "Correct spelling:", options: ["Millennium","Millenium","Milenium","Millenium"], correct: 0},
        {question: "Correct spelling:", options: ["Supersede","Supercede","Superseed","Superceed"], correct: 0},
        {question: "Correct spelling:", options: ["Handkerchief","Handkercheif","Hankerchief","Handkerchip"], correct: 0},
        {question: "Correct spelling:", options: ["Recommend","Reccommend","Recomend","Reccomend"], correct: 0},
        {question: "Correct spelling:", options: ["Tomorrow","Tommorow","Tomorow","Tommorrow"], correct: 0},
        {question: "Correct spelling:", options: ["Calendar","Calender","Callendar","Calandar"], correct: 0},
        {question: "Correct spelling:", options: ["Vacuum","Vaccum","Vacume","Vacuume"], correct: 0},
        {question: "Correct spelling:", options: ["Successful","Succesful","Succeful","Succesfull"], correct: 0},
        {question: "Correct spelling:", options: ["Noticeable","Noticable","Noticible","Noticeble"], correct: 0},
        {question: "Correct spelling:", options: ["Occurrence","Occurance","Ocurrence","Occurrance"], correct: 0}
    ]
}
// ---- Quiz Logic ------
let currentQuestions = [];
let currentIndex = 0;
let correctCount = 0;
function startTest(mockKey) {
    if (!allQuestions[mockKey]) {
        alert("Coming soon!");
        return;
    }
    currentQuestions = allQuestions[mockKey];
    currentIndex = 0;
    correctCount = 0;
    document.getElementById("quiz-title").textContent = "Quiz: " + mockKey.replace("_", " ").toUpperCase();
    document.getElementById("quiz-section").style.display = "block";
    document.getElementById("quiz-result").textContent = "";
    document.getElementById("submit-btn").style.display = "none";
    showQuestion();
}
function showQuestion() {
    let qc = document.getElementById("quiz-container");
    let q = currentQuestions[currentIndex];
    let options = "";
    for (let i = 0; i < q.options.length; i++) {
        options += `
          <div>
            <input type="radio" name="answer" id="opt${i}" value="${i}">
            <label for="opt${i}">${q.options[i]}</label>
          </div>
        `;
    }
    qc.innerHTML = `
      <div>
        <strong>Q${currentIndex + 1}:</strong> ${q.question}
      </div>
      ${options}
    `;
    document.getElementById("next-btn").style.display =
        currentIndex < currentQuestions.length - 1 ? "inline-block" : "none";
    document.getElementById("submit-btn").style.display =
        currentIndex === currentQuestions.length - 1 ? "inline-block" : "none";
}
function nextQuestion() {
    let ans = document.querySelector('input[name="answer"]:checked');
    if (!ans) {
        alert("Select an option first!");
        return;
    }
    if (parseInt(ans.value) === currentQuestions[currentIndex].correct) correctCount++;
    currentIndex++;
    showQuestion();
}
function submitTest() {
    let ans = document.querySelector('input[name="answer"]:checked');
    if (ans && parseInt(ans.value) === currentQuestions[currentIndex].correct) correctCount++;
    let total = currentQuestions.length;
    let score = `You scored ${correctCount} out of ${total} (${Math.floor((correctCount/total)*100)}%)!`;
    document.getElementById("quiz-result").innerHTML = score;
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
         }
            
