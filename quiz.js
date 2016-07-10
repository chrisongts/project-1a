window.onload = function() {

  function numberOfQuestions() {

      questionArr = [
        ['The "ink fish" ejects ink in the water to capture his prey', 'f'],
        ['Mona Lisa - the famous painting - from "Da Vinci" does not have eyebrows. In that time it was the fashion.', 't'],
        ['A "magnet" attracts all metals.', 'f'],
        ['The American "of Liberty" wears sandles.', 't'],
        ['The "port-side" of a ship is the "right" side', 'f'],
        ['A pineapple grows from a tree.', 'f'],
        ['The game Table Tennis comes from China.', 'f'],
        ['The Rumba is a typical Brasillian dance.', 'f'],
        ['A spider has 8 legs.', 't'],
        ['Lightning never strikes in the same place twice.', 't'],
        ['If you cry in space the tears just stick to your face.', 't'],
        ['If you cut an earthworm in half, both halves can regrow their body.', 'f'],
        ['Humans can distinguish between over a trillion different smells.', 't'],
        ['Adults have fewer bones than babies do.', 't'],
        ['Goldfish only have a memory of three seconds.', 'f'],
        ['Your fingernails and hair keep growing after you die.', 'f'],
        ['Humans can’t breathe and swallow at the same time.', 't'],
        ['Drinking alcohol kills brain cells.', 'f'],
        ['Every square inch of skin on the human body has about 32 million bacteria on it', 't'],
        ['During his lifetime, a person will produce about 5,000 quarts (5000 liters) of saliva.', 'f'],
        ['All of the bacteria in our body collectively weigh about 0.45 kg.', 'f'],
        ['The human body fully replaces all its cells every 14 years.', 'f'],
        ['here are 100,000 km of blood vessels in a human body', 't'],
        ['Ocean saltwater cannot freeze.', 'f'],
        ['The distance between the Sun and Earth is 88 million km.', 'f'],
        ['Asia covers about 30% of Earth’s land surface.', 't'],
        ['Africa covers 14% of Earth’s surface.', 'f'],
        ['There are more than 25,000 islands in the Pacific Ocean.', 't'],
        ['The Amazon Rainforest produces 20% of Earth’s oxygen.', 't'],
        ['The first floppy measured 8 in. (200 mm) in diameter.', 't']
      ];

      var i = 1;
      var questionIndex = [];
      questionSelected = [];
      while ( i <= 10) {
        var random = Math.random();
        if ( random <= .3 ) {
          random *= 100;
          random = Math.round(random);
          if ( questionIndex.indexOf(random) === -1) {
            questionIndex.push(random);
            questionSelected.push(questionArr[random]);
            i++;
          };
        };
      };
      numberOfQuestion = i - 1;

      player1 = 1;
      player2 = 0;
      player1Score = 0;
      player2Score = 0;

    } // end of numberOfQuestions()

  function playGame() {

      owlh1 = document.getElementById('owl-h1');

      owlh1.innerHTML = 'Click to start';
      owlh1.addEventListener('click', function() {
      console.log("Owl speak");
      owlh1.innerHTML = 'True or False';

      numberOfQuestions();

      questionNumber = 0;

      currentQuestion();

      currentAnswer();

      function currentQuestion() {

        // display number of questions left on screen
        questionLeft = document.getElementById('question-left-div');
        questionLeft.innerHTML = numberOfQuestion;

        // display current question on screen
        question = document.getElementById('question-ask')
        question.innerHTML = questionSelected[questionNumber][0];

        // check of the standard answer in the questionArr
        numberOfChoice();

        --numberOfQuestion;
        ++questionNumber;
        console.log("Current question is " + questionNumber);

      }

      function numberOfChoice() {

        theCorrectAnswer = questionSelected[questionNumber][1];
        numberChoice = 1;
        console.log("numberOfChoice function called " + answer);
      }

      function currentAnswer() {

        var trueBtn = document.getElementById('true');
        trueBtn.addEventListener('click', function() {
          console.log("True botton clicked");
          ans = 't';
          playTurn(ans);
        });

        var falseBtn = document.getElementById('false');
        falseBtn.addEventListener('click', function() {
          console.log("false button");
        });

        var resetBtn = document.getElementById('reset');
        resetBtn.addEventListener('click', function() {
          console.log("reset button");
        });

      } // end of currentAnswer()

      function playTurn(ans) {
        ansCaptured = ans;
        console.log("player " + player1);
        console.log("player " + player2);

        if ( player1 === 1 ) {
          correctAnswer(ansCaptured);
          if ( addScore === 1 ) {
            ++player1Score;
            console.log("player 1 score = " + player1Score);
            var play1 = document.getElementById('player1-score');
            play1.innerHTML = player1Score;
          };
          player1 = 0;
          player2 = 1;
          } else {
          correctAnswer(ansCaptured);
          if ( addScore === 1 ) {
            ++player2Score;
            var play2 = document.getElementById('player2-score');
            play2.innerHTML = player2Score;
          };
          player1 = 0;
          player2 = 1;
        };
        } // end of playTurn()

        function correctAnswer(ans) {
          console.log("Correct Answer function called");
          ansComp = ans;
          addScore = 0;
          console.log("The correct answer = " + theCorrectAnswer);
          console.log("Answer captured = " + ansComp)
          var answer = document.getElementById('answer');
          if ( ansComp === theCorrectAnswer ) {
            answer.innerHTML = 'Correct answer';
            addScore = 1;
          } else answer.innerHTML = 'Wrong answer';

          } // end of correctAnswer()



  }); // end of owlh1 click function



};  // end of playGame()

playGame();

}
