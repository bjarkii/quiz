var totalScore = 0

var questions = [{
    question: "Hver er forseti USA?",
    choices: ["svar1", "svar2", "svar3", "svar4"],
    correctAnswer: "svar2"
  }, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
}];


document.body.onload = HTMLelements;

function HTMLelements () {

  function displayQuestion (questionNumber) {

      var number = questionNumber + 1;
      // Spurning Nr
      var numberDiv = document.createElement("h3");
      var newNumber = document.createTextNode("Spurning nr " + number);
      numberDiv.appendChild(newNumber); //add the text node to the newly created div.
      // DIV
      var questionDiv = document.createElement("h1");
      var newQuestion = document.createTextNode(questions[questionNumber].question);
      questionDiv.appendChild(newQuestion); //add the text node to the newly created div.

      // STAÃSETJA SP
      var currentDiv = document.getElementById("questions");
      document.body.insertBefore(numberDiv, currentDiv);
      document.body.insertBefore(questionDiv, currentDiv);

      for (var i = 0; i < 4; i++) {
        var choicesDiv = document.createElement("div");
        choicesDiv.id = 'choice' + i;
        var newChoice = document.createTextNode(questions[questionNumber].choices[i]);
        choicesDiv.appendChild(newChoice); //add the text node to the newly created div.
        var currentDiv = document.getElementById("questions");
        document.body.insertBefore(choicesDiv, currentDiv);
      }

  }


  var questionNr = 0;
  var questionsCount = questions.length;

  // Birtir spurningnu
  function nextQuestion() {
    displayQuestion(questionNr);
  }

  // Þurrkar spurningu
  function removeQuestion() {
    for (var i = 0; i < 4; i++) {
      $('#choice' + i).remove();
    }
    $('h1').remove();
    $('h3').remove();
  }

  function checkAnswer() {

  }

  // Byrtir fyrstu spurningu
  nextQuestion();

  // Next Takki
  $( "#choice" ).click(function() {

    questionNr++;
  });




  // Next Takki
  $( "#nextQuestion" ).click(function() {

    questionNr++;

    if (questionNr < questionsCount) {
      removeQuestion();
      nextQuestion(questionNr);
    }
    if (questionNr >= questionsCount) {
      removeQuestion();

    }
  });



}
