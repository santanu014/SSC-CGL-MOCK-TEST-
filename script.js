// Mock Tests Data
const quizzes = {
  ows1: {
    title: "One Word Substitution - Mock 1",
    questions: [
      { q: "One who loves mankind", options: ["Philanthropist", "Misanthrope", "Patriot", "Optimist"], answer: 0 },
      { q: "One who knows everything", options: ["Omnipotent", "Omniscient", "Omnipresent", "Specialist"], answer: 1 },
      { q: "A place where bees are kept", options: ["Apiary", "Aviary", "Sanctuary", "Stable"], answer: 0 },
      { q: "One who hates women", options: ["Misogynist", "Masochist", "Monk", "Feminist"], answer: 0 },
      { q: "A person who does not believe in God", options: ["Theist", "Atheist", "Agnostic", "Heretic"], answer: 1 },
      // Add upto 20 questions
    ]
  },

  idioms1: {
    title: "Idioms and Phrases - Mock 1",
    questions: [
      { q: "Meaning of: A blessing in disguise", options: ["An apparent misfortune that turns out beneficial", "A curse", "Something useless", "Unexpected disaster"], answer: 0 },
      { q: "Meaning of: Cry over spilt milk", options: ["Regret something that cannot be undone", "Cry unnecessarily", "Be foolish", "Complain too much"], answer: 0 },
      { q: "Meaning of: Once in a blue moon", options: ["Very rarely", "Very often", "At night", "Every full moon"], answer: 0 },
      { q: "Meaning of: Hit the sack", options: ["Go to sleep", "Start working", "Fight with someone", "Pack luggage"], answer: 0 },
      { q: "Meaning of: Break the ice", options: ["Start a conversation", "Destroy something", "Create problems", "End a meeting"], answer: 0 },
      // Add upto 20 questions
    ]
  }
};

let currentQuiz = null;
let currentIndex = 0;
let score = 0;

function startMock(mockName) {
  currentQuiz = quizzes[mockName];
  currentIndex = 0;
  score = 0;

  document.getElementById("quiz-title").innerText = currentQuiz.title;
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("restart-btn").classList.add("hidden");
  document.getElementById("next-btn").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";

  if (currentIndex < currentQuiz.questions.length) {
    const qData = currentQuiz.questions[currentIndex];
    const qElement = document.createElement("h3");
    qElement.innerText = (currentIndex + 1) + ". " + qData.q;
    questionContainer.appendChild(qElement);

    qData.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(i);
      questionContainer.appendChild(btn);
    });
  } else {
    showResult();
  }
}

function checkAnswer(selected) {
  const correct = currentQuiz.questions[currentIndex].answer;
  if (selected === correct) {
    score++;
  }
  currentIndex++;
  showQuestion();
}

function nextQuestion() {
  showQuestion();
}

function showResult() {
  document.getElementById("question-container").innerHTML = "";
  document.getElementById("next-btn").classList.add("hidden");
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = `You scored ${score} out of ${currentQuiz.questions.length}`;
  resultDiv.classList.remove("hidden");
  document.getElementById("restart-btn").classList.remove("hidden");
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  showQuestion();
  document.getElementById("result").classList.add("hidden");
  document.getElementById("restart-btn").classList.add("hidden");
  document.getElementById("next-btn").classList.remove("hidden");
}
