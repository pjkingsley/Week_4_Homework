let questionNumber = 0;
const gameBox = document.getElementById('gameBox');
const question = document.getElementById('question');
const answerA = document.getElementById('answerA');
const answerB = document.getElementById('answerB');
const answerC = document.getElementById('answerC');
const answerD = document.getElementById('answerD');
const startBtn = document.getElementById('start');
const questionBox = document.getElementById('questionBox');
const answers = ['answerA', 'answerB', 'answerC', 'answerD'];
let currentScore = 0;
const highScores = [];


startBtn.addEventListener('click', function (event){
    event.preventDefault();
    questionBox.innerHTML = '';
    currentScore = 0;
    startBtn.style.visibility = 'hidden';
    for (i = 0; i < answers.length; i++) {
        answer = document.createElement('li');
        answer.setAttribute('id', answers[i]);
        questionBox.append(answer);
    };
    let answerA = document.getElementById('answerA');
    let answerB = document.getElementById('answerB');
    let answerC = document.getElementById('answerC');
    let answerD = document.getElementById('answerD');
    const gameBoxHandler = function () {
        if (questionNumber === 0) {
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
            
            question.innerHTML = `Your Score is ${currentScore}!`;
            console.log(questionBox);
            const userName = document.createElement('input');
                userName.type = 'text';
                userName.setAttribute('id', 'userName');
                userName.setAttribute('placeHolder', 'Your Name');
                userName.addEventListener('keypress', function (event) {
                    if (event.key === 'Enter') {
                        const name = document.getElementById('userName').value;
                        console.log(name);
                        console.log(currentScore);
                        highScores.push(`${name}, ${currentScore}`);
                        console.log(highScores);
                        localStorage.setItem('highScore', JSON.stringify(highScores));
                        const scoreList = JSON.parse(localStorage.getItem('highScore'));
                        console.log(scoreList);
                        questionBox.innerHTML = '';
                        for (i = 0; i < scoreList.length; i++) {
                            score = document.createElement('li');
                            score.innerHTML = scoreList[i];
                            questionBox.append(score);
                            startBtn.innerHTML = 'Play again?';
                            
                        };
                        startBtn.style.visibility = 'visible';
                    };
                });
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
                currentScore = currentScore + 20;
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

const gameBoxHandler = function () {
    if (questionNumber.value === 0) {
        question.innerHTML = 'First Question';
        answerA.innerHTML = 'wrong answer';
        answerA.setAttribute('class', 'wrong');
        answerB.innerHTML = 'right answer';
        answerB.setAttribute('class', 'right');
        answerC.innerHTML = 'wrong answer';
        answerC.setAttribute('class', 'wrong');
        answerD.innerHTML = 'wrong answer';
        answerD.setAttribute('class', 'wrong');

    } else if (questionNumber === 1) {
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
        question.innerHTML = 'Third Question';
        answerA.innerHTML = 'right answer';
        answerA.setAttribute('class', 'right');
        answerB.innerHTML = 'wrong answer';
        answerD.setAttribute('class', 'wrong');
        answerC.innerHTML = 'wrong answer';
        answerC.setAttribute('class', 'wrong');
        answerD.innerHTML = 'wrong answer';
        answerD.setAttribute('class', 'wrong');
        
    }else if (questionNumber === 4) {
        question.innerHTML = 'Fith Question';
        answerA.innerHTML = 'wrong answer';
        answerA.setAttribute('class', 'wrong');
        answerB.innerHTML = 'wrong answer';
        answerB.setAttribute('class', 'wrong');
        answerC.textContent = 'wrong answer';
        answerC.setAttribute('class', 'wrong');
        answerD.innerHTML = 'right answer';
        answerD.setAttribute('class', 'right');
    };
};

const playerChoiceHandler = function (event) {
    let rightAnswer = document.querySelector('.right');
    console.log(rightAnswer);
    if (event.target(rightAnswer)) {
        currentScore.value = currentScore.value + 20;
        questionNumber.value = questionNumber.value + 1;
        gameBoxHandler();
    } else {
        questionNumber.value = questionNumber.value + 1;
        gameBoxHandler();
    };
};

