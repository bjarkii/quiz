// BBREYTUR
var wrongAnsw = 0;
var correctAnsw = 0;
var currentQuestion = 0;
var questionsCount = 0;

// SPURNINGAR
var questions = [{
    question: "Hvenær er fullveldisdagurinn?",
    choices: ["5. Desember", "1. Desember", "5. Nóvember" , "1. Nóvember"],
    correctAnswer: "1. Desember"
  },
  {
      question: "Hvenær fæddist Jón Sigurðsson?",
      choices: ["18 Júní","17. Júní", "20. Júní","21. Júní"],
      correctAnswer: "17. Júní"
  },
  {
        question: "Hefur Finnland unnið EM?",
        choices: ["Já", "Nei"],
        correctAnswer: "Já"
    },
    {
      question: "Hvað eru magri taflmenn í skák?",
      choices: [20, 30, 32, 35],
      correctAnswer: 32
    }];


document.body.onload = HTMLelements;

function HTMLelements () {

  function displayQuestion (questionNumber) {

      // TITLE OG NÚMER Á SPURNINGU
      var number = questionNumber + 1;
      var currentDiv = document.getElementById("questionPlace");

      var titleDiv = document.createElement("div");
      titleDiv.className = "headerWrap";
      titleDiv.style.backgroundImage = 'url(img/spurning' + questionNumber + '.jpg)';

      var numberDiv = document.createElement("h3");
      var newNumber = document.createTextNode(number + " / " + (questionsCount + 1));
      numberDiv.appendChild(newNumber); //add the text node to the newly created div.
      numberDiv.className = "title";

      var questionDiv = document.createElement("h1");
      var newQuestion = document.createTextNode(questions[questionNumber].question);
      questionDiv.appendChild(newQuestion); //add the text node to the newly created div.
      questionDiv.className = "title";

      var questionImg = document.createElement('img');
      questionImg.setAttribute("src", "img/spurning" + questionNumber + ".jpg");

      titleDiv.appendChild(numberDiv);
      titleDiv.appendChild(questionDiv);

      document.body.insertBefore(titleDiv, currentDiv);

      // RADIO BUTTONS MEÐ SVÖRUM
      var question=questions[currentQuestion];
      for (choice in question.choices) {

      var choiceWrap = document.createElement('div');
      var choiceSelection = document.createElement('input');
      var choiceLabel = document.createElement('label');

      choiceWrap.className = "questionBox";

      choiceSelection.setAttribute('type', 'radio');
      choiceSelection.setAttribute('name', "answers");
      choiceSelection.setAttribute('value', question.choices[choice]);
      choiceSelection.setAttribute('class', "answers");

      choiceLabel.innerHTML=question.choices[choice];
      choiceLabel.setAttribute('for', question.choices[choice]);
      choiceWrap.appendChild(choiceLabel);
      choiceWrap.appendChild(choiceSelection);
      document.body.insertBefore(choiceWrap, currentDiv);
      }

      $( ".answers" ).click(function() {
           if($('input.answers').is(':checked')) {
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
             document.alert("Veldu spurningu!")
           }
     });
  }




    function removeQuestion() {
      $('p').remove();
      $('img').remove();
      $('label').remove();
      $('div').remove();
      $('input').remove();
      $('.title').remove();
      $('.title').remove();
    }


    function checkAnswer() {
    var chosen = $("input.answers:checked").val()

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

    var completeTitle = document.createElement("h1");
    var titleContent = document.createTextNode("Takk fyrir að spila!");
    completeTitle.appendChild(titleContent);
    completeTitle.className = "completeTitle";

    var completeScore = document.createElement("p");
    var scoreContent = document.createTextNode("Þú svaraðir " + calculateScore(correctAnsw) + "% rétt!");
    completeScore.appendChild(scoreContent);
    completeScore.className = "completeTitle";

    var currentDiv = document.getElementById("questionPlace");
    document.body.insertBefore(completeTitle, currentDiv);
    document.body.insertBefore(completeScore, currentDiv);
  }


  questionsCount = questions.length - 1;
  displayQuestion(currentQuestion);


}
