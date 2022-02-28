window.onload = function() { 
    lancement();
}

let listeQuiz = document.querySelector('.quiz-container'); 
let quesitonsContainer = document.querySelector('#questions-container'); 
let article = document.querySelector('#Score');

function lancement() {
    fetch('JS/package.json') 
	.then(response => response.json()) 
	.then(data => { 

        if (data['QUIZ'].length == 0){ 
            let h1 = document.createElement('h1'); 
            h1.innerHTML = "Ajouter un quiz grâce au fichier .json !"; 

            listeQuiz.appendChild(h1); 
        }

        for (let i = 0; i < data['QUIZ'].length; i++){ 
            let erreur = false; 

            if (data['QUIZ'][i].theme == "" ||
                data['QUIZ'][i].nombreQuestions == 0 || 
                data['QUIZ'][i].nombreQuestions != data['QUIZ'][i].totalQuestions.length ||
                data['QUIZ'][i].totalQuestions.length == 0 
            ){
                erreur = true; 
            }

            for (let j = 0; j < data['QUIZ'][i].totalQuestions.length; j++){ 
                if (data['QUIZ'][i].totalQuestions[j].question == "" || 
                    data['QUIZ'][i].totalQuestions[j].proposition.length == 0 || 
                    data['QUIZ'][i].totalQuestions[j].proposition.length < 2 || 
                    data['QUIZ'][i].totalQuestions[j].reponse == ""
                ){
                    erreur = true;
                }
            }

            if (erreur){ 
                console.log('erreur sur le quiz ' + (i + 1)); 
            } else {
                let divQuiz = document.createElement('div'); 
                divQuiz.classList.add('quiz'); 
                listeQuiz.appendChild(divQuiz); 
                
                let quizInfos = document.createElement('div'); 
                quizInfos.classList.add('quiz__infos'); 
                let launchBtn = document.createElement('div'); 
                launchBtn.classList.add('launch__btn'); 
                divQuiz.appendChild(quizInfos); 
                divQuiz.appendChild(launchBtn); 
                
                let myH1 = document.createElement('h1'); 
                myH1.classList.add('quiz__name');
                myH1.textContent = data['QUIZ'][i].theme;
                let myPara1 = document.createElement('p'); 
                myPara1.classList.add('number__questions'); 
                myPara1.textContent = data['QUIZ'][i].nombreQuestions + " questions"; 
                quizInfos.appendChild(myH1); 
                quizInfos.appendChild(myPara1); 
                
                let iconButton = document.createElement('i'); 
                iconButton.classList.add('bx'); 
                iconButton.classList.add('bxs-rocket'); 
                launchBtn.appendChild(iconButton); 
                
                launchBtn.addEventListener('click', () => { 
                    debutQuiz(i); 
                });
            }
        }
    });
}

let tableQuestions = []; 
let score = [];

function debutQuiz(nbQuiz){
    document.querySelector('.quiz-container').classList.remove('show'); 
    document.querySelector('#questions-container').classList.add('show'); 
    document.querySelector('#score-container').classList.remove('show'); 

    fetch('JS/package.json') 
	.then(response => response.json()) 
	.then(data => { 
        for(let i = 0; i < data['QUIZ'][nbQuiz]['totalQuestions'].length; i++){ 
            tableQuestions.push(data['QUIZ'][nbQuiz]['totalQuestions'][i]); 
        }
        showQuestion(nbQuiz); 
    });
}

function showQuestion(nbQuiz){
    document.querySelector('.quiz-container').classList.remove('show'); 
    document.querySelector('#questions-container').classList.add('show'); 
    document.querySelector('#score-container').classList.remove('show'); 
    
    let insertQuestions = document.querySelector('#questions'); 
    
    document.querySelector('.suivant').classList.remove('active');
    document.querySelector('.score').classList.remove('active');
    
    while (insertQuestions.firstChild){ 
        insertQuestions.removeChild(insertQuestions.firstChild); 
    }
    
    let tirageQuestion = Math.floor(Math.random() * (tableQuestions.length - 0) + 0);
    
    document.querySelector('#questions-title').innerHTML = tableQuestions[tirageQuestion].question; 
    
    for(let j = 0; j < tableQuestions[tirageQuestion].proposition.length; j++){ 
        let buttonReponse = document.createElement('button'); 
        buttonReponse.classList.add("question"); 
        buttonReponse.classList.add("question-" + j); 
        buttonReponse.value = tableQuestions[tirageQuestion].proposition[j]; 
        buttonReponse.textContent = tableQuestions[tirageQuestion].proposition[j]; 
        let reponseQuestion = tableQuestions[tirageQuestion].reponse; 
        
        buttonReponse.addEventListener('click', () => { 
            if (buttonReponse.value == reponseQuestion){ 
                for (let r = 0; r < tableQuestions[tirageQuestion].proposition.length; r++){ 
                    let selectQuestions = document.querySelector('.question-' + r);
                    selectQuestions.disabled = true; 
                }

                buttonReponse.classList.add("correct");
                score.push(1);
            } else if (buttonReponse.value != reponseQuestion){ 
                for (let r = 0; r < tableQuestions[tirageQuestion].proposition.length; r++){
                    let selectQuestions = document.querySelector('.question-' + r); 
                    selectQuestions.disabled = true; 
                    
                    if (selectQuestions.value == reponseQuestion){ 
                        selectQuestions.classList.add("correct"); 
                    }
                }
                
                buttonReponse.classList.add("wrong"); 
            }
            
            if (tableQuestions.length == 1){ 
                let buttonScore = document.querySelector('.score'); 
                buttonScore.classList.add('active'); 
                document.querySelector('.suivant').classList.remove('active'); 
                buttonScore.addEventListener('click', () => { 
                    showScore(nbQuiz); 
                });
            } else {
                let buttonNext = document.querySelector('.suivant'); 
                buttonNext.classList.add('active'); 
                document.querySelector('.score').classList.remove('active'); 
                buttonNext.addEventListener('click', () => { 
                    showQuestion(nbQuiz); 
                });
            }
            tableQuestions.splice(tirageQuestion, 1); 
        });
        insertQuestions.appendChild(buttonReponse); 
    }

}
    
function showScore(nbQuiz){
    document.querySelector('.quiz-container').classList.remove('show'); 
    document.querySelector('#questions-container').classList.remove('show'); 
    fetch('JS/package.json') 
	.then(response => response.json())  
	.then(data => {  
        document.querySelector('#score-container').classList.add('show'); 

        let afficherLeScore = document.querySelector('.afficherScore'); 
        afficherLeScore.innerHTML = "Votre score est de " + score.length + " sur " + data['QUIZ'][nbQuiz].nombreQuestions; 
    });
}
