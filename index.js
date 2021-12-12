let questionNumber = 0;
const timerBox = document.getElementById('timer');
const gameBox = document.getElementById('gameBox');
const question = document.getElementById('question');
const startBtn = document.getElementById('start');
const questionBox = document.getElementById('questionBox');
const answers = ['answerA', 'answerB', 'answerC', 'answerD'];
let currentScore = 0;
const highScores = [];
let time = 0;


startBtn.addEventListener('click', function (event){
    event.preventDefault();
    questionBox.innerHTML = '';
    currentScore = 0;
    startBtn.style.visibility = 'hidden';
    questionBox.type = 'A';
    for (i = 0; i < answers.length; i++) {
        answer = document.createElement('li');
        answer.style.border = 'solid 1px black';
        answer.style.padding = '5px';
        answer.style.backgroundColor = 'green';
        answer.setAttribute('id', answers[i]);
        questionBox.append(answer);
    };
    let answerA = document.getElementById('answerA');
    let answerB = document.getElementById('answerB');
    let answerC = document.getElementById('answerC');
    let answerD = document.getElementById('answerD');
    const gameBoxHandler = function () {
        const setTime = function () {
            time = 15;
            let timerInterval = setInterval(function(){
                time--;
                timerBox.textContent = time;
                if (time === 0) {
                    clearInterval(timerInterval);
                    endGame();
                    return;
                }
            }, 1000);
        };
        const endGame = function () {
            questionNumber = 5;
            timerBox.style.visibility = 'hidden';
            gameBoxHandler();
        };
        timerBox.style.visibility = 'visible';
        if (questionNumber === 0) {
            setTime();
            question.innerHTML = 'First Question';
            let answerA = document.getElementById('answerA');
            answerA.innerHTML = 'wrong answer';
            answerA.setAttribute('class', 'wrong');
            let answerB = document.getElementById('answerB');
            answerB.innerHTML = 'right answer';
            answerB.setAttribute('class', 'right');
            let answerC = document.getElementById('answerC');
            answerC.innerHTML = 'wrong answer';
            answerC.setAttribute('class', 'wrong');
            let answerD = document.getElementById('answerD');
            answerD.innerHTML = 'wrong answer';
            answerD.setAttribute('class', 'wrong');   
        } else if (questionNumber === 1) {
            setTime();
            question.innerHTML = 'Second Question';
            answerA.innerHTML = 'wrong answer';
            answerA.setAttribute('class', 'wrong');
            answerB.innerHTML = 'wrong answer';
            answerD.setAttribute('class', 'wrong');
            answerC.innerHTML = 'right answer';
            answerC.setAttribute('class', 'right');
            answerD.innerHTML = 'wrong answer';
            answerD.setAttribute('class', 'wrong');
    
        } else if (questionNumber === 2) {
            setTime();
            question.innerHTML = 'Third Question';
            answerA.innerHTML = 'right answer';
            answerA.setAttribute('class', 'right');
            answerB.innerHTML = 'wrong answer';
            answerD.setAttribute('class', 'wrong');
            answerC.innerHTML = 'wrong answer';
            answerC.setAttribute('class', 'wrong');
            answerD.innerHTML = 'wrong answer';
            answerD.setAttribute('class', 'wrong');
    
        } else if (questionNumber === 3) {
            setTime();
            question.innerHTML = 'Fourth Question';
            answerA.innerHTML = 'right answer';
            answerA.setAttribute('class', 'right');
            answerB.innerHTML = 'wrong answer';
            answerD.setAttribute('class', 'wrong');
            answerC.innerHTML = 'wrong answer';
            answerC.setAttribute('class', 'wrong');
            answerD.innerHTML = 'wrong answer';
            answerD.setAttribute('class', 'wrong');
            
        } else if (questionNumber === 4) {
            setTime();
            question.innerHTML = 'Fith Question';
            answerA.innerHTML = 'wrong answer';
            answerA.setAttribute('class', 'wrong');
            answerB.innerHTML = 'wrong answer';
            answerB.setAttribute('class', 'wrong');
            answerC.textContent = 'wrong answer';
            answerC.setAttribute('class', 'wrong');
            answerD.innerHTML = 'right answer';
            answerD.setAttribute('class', 'right');
        } else {  
            questionBox.innerHTML = '';
            questionNumber = 0;
            timerBox.style.visibility = 'hidden';
            question.innerHTML = `Your Score is ${currentScore}!`;
            const userName = document.createElement('input');
                userName.type = 'text';
                userName.setAttribute('id', 'userName');
                userName.setAttribute('placeHolder', 'Your Name');
                userName.addEventListener('keypress', function (event) {
                    if (event.key === 'Enter') {
                        const name = document.getElementById('userName').value;
                        console.log(name);
                        console.log(currentScore);
                        highScores.push({
                            name: name,
                            score: currentScore
                        });
                        console.log(highScores);
                        localStorage.setItem('highScore', JSON.stringify(highScores));
                        const scoreList = JSON.parse(localStorage.getItem('highScore'));
                        console.log(scoreList);
                        scoreList.sort((a,b)=> {
                            return b.score -a.score;
                        });
                        console.log(scoreList);
                        questionBox.innerHTML = '';
                        for (i = 0; i < scoreList.length; i++) {
                            score = document.createElement('li');
                            const scoreBoardName = scoreList[i].name;
                            const scoreBoardScore = scoreList[i].score;
                            score.innerHTML = `${scoreBoardName}, ${scoreBoardScore}`;
                            questionBox.append(score);
                            startBtn.innerHTML = 'Play again?';                          
                        };
                        startBtn.style.visibility = 'visible';
                    };
                });
            questionBox.type = '1';
            questionBox.append(userName);
        }};     
    gameBoxHandler();
    const answerOptions = document.getElementsByTagName('li');
    for (i = 0; i < answerOptions.length; i++) {
        answerOptions[i].addEventListener('click', function(event) {
            event.preventDefault();
            if (event.target.classList.contains('right')){
                console.log('right');
                questionNumber++;
                console.log(questionNumber);
                currentScore = currentScore + time + 10;
                console.log(currentScore);
                gameBoxHandler();
            } else {
                console.log('wrong');
                questionNumber++;
                console.log(questionNumber);
                gameBoxHandler();
            };           
        });
    };
});


