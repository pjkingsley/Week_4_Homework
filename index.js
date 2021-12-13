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
let right = 0;

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
        answer.setAttribute('id', answers[i]);
        questionBox.append(answer);
    };
    let answerA = document.getElementById('answerA');
    let answerB = document.getElementById('answerB');
    let answerC = document.getElementById('answerC');
    let answerD = document.getElementById('answerD');
    const endGame = function () {
        questionNumber = 5;
        timerBox.style.visibility = 'hidden';
        gameBoxHandler();
    };
    const setTime = function () {
            time = 60;
            let timerInterval = setInterval(function(){
                time--;
                timerBox.textContent = time;
                if (time === 0) {
                    clearInterval(timerInterval);
                    endGame();
                }
            }, 1000);
        };
    setTime();
    const gameBoxHandler = function () {
        timerBox.style.visibility = 'visible';
        if (questionNumber === 0) {      
            question.innerHTML = 'Which of these denotes an object?';
            let answerA = document.getElementById('answerA');
            answerA.innerHTML = '()';
            answerA.setAttribute('class', 'wrong');
            let answerB = document.getElementById('answerB');
            answerB.innerHTML = '{}';
            answerB.setAttribute('class', 'right');
            let answerC = document.getElementById('answerC');
            answerC.innerHTML = '[]';
            answerC.setAttribute('class', 'wrong');
            let answerD = document.getElementById('answerD');
            answerD.innerHTML = '``';
            answerD.setAttribute('class', 'wrong');   
        } else if (questionNumber === 1) {
            
            question.innerHTML = 'Which is the correct syntax for finding an element by its Id?';
            answerA.innerHTML = `window.findId('yourId')`;
            answerA.setAttribute('class', 'wrong');
            answerB.innerHTML = `'document.getElementsByAttribute('id', yourId)`;
            answerD.setAttribute('class', 'wrong');
            answerC.innerHTML = `document.getElementById('yourId')`;
            answerC.setAttribute('class', 'right');
            answerD.innerHTML = `window.getElementsByType('id', 'yourId')`;
            answerD.setAttribute('class', 'wrong');
    
        } else if (questionNumber === 2) {
            
            question.innerHTML = 'Which of these tags is not declaring a variable?';
            answerA.innerHTML = 'variable';
            answerA.setAttribute('class', 'right');
            answerB.innerHTML = 'var';
            answerD.setAttribute('class', 'wrong');
            answerC.innerHTML = 'const';
            answerC.setAttribute('class', 'wrong');
            answerD.innerHTML = 'let';
            answerD.setAttribute('class', 'wrong');
    
        } else if (questionNumber === 3) {
            
            question.innerHTML = `What is the expected output of the following code:
            const arr = [1, 2, 3]
            for(i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            }`;
            answerA.innerHTML = `1 2 3`;
            answerA.setAttribute('class', 'right');
            answerB.innerHTML = '(1, 2, 3)';
            answerD.setAttribute('class', 'wrong');
            answerC.innerHTML = 'arr1, arr2, arr3';
            answerC.setAttribute('class', 'wrong');
            answerD.innerHTML = `3, 2, 1`;
            answerD.setAttribute('class', 'wrong');
            
        } else if (questionNumber === 4) {
            
            question.innerHTML = 'How many functions can you have nested in another function?';
            answerA.innerHTML = 'none';
            answerA.setAttribute('class', 'wrong');
            answerB.innerHTML = 'two';
            answerB.setAttribute('class', 'wrong');
            answerC.textContent = 'four';
            answerC.setAttribute('class', 'wrong');
            answerD.innerHTML = 'as many as you can keep track of :-)';
            answerD.setAttribute('class', 'right');
        } else {  
            questionBox.innerHTML = '';
            questionNumber = 0;
            timerBox.style.visibility = 'hidden';
            console.log(right + 'answers right');
            console.log(time);
            currentScore = right * (time/5);
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
                right++;
                console.log(questionNumber);
                gameBoxHandler();
            } else {
                console.log('wrong');
                time = time - 5;
                questionNumber++;
                console.log(questionNumber);
                gameBoxHandler();
            };           
        });
    };
});


