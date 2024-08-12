// Sample questions. DONT touch this data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "What does CSS stand for?",
    options: [
      "Cascading Stylesheets",
      "Cascading Styling Styles",
      "Cascading Sheets for Stylings",
      "Cascaded Stylesheets",
    ],
    correct: 0,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
  {
    text: "Javascript is a single threaded programming language",
    options: ["True", "False"],
    correct: 0,
  },
  {
    text: "API calls in Javascript can be done using the following method",
    options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
    correct: 2,
  },
];

let currentQuestionIndex = 0; // To keep track of the current question
let userAnswer = null; // To store the user's selected answer

// Function to load a question
function loadQuestion() {
  // Load the first question and load subsequent question from this function
  const questionElement = document.getElementById("question");
  const answerList = document.getElementById("answer_list");

  // Clear previous options
  answerList.innerHTML = "";

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.text;

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");

    // Create the radio button
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option"; // Group all radio buttons together
    radio.value = index;
    radio.id = `option${index}`;

    // Create the label for the radio button
    const label = document.createElement("label");
    label.htmlFor = `option${index}`;
    label.textContent = option;

    // Append radio and label to the list item
    li.appendChild(radio);
    li.appendChild(label);

    // Add click event to store user's selected answer
    radio.addEventListener("click", () => {
      userAnswer = index;
    });

    answerList.appendChild(li);
  });
}

// Function to check the answer and provide feedback
function checkAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  if (userAnswer === null) {
    alert("Please select an answer before submitting!");
    return;
  }

  if (userAnswer === currentQuestion.correct) {
    alert("Correct!");
  } else {
    alert(
      `Wrong! The correct answer was: ${
        currentQuestion.options[currentQuestion.correct]
      }`
    );
  }
}

// Function to move to the next question
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    userAnswer = null;
    loadQuestion();
  } else {
    alert("Quiz finished! Thanks for playing.");
    // Optionally reset the quiz or show results
  }
}

// Event listeners for the submit and next buttons
// Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
document.getElementById("submit").addEventListener("click", checkAnswer);
// Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
document.getElementById("next").addEventListener("click", nextQuestion);

// Load the first question on page load
loadQuestion();
