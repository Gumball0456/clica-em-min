    let text = document.getElementById("innerText");
    let button = document.querySelector("button");
   
    const insultos = ["Por que o esqueleto não brigou com ninguém?\n Porque ele não tem estômago para isso!", "Como se chama um homem inteligente em Portugal?\n\
     Turista.", "O que o zero disse para o oito?\n\
     \"Que cinto lindo você está usando!\"", "Por que o livro de matemática está sempre nervoso?\n\
     Porque tem muitos problemas.", "O que aconteceu com o lápis que levou um choque?\n\
     Ele ficou todo desenhado.","Qual é o peixe mais engraçado?\n O peixe-palhaço.", "O que uma impressora diz para outra?\n\
     \"Essa folha é sua ou uma impressão minha?\""];

    function giveInsult(){
        let indice = Math.floor(Math.random() * insultos.length);
        text.innerHTML = insultos[indice];
    }
    button.addEventListener("click",giveInsult);
