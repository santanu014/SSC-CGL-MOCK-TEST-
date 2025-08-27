// Quiz Application JavaScript
class SSCQuizApp {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.timeLeft = 1800; // 30 minutes in seconds
        this.timer = null;
        this.startTime = null;
        
        this.vocabQuestions = [
            {
                question: "Choose the correct synonym for 'UBIQUITOUS':",
                options: ["Rare", "Omnipresent", "Ancient", "Modern"],
                correct: 1,
                explanation: "Ubiquitous means present, appearing, or found everywhere."
            },
            {
                question: "Select the antonym of 'EPHEMERAL':",
                options: ["Temporary", "Brief", "Permanent", "Short-lived"],
                correct: 2,
                explanation: "Ephemeral means lasting for a very short time, so its antonym is permanent."
            },
            {
                question: "Choose the one word substitution for 'A person who studies earthquakes':",
                options: ["Seismologist", "Geologist", "Meteorologist", "Archaeologist"],
                correct: 0,
                explanation: "A seismologist is a scientist who studies earthquakes and seismic waves."
            },
            {
                question: "Complete the idiom: 'To bell the ____':",
                options: ["Dog", "Cat", "Horse", "Bird"],
                correct: 1,
                explanation: "'To bell the cat' means to undertake a dangerous mission."
            },
            {
                question: "Choose the synonym of 'METICULOUS':",
                options: ["Careless", "Careful", "Quick", "Lazy"],
                correct: 1,
                explanation: "Meticulous means showing great attention to detail; very careful and precise."
            },
            {
                question: "Select the antonym of 'BENEVOLENT':",
                options: ["Kind", "Generous", "Malevolent", "Caring"],
                correct: 2,
                explanation: "Benevolent means well-meaning and kindly, so its antonym is malevolent."
            },
            {
                question: "One word substitution for 'A study of coins':",
                options: ["Numismatics", "Philately", "Cartography", "Calligraphy"],
                correct: 0,
                explanation: "Numismatics is the study or collection of coins, paper money, and medals."
            },
            {
                question: "Complete the phrase: 'A blessing in ____':",
                options: ["Heaven", "Disguise", "Time", "Need"],
                correct: 1,
                explanation: "'A blessing in disguise' means something that seems bad but turns out to be good."
            },
            {
                question: "Choose the synonym of 'PRISTINE':",
                options: ["Dirty", "Old", "Immaculate", "Broken"],
                correct: 2,
                explanation: "Pristine means in its original condition; unspoiled, clean, and fresh."
            },
            {
                question: "Select the antonym of 'FRUGAL':",
                options: ["Economical", "Thrifty", "Extravagant", "Careful"],
                correct: 2,
                explanation: "Frugal means economical in use or expenditure, so its antonym is extravagant."
            },
            {
                question: "One word substitution for 'Government by the wealthy':",
                options: ["Democracy", "Plutocracy", "Autocracy", "Theocracy"],
                correct: 1,
                explanation: "Plutocracy is government by the wealthy or power provided by wealth."
            },
            {
                question: "Complete the idiom: 'To burn the midnight ____':",
                options: ["Candle", "Oil", "Light", "Fire"],
                correct: 1,
                explanation: "'To burn the midnight oil' means to work late into the night."
            },
            {
                question: "Choose the synonym of 'VERBOSE':",
                options: ["Brief", "Concise", "Wordy", "Silent"],
                correct: 2,
                explanation: "Verbose means using or expressed in more words than are needed; wordy."
            },
            {
                question: "Select the antonym of 'ADULATION':",
                options: ["Praise", "Admiration", "Criticism", "Respect"],
                correct: 2,
                explanation: "Adulation means excessive admiration or praise, so its antonym is criticism."
            },
            {
                question: "One word substitution for 'A lover of books':",
                options: ["Bibliophile", "Philosopher", "Philanthropist", "Bibliographer"],
                correct: 0,
                explanation: "A bibliophile is a person who collects or has a great love of books."
            },
            {
                question: "Complete the phrase: 'To have an axe to ____':",
                options: ["Sharpen", "Grind", "Cut", "Break"],
                correct: 1,
                explanation: "'To have an axe to grind' means to have a private reason for doing something."
            },
            {
                question: "Choose the synonym of 'CANDID':",
                options: ["Dishonest", "Frank", "Secretive", "Mysterious"],
                correct: 1,
                explanation: "Candid means truthful and straightforward; frank."
            },
            {
                question: "Select the antonym of 'AMELIORATE':",
                options: ["Improve", "Enhance", "Worsen", "Better"],
                correct: 2,
                explanation: "Ameliorate means to make better or improve, so its antonym is worsen."
            },
            {
                question: "One word substitution for 'Fear of heights':",
                options: ["Claustrophobia", "Acrophobia", "Agoraphobia", "Xenophobia"],
                correct: 1,
                explanation: "Acrophobia is an extreme or irrational fear of heights."
            },
            {
                question: "Complete the idiom: 'To cry over spilt ____':",
                options: ["Water", "Milk", "Tea", "Coffee"],
                correct: 1,
                explanation: "'To cry over spilt milk' means to be upset about something that has already happened."
            },
            {
                question: "Choose the synonym of 'ENIGMA':",
                options: ["Solution", "Mystery", "Answer", "Clarity"],
                correct: 1,
                explanation: "Enigma means something that is mysterious, puzzling, or difficult to understand."
            },
            {
                question: "Select the antonym of 'OSTRACIZE':",
                options: ["Include", "Exclude", "Banish", "Ignore"],
                correct: 0,
                explanation: "Ostracize means to exclude from a group, so its antonym is include."
            },
            {
                question: "One word substitution for 'A person who believes in fate':",
                options: ["Fatalist", "Optimist", "Pessimist", "Realist"],
                correct: 0,
                explanation: "A fatalist is someone who believes that all events are predetermined and inevitable."
            },
            {
                question: "Complete the phrase: 'To break the ____':",
                options: ["Rules", "Ice", "Law", "Promise"],
                correct: 1,
                explanation: "'To break the ice' means to initiate conversation or make people feel more comfortable."
            },
            {
                question: "Choose the synonym of 'TENACIOUS':",
                options: ["Weak", "Persistent", "Flexible", "Careless"],
                correct: 1,
                explanation: "Tenacious means holding fast; characterized by keeping a firm hold or persistent."
            }
        ];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.animateStats();
    }
    
    setupEventListeners() {
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
    
    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const animateNumber = (element) => {
            const target = parseInt(element.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, 20);
        };
        
        // Intersection Observer for animation trigger
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        statNumbers.forEach(number => observer.observe(number));
    }
    
    startTest(testType) {
        if (testType !== 'vocab') {
            alert('This test is coming soon! Currently only Vocabulary test is available.');
            return;
        }
        
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = new Array(this.vocabQuestions.length).fill(null);
        this.timeLeft = 1800; // 30 minutes
        this.startTime = new Date();
        
        this.showQuizModal();
        this.loadQuestion();
        this.startTimer();
    }
    
    showQuizModal() {
        document.getElementById('quiz-modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    hideQuizModal() {
        document.getElementById('quiz-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
        this.stopTimer();
    }
    
    loadQuestion() {
        const question = this.vocabQuestions[this.currentQuestion];
        
        document.getElementById('question-text').textContent = question.question;
        document.getElementById('question-counter').textContent = 
            `Question ${this.currentQuestion + 1} of ${this.vocabQuestions.length}`;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            optionElement.addEventListener('click', () => this.selectOption(index));
            
            // Restore previous selection
            if (this.answers[this.currentQuestion] === index) {
                optionElement.classList.add('selected');
            }
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Update navigation buttons
        document.getElementById('prev-btn').disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === this.vocabQuestions.length - 1) {
            document.getElementById('next-btn').style.display = 'none';
            document.getElementById('submit-btn').style.display = 'inline-block';
        } else {
            document.getElementById('next-btn').style.display = 'inline-block';
            document.getElementById('submit-btn').style.display = 'none';
        }
    }
    
    selectOption(optionIndex) {
        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => 
            opt.classList.remove('selected'));
        
        // Add selection to clicked option
        event.target.classList.add('selected');
        
        // Store answer
        this.answers[this.currentQuestion] = optionIndex;
    }
    
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
        }
    }
    
    nextQuestion() {
        if (this.currentQuestion < this.vocabQuestions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
        }
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        const timerElement = document.getElementById('timer');
        timerElement.textContent = display;
        
        // Add warning class when time is running out
        if (this.timeLeft <= 300) { // 5 minutes
            timerElement.classList.add('warning');
        }
    }
    
    submitQuiz() {
        this.stopTimer();
        this.calculateResults();
        this.hideQuizModal();
        this.showResults();
    }
    
    calculateResults() {
        this.score = 0;
        this.answers.forEach((answer, index) => {
            if (answer === this.vocabQuestions[index].correct) {
                this.score++;
            }
        });
    }
    
    showResults() {
        const endTime = new Date();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);
        const timeTakenMinutes = Math.floor(timeTaken / 60);
        
        const totalQuestions = this.vocabQuestions.length;
        const correctCount = this.score;
        const incorrectCount = this.answers.filter((answer, index) => 
            answer !== null && answer !== this.vocabQuestions[index].correct).length;
        const unansweredCount = this.answers.filter(answer => answer === null).length;
        const percentage = Math.round((this.score / totalQuestions) * 100);
        
        // Update result modal
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('correct-count').textContent = correctCount;
        document.getElementById('incorrect-count').textContent = incorrectCount;
        document.getElementById('unanswered-count').textContent = unansweredCount;
        document.getElementById('time-taken').textContent = `${timeTakenMinutes} min`;
        
        // Update score circle
        const scoreCircle = document.querySelector('.score-circle');
        const greenDegrees = (percentage / 100) * 360;
        scoreCircle.style.background = `conic-gradient(
            #10b981 0deg ${greenDegrees}deg,
            #e2e8f0 ${greenDegrees}deg 360deg
        )`;
        
        // Show result modal
        document.getElementById('result-modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Save result to localStorage
        this.saveResult({
            date: new Date().toISOString(),
            subject: 'Vocabulary',
            score: this.score,
            total: totalQuestions,
            percentage: percentage,
            timeTaken: timeTakenMinutes
        });
        
        // Update results section
        this.updateResultsSection();
    }
    
    saveResult(result) {
        let results = JSON.parse(localStorage.getItem('ssc-quiz-results') || '[]');
        results.push(result);
        localStorage.setItem('ssc-quiz-results', JSON.stringify(results));
    }
    
    updateResultsSection() {
        const results = JSON.parse(localStorage.getItem('ssc-quiz-results') || '[]');
        const resultsContainer = document.querySelector('.results-container');
        
        if (results.length === 0) return;
        
        const html = `
            <div class="results-grid">
                ${results.map((result, index) => `
                    <div class="result-card">
                        <div class="result-header">
                            <h4>${result.subject}</h4>
                            <span class="result-date">${new Date(result.date).toLocaleDateString()}</span>
                        </div>
                        <div class="result-stats">
                            <div class="result-score">
                                <span class="score-big">${result.percentage}%</span>
                                <span class="score-detail">${result.score}/${result.total}</span>
                            </div>
                            <div class="result-time">
                                <i class="fas fa-clock"></i>
                                ${result.timeTaken} min
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        resultsContainer.innerHTML = html;
    }
    
    closeQuiz() {
        if (confirm('Are you sure you want to close the quiz? Your progress will be lost.')) {
            this.hideQuizModal();
        }
    }
    
    closeResult() {
        document.getElementById('result-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    retakeTest() {
        this.closeResult();
        this.startTest('vocab');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.sscQuizApp = new SSCQuizApp();
});

// Global functions for HTML onclick events
function startTest(testType) {
    window.sscQuizApp.startTest(testType);
}

function closeQuiz() {
    window.sscQuizApp.closeQuiz();
}

function previousQuestion() {
    window.sscQuizApp.previousQuestion();
}

function nextQuestion() {
    window.sscQuizApp.nextQuestion();
}

function submitQuiz() {
    if (confirm('Are you sure you want to submit the test?')) {
        window.sscQuizApp.submitQuiz();
    }
}

function closeResult() {
    window.sscQuizApp.closeResult();
}

function retakeTest() {
    window.sscQuizApp.retakeTest();
}

// Additional CSS for results injected dynamically
const additionalCSS = `
.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.result-card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-left: 4px solid #667eea;
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.result-header h4 {
    color: #333;
    font-size: 1.1rem;
}

.result-date {
    color: #666;
    font-size: 0.9rem;
}

.result-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.result-score {
    text-align: left;
}

.score-big {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #667eea;
}

.score-detail {
    color: #666;
    font-size: 0.9rem;
}

.result-time {
    color: #666;
    font-size: 0.9rem;
}

.result-time i {
    margin-right: 0.5rem;
    color: #667eea;
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);
// One Word Substitution: Mock-1 to Mock-10 (Each with 20 questions)
const ows_1_Questions = [
  {question: "Person who writes dictionaries.", options: ["Lexicographer","Philologist","Novelist","Publisher"], correct: 0, explanation: ""},
  {question: "Person who eats too much.", options: ["Glutton","Ascetic","Gourmet","Hermit"], correct: 0, explanation: ""},
  {question: "Person who loves books.", options: ["Bibliophile","Philatelist","Numismatist","Cartographer"], correct: 0, explanation: ""},
  {question: "Study of birds.", options: ["Ornithologist","Anthropologist","Geologist","Seismologist"], correct: 0, explanation: ""},
  {question: "Animal that lives on land and water.", options: ["Amphibian","Mammal","Reptile","Arthropod"], correct: 0, explanation: ""},
  {question: "An instrument for measuring pressure.", options: ["Barometer","Microscope","Thermometer","Hydrometer"], correct: 0, explanation: ""},
  {question: "One who is unable to pay debts.", options: ["Insolvent","Affluent","Miser","Banker"], correct: 0, explanation: ""},
  {question: "A government by one person.", options: ["Autocracy","Democracy","Monarchy","Oligarchy"], correct: 0, explanation: ""},
  {question: "Fear of open spaces.", options: ["Agoraphobia","Hydrophobia","Claustrophobia","Xenophobia"], correct: 0, explanation: ""},
  {question: "A person who is new in a field.", options: ["Novice","Expert","Veteran","Scholar"], correct: 0, explanation: ""},
  {question: "Writing done by hand.", options: ["Manuscript","Agenda","Script","Text"], correct: 0, explanation: ""},
  {question: "One who talks too much.", options: ["Garrulous","Taciturn","Reticent","Silent"], correct: 0, explanation: ""},
  {question: "One who opposes war.", options: ["Pacifist","Pessimist","Optimist","Hedonist"], correct: 0, explanation: ""},
  {question: "Science of plants.", options: ["Botany","Zoology","Geology","Ecology"], correct: 0, explanation: ""},
  {question: "One who is always happy.", options: ["Optimist","Pessimist","Pacifist","Atheist"], correct: 0, explanation: ""},
  {question: "Person who repairs shoes.", options: ["Cobbler","Mason","Smith","Tailor"], correct: 0, explanation: ""},
  {question: "One who collects coins.", options: ["Numismatist","Philatelist","Archivist","Cartographer"], correct: 0, explanation: ""},
  {question: "Government by few.", options: ["Oligarchy","Autocracy","Democracy","Monarchy"], correct: 0, explanation: ""},
  {question: "Person who can use both hands equally well.", options: ["Ambidextrous","Amphibian","Ambiguous","Amoral"], correct: 0, explanation: ""},
  {question: "A speech delivered without preparation.", options: ["Extempore","Dialogue","Debate","Symposium"], correct: 0, explanation: ""}
];
// ows_2_Questions -- 20 questions
const ows_2_Questions = [
  {question: "One who cannot make mistakes.", options: ["Infallible","Insolvent","Invisible","Indelible"], correct: 0, explanation: ""},
  {question: "Place for keeping birds.", options: ["Aviary","Apiary","Cemetery","Sanctuary"], correct: 0, explanation: ""},
  // Continue exactly same pattern till 20 questions...
];
// ... Similarly ows_3_Questions to ows_10_Questions (fill 20 questions in each)

// Idioms & Phrases: Mock-1 to Mock-10
const idioms_1_Questions = [
  {question: "Spill the beans.", options: ["Expose a secret","Cook dinner","Make a mess","Plant seeds"], correct: 0, explanation: ""},
  {question: "Beat around the bush.", options: ["Avoid the topic","Gardening","Win the battle","Have fun"], correct: 0, explanation: ""},
  // ... 18 more
];
// idioms_2_Questions ... idioms_10_Questions (20 questions each)

// Synonyms: Mock-1 to Mock-10
const synonyms_1_Questions = [
  {question: "Synonym for 'Rapid'.", options: ["Slow","Fast","Happy","Smart"], correct: 1, explanation: ""},
  {question: "Synonym for 'Candid'.", options: ["Honest","Secret","Rude","Excited"], correct: 0, explanation: ""},
  // ... 18 more
];
// ...synonyms_2_Questions to synonyms_10_Questions

// Antonyms: Mock-1 to Mock-10
const antonyms_1_Questions = [
  {question: "Antonym for 'Generous'.", options: ["Selfish","Kind","Helpful","Brave"], correct: 0, explanation: ""},
  {question: "Antonym for 'Humble'.", options: ["Proud","Small","Shy","Friendly"], correct: 0, explanation: ""},
  // ... 18 more
];
// ...antonyms_2_Questions ... antonyms_10_Questions

// Spelling: Mock-1 to Mock-10
const spelling_1_Questions = [
  {question: "Correct spelling.", options: ["Recieve","Receeve","Receive","Recive"], correct: 2, explanation: ""},
  {question: "Correct spelling.", options: ["Accommodate","Acommodate","Accomodate","Acomodete"], correct: 0, explanation: ""},
  // ... 18 more
];
// ...spelling_2_Questions ... spelling_10_Questions

// Mapping sab mocks ke liye
const allQuestions = {
  "ows_1": ows_1_Questions, "ows_2": ows_2_Questions, "ows_3": ows_3_Questions, "ows_4": ows_4_Questions,
  "ows_5": ows_5_Questions, "ows_6": ows_6_Questions, "ows_7": ows_7_Questions, "ows_8": ows_8_Questions,
  "ows_9": ows_9_Questions, "ows_10": ows_10_Questions,
  "idioms_1": idioms_1_Questions, /* ... till idioms_10 */
  "synonyms_1": synonyms_1_Questions, /* ... till synonyms_10 */
  "antonyms_1": antonyms_1_Questions, /* ... till antonyms_10 */
  "spelling_1": spelling_1_Questions, /* ... till spelling_10 */
};
