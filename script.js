// Question bank
const questionBank = {
  vocabulary: {
    ows: {
      mock1: [
        {
          question: "A person who hates mankind",
          options: ["Philanthropist", "Misanthrope", "Optimist", "Altruist"],
          answer: "Misanthrope"
        },
        {
          question: "A person who loves books",
          options: ["Bibliophile", "Pedagogue", "Numismatist", "Philatelist"],
          answer: "Bibliophile"
        },
        {
          question: "A speech made without preparation",
          options: ["Manuscript", "Extempore", "Lecture", "Debate"],
          answer: "Extempore"
        },
        {
          question: "One who eats human flesh",
          options: ["Cannibal", "Carnivorous", "Herbivorous", "Omnivorous"],
          answer: "Cannibal"
        },
        {
          question: "Government by a king",
          options: ["Monarchy", "Democracy", "Oligarchy", "Autocracy"],
          answer: "Monarchy"
        }
        // 👉 Aise hi 20 questions tak add kar lena
      ]
    },
    idioms: {
      mock1: [
        {
          question: "Idiom: 'Break the ice'",
          options: [
            "Start a conversation",
            "Fall on ice",
            "Win a prize",
            "Do something impossible"
          ],
          answer: "Start a conversation"
        },
        {
          question: "Idiom: 'Hit the sack'",
          options: ["Go to bed", "Start working", "Fight", "Lose money"],
          answer: "Go to bed"
        },
        {
          question: "Idiom: 'Piece of cake'",
          options: ["A tasty dish", "Something very easy", "A small problem", "Something incomplete"],
          answer: "Something very easy"
        },
        {
          question: "Idiom: 'Burn the midnight oil'",
          options: ["Waste time", "Work late into the night", "Celebrate", "Sleep early"],
          answer: "Work late into the night"
        },
        {
          question: "Idiom: 'Once in a blue moon'",
          options: ["Very often", "Very rare", "Impossible", "Everyday"],
          answer: "Very rare"
        }
        // 👉 Aise hi 20 idioms tak add kar lena
      ]
    }
  }
};

// DOM elements
const quizContainer = document.getElementById("quiz");
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// Start Quiz
function startQuiz(section, subSection, mock) {
  const data = questionBank[section]?.[subSection]?.[mock];
  if (!data) {
    quizContainer.innerHTML = "<p>This test is coming soon 🚧</p>";
    return;
  }

  currentQuiz = data;
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

// Show question
function showQuestion() {
  if (currentQuestionIndex >= currentQuiz.length) {
    showResult();
    return;
  }

  const q = currentQuiz[currentQuestionIndex];
  let optionsHTML = "";
  q.options.forEach(opt => {
    optionsHTML += `
      <label>
        <input type="radio" name="option" value="${opt}">
        ${opt}
      </label><br>
    `;
  });

  quizContainer.innerHTML = `
    <p><b>Q${currentQuestionIndex + 1}:</b> ${q.question}</p>
    ${optionsHTML}
    <button onclick="submitAnswer()">Submit</button>
  `;
}

// Submit answer
function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option!");
    return;
  }

  if (selected.value === currentQuiz[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;
  showQuestion();
}

// Show result
function showResult() {
  quizContainer.innerHTML = `
    <h3>Quiz Completed ✅</h3>
    <p>Your Score: ${score} / ${currentQuiz.length}</p>
    <button onclick="location.reload()">Go Back</button>
  `;
}
