window.onload = function() {

    function numberOfQuestions() {

      // initial loading of the two dimentional array of questions and answers

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
        ['There are 100,000 km of blood vessels in a human body', 't'],
        ['Ocean saltwater cannot freeze.', 'f'],
        ['The distance between the Sun and Earth is 88 million km.', 'f'],
        ['Asia covers about 30% of Earth’s land surface.', 't'],
        ['Africa covers 14% of Earth’s surface.', 'f'],
        ['There are more than 25,000 islands in the Pacific Ocean.', 't'],
        ['The Amazon Rainforest produces 20% of Earth’s oxygen.', 't'],
        ['The first floppy measured 8 in. (200 mm) in diameter.', 't'],
        ['As far as has ever been reported, no-one has ever seen an ostrich bury its head in the sand.', 't'],
        ['Approximately one quarter of human bones are in the feet.', 't'],
        ['Ladybirds can fly at speeds up to 60 kph.', 't'],
        ['111,111,111 × 111,111,111 = 12345678987654321.', 't'],
        ['Skin is the human body’s largest organ.', 't'],
        ['An acute angle is more than 90 degrees', 'f'],
        ['The tiniest bones in the human body are found in the hand.', 'f'],
        ['Toenails grow faster than fingernails.', 'f'],
        ['Every hair follicle produces five individual hairs during a person’s lifetime.', 'f'],
        ['The liver can grow back up to 70%.', 't']
      ];

      // randomised questions selection

      var i = 1;
      questionIndex = [];
      questionSelected = [];
      while (i <= 10) {
        random = Math.random();
        if (random < .393) {
          random *= 100;
          random = Math.round(random);

          if (questionIndex.indexOf(random) === -1) {
            questionIndex.push(random);
            questionSelected.push(questionArr[random]);
            i++;
          };
        };
      };


      player1 = 1;
      player2 = 0;
      player1Score = 0;
      player2Score = 0;
      questionNumber = 0;
      numberOfQuestion = i - 1;

    } // end of numberOfQuestions()

    numberOfQuestions();

    function init() {

      owlh1 = document.getElementById('owl-h1');

      owlh1.innerHTML = 'Click to start';

      owlh1.addEventListener('click', playGame);

    }

    init();


    // main function playGame()

    function playGame() {


      owlh1.innerHTML = 'True or False'; // this

      owlh1.removeEventListener('click', playGame);
      currentQuestion();

      currentAnswer();

    }; // end of playGame()

    function currentQuestion() {

      // display number of questions left on screen
      questionLeft = document.getElementById('question-left-div');
      questionLeft.innerHTML = numberOfQuestion;

      // display current question on screen
      question = document.getElementById('question-ask')
      question.innerHTML = questionSelected[questionNumber][0];

      // display player's turn (remark) on screen
      remark = document.getElementById('remark');
      if (player1 === 1) {
        remark.innerHTML = "Player 1 turn";
      } else
        remark.innerHTML = "Player 2 turn";


      // check of the standard answer in the questionArr
      numberOfChoice();

      --numberOfQuestion;
      ++questionNumber;

      answer = document.getElementById('answer');
      answer.innerHTML = ' ';

    } // end of currentQuestion()

    function numberOfChoice() {

      theCorrectAnswer = questionSelected[questionNumber][1];
      numberChoice = 1;

    }

    function currentAnswer() {

      var trueBtn = document.getElementById('true');
      trueBtn.addEventListener('click', function() {

        ans = 't';
        playTurn(ans);
        if (numberOfQuestion === 0) {
          questionLeft = document.getElementById('question-left-div');
          questionLeft.innerHTML = numberOfQuestion;
          gameOver();
        } else
          timerid = setTimeout(currentQuestion, 500);

      }); // end of true event

      var falseBtn = document.getElementById('false');
      falseBtn.addEventListener('click', function() {
        ans = 'f';
        playTurn(ans);
        if (numberOfQuestion === 0) {
          questionLeft = document.getElementById('question-left-div');
          questionLeft.innerHTML = numberOfQuestion;
          gameOver();
        } else
          timerid = setTimeout(currentQuestion, 500);

      }); // end of false event

      var resetBtn = document.getElementById('reset');
      resetBtn.addEventListener('click', function() {
        restart();
      }); // end of reset event

    } // end of currentAnswer()

    function playTurn(ans) {

      ansCaptured = ans;

      if (player1 === 1) {
        correctAnswer(ansCaptured);
        if (addScore === 1) {
          ++player1Score;

          var play1 = document.getElementById('player1-score');
          play1.innerHTML = player1Score;
        };
        player1 = 0;
        player2 = 1;
      } else {
        correctAnswer(ansCaptured);
        if (addScore === 1) {
          ++player2Score;
          var play2 = document.getElementById('player2-score');
          play2.innerHTML = player2Score;
        };
        player1 = 1;
        player2 = 0;
      }; // end of if loop for if player1 === 1

    } // end of playTurn()

    function whoWon() {

      remark = document.getElementById('remark');
      if (player1Score === player2Score) {
        remark.innerHTML = 'Draw';
      } else
      if (player1Score > player2Score) {
        remark.innerHTML = 'Player 1 Won';
      } else {
        remark.innerHTML = 'Player 2 Won';
      };

    } // end of whoWon()

    function gameOver() {

      owlh1 = document.getElementById('owl-h1');
      owlh1.innerHTML = 'Game Over';
      owlh1.style.color = "#00ffff";

      whoWon();

    } // end of gameOver()

    function restart() {
      location.reload(true);
    }

    function correctAnswer(ans) {

      ansComp = ans;
      addScore = 0;

      var answer = document.getElementById('answer');
      if (ansComp === theCorrectAnswer) {
        answer.innerHTML = 'Correct :)';
        answer.style.color = '#0000cd';
        addScore = 1;
      } else {
        answer.innerHTML = 'Wrong :(';
        answer.style.color = '#ff0000';
        addScore = 0;
      }

    } // end of correctAnswer()

  } // end of window.onload
