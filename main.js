// BBREYTUR
var wrongAnsw = 0;
var correctAnsw = 0;
var currentQuestion = 0;
var questionsCount = 0;

// SPURNINGAR
var questions = [{
    question: "Hver er núverandi forsetisráðherra Danmerkur?",
    choices: ["Løkke Rasmussen", "Lars Løkke Rasmussen", "Andres Rasmussen", "Jon Rasmussen"],
    correctAnswer: "svar2"
  },
  {
      question: "Hver er forseti USA?",
      choices: ["svar1", "svar2", "svar3", "svar4"],
      correctAnswer: "svar2"
    }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 20
}];


document.body.onload = HTMLelements;

function HTMLelements () {

  function displayQuestion (questionNumber) {

      // TITLE OG NÚMER Á SPURNINGU
      var number = questionNumber + 1;
      var currentDiv = document.getElementById("questionBox");

      var numberDiv = document.createElement("h3");
      var newNumber = document.createTextNode("Spurning nr " + number + " / " + (questionsCount + 1));
      numberDiv.appendChild(newNumber); //add the text node to the newly created div.
      numberDiv.className = "title";

      var questionDiv = document.createElement("h1");
      var newQuestion = document.createTextNode(questions[questionNumber].question);
      questionDiv.appendChild(newQuestion); //add the text node to the newly created div.
      questionDiv.className = "title";

      document.body.insertBefore(numberDiv, currentDiv);
      document.body.insertBefore(questionDiv, currentDiv);


      // RADIO BUTTONS MEÐ SVÖRUM
      var question=questions[currentQuestion];
      for (choice in question.choices) {

      var choiceSelection = document.createElement('input');
      var choiceLabel = document.createElement('label');

      choiceSelection.setAttribute('type', 'radio');
      choiceSelection.setAttribute('name', "answers");
      choiceSelection.setAttribute('value', question.choices[choice]);
      choiceSelection.setAttribute('id', "answers");

      choiceLabel.innerHTML=question.choices[choice];
      choiceLabel.setAttribute('for', question.choices[choice]);
      document.body.insertBefore(choiceLabel, currentDiv);
      document.body.insertBefore(choiceSelection, currentDiv);
      }
  }

  function displayNextButton() {
    var nextDiv = document.createElement("p");
    var nextText = document.createTextNode("Næsta spurning");
    nextDiv.id ="nextButton"
    nextDiv.appendChild(nextText); //add the text node to the newly created div.

    var currentDiv = document.getElementById("nextButton");
    document.body.insertBefore(nextDiv, currentDiv);
  }

  function removeQuestion() {
      $('label').remove();
      $('input').remove();
      $('.title').remove();
      $('.title').remove();
  }


  function checkAnswer() {
    var chosen = $("input#answers:checked").val()

    if (chosen == questions[currentQuestion].correctAnswer) {
      correctAnsw++;
      console.log("correct: " + correctAnsw);
    }

    else {
      wrongAnsw++;
      console.log("wrong: " + wrongAnsw);
    }
  }

  function calculateScore(right) {
    calc = correctAnsw / (questions.length - 1);
    total = calc * 100;
    return total;
  }

  function displayScore() {

    var completeTitle = document.createElement("h3");
    var titleContent = document.createTextNode("Takk fyrir að spila!");
    completeTitle.appendChild(titleContent); //add the text node to the newly created div.
    completeTitle.className = "completeTitle";

    var completeScore = document.createElement("p");
    var scoreContent = document.createTextNode(calculateScore(correctAnsw) + "%");
    completeScore.appendChild(scoreContent); //add the text node to the newly created div.
    completeScore.className = "completeTitle";

    var currentDiv = document.getElementById("questionBox");
    document.body.insertBefore(completeTitle, currentDiv);
    document.body.insertBefore(completeScore, currentDiv);
  }






  questionsCount = questions.length - 1;

  displayQuestion(currentQuestion);
  displayNextButton();

  $( "#nextButton" ).click(function() {

        if($('input#answers').is(':checked')) {

          console.log("count: " + currentQuestion);
          console.log("totalCounts: " + questionsCount)

          if (currentQuestion < questionsCount) {

            checkAnswer()
            currentQuestion++;
            removeQuestion();
            displayQuestion(currentQuestion);
          }

          else {
            removeQuestion();
            $('p').remove();
            displayScore();
          }

        }

        else {
          alert("Veldu svar!");
        }


  });
}
