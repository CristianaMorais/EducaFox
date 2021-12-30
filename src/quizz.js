document.addEventListener("DOMContentLoaded", function() {
	var r = document.querySelector(':root');
	if (localStorage.bodyColor) {
        r.style.setProperty('--bodyColor',localStorage.bodyColor);
    }
    if (localStorage.titleColor) {
        r.style.setProperty('--titleColor',localStorage.titleColor);
    }
    if (localStorage.subtitleColor) {
        r.style.setProperty('--subtitleColor',localStorage.subtitleColor);
    }
    if (localStorage.buttonColor) {
        r.style.setProperty('--buttonColor',localStorage.buttonColor);
    }
    if (localStorage.buttonBColor) {
        r.style.setProperty('--buttonBColor',localStorage.buttonBColor);
    }
    if(localStorage.textColor) {
        r.style.setProperty('--textColor',localStorage.textColor);
    }
	if(localStorage.titleF){
        r.style.setProperty('--titleFont',localStorage.titleF);
    }
    if(localStorage.subtitleF){
        r.style.setProperty('--subTitleFont',localStorage.subtitleF);
    }
    if(localStorage.buttonTextF){
        r.style.setProperty('--buttonTextFont',localStorage.buttonTextF);
    }
    if(localStorage.textF){
        r.style.setProperty('--textFont',localStorage.textF);  
    }  
	startq();
  });


var questions = [
    {
        question : "As Cookies/HTTP cookies s&atildeo: ",
        answers : {
            a: "First-party tracking.",
            b: "Third-party tracking.",
            c: "Uma extens&atildeo que nos ajuda a carregar o browser mais r&aacutepido."
        },
        correctAnswer : 'b'
    },
    {
        question : "Cada solicita&ccedil&atildeo feita pela Internet cont&eacutem o nosso endere&ccedilo IP. Este &eacute: ",
        answers : {
            a: "&Uacutenico e nunca muda.",
            b: "&Uacutenico e muda todas as vezes que uso a minha rede de internet.",
            c: "&Uacutenico e muda toda as vezes que mudo para uma nova rede."
        },
        correctAnswer : 'c'

    },
	{
        question : "Para &quotrastrear&quot quem &eacute quem, os rastreadores(ou trackers) precisam de identificadores que sejam: ",
        answers : {
            a: "&Uacutenicos, persistentes e dispon&iacuteveis.",
            b: "&Uacutenicos e persistentes.",
            c: "&Uacutenicos e dispon&iacuteveis."
        },
        correctAnswer : 'a'

    },
	{
        question : "Alguns exemplos de identificadores da web s&atildeo",
        answers : {
            a: "Cookies, IP address, TLS state, browser fingerprint.",
            b: "Cookies, IP address, TLS state,local storage super cookie, browser fingerprint.",
            c: "Cookies, TLS state, browser fingerprint."
        },
        correctAnswer : 'b'

    },
	{
        question : "Qual das seguintes a&ccedil&otildees deves fazer para restringir o acesso &agrave tua privacidade?",
        answers : {
            a: "Atualizar o meu software e n&atildeo compartilhar as  minhas informa&ccedil&otildees com ningu&eacutem.",
            b: "N&atildeo compartilhar minhas informa&ccedil&otildees com ningu&eacutem, usar extens&otildees que me protegem de an&uacutencios desnecess&aacuterios e um bom navegador.",
            c: "Existem v&aacuterias maneiras de reduzir o problema, mas ainda n&atildeo existe uma solu&ccedil&atildeo 100% segura."
        },
        correctAnswer : 'c'

    },
	{
        question : "Ter palavras passes fortes &eacute um tipo de prote&ccedil&atildeo de seguran&ccedila. Esta deve ser: ",
        answers : {
            a: "Longas ou com letras (mai&uacutesculas e min&uacutesculas)",
            b: "Longas e de prefer&ecircncia combinar letras (mai&uacutesculas e min&uacutesculas), n&uacutemeros ou s&iacutembolos.",
            c: "Longas e de prefer&ecircncia combinar letras (mai&uacutesculas e min&uacutesculas), n&uacutemeros e at&eacute mesmo s&iacutembolos."
        },
        correctAnswer : 'c'

    },
	{
        question : "Qual &eacute o protocolo que nos d&aacute uma camada extra de prote&ccedil&atildeo?",
        answers : {
            a: "O HTTP.",
            b: "O HTTPS.",
            c: "Qualquer um desde que tenha os devidos cuidados online."
        },
        correctAnswer : 'b'

    },
	{
        question : "O que &eacute o phishing?",
        answers : {
            a: "Pode ser um desporto ou um ataque, depende de onde ocorre",
            b: "Um tipo de extens&atildeo que nos ajuda a manter os nossas mensagens de email seguros.",
            c: "Um tipo de ciberataque, por exemplo com recurso a mensagens de email."
        },
        correctAnswer : 'c'

    },
	{
        question : "Recebi um email a dizer que fui selecionado para ganhar um iPhone 12 e que s&oacute preciso de preencher um question&aacuterio com os meus dados. O que devo fazer?",
        answers : {
            a: "O remetente parece-me fidedigno ent&atildeo n&atildeo h&aacute problema, at&eacute porque n&atildeo est&aacute na pasta de scam.",
            b: "O remetente parece-me fidedigno, n&atildeo h&aacute problema desde que n&atildeo use a minha palavra passe.",
            c: "Como o remetente &eacute duvidoso devo apagar a mensagem e bloquear a pessoa que a enviou."
        },
        correctAnswer : 'c'

    },
	{
        question : "Quando uso as redes sociais, posso partilhar qualquer informa&ccedil&atildeo desde que tenha o meu perfil privado. A frase &eacute: ",
        answers : {
            a: "Verdadeira.",
            b: "Falsa.",
            c: "Ambas"
        },
        correctAnswer : 'b'

    },
	{
        question : "Devemos manter sempre tanto a nossa firewall como antiv&iacuterus atualizado porque: ",
        answers : {
            a: "Obtenho uma notifica&ccedil&atildeo para atualizar ent&atildeo deve ser importante.",
            b: "Estes s&atildeo um dos elementos importantes para a nossa seguran&ccedila na rede, monitorizando os ficheiros e informa&ccedil&otildees no nosso computador.",
            c: "Estes s&atildeo elementos importantes no nosso computador."
        },
        correctAnswer : 'b'

    },
	{
        question : "Fazemos muitos downloads na internet, contudo estes t&ecircm um lado perigoso. Qual &eacute?",
        answers : {
            a: "Os atacantes podem usar este meio para invadir o nosso computador, por isso devo ter sempre cuidado onde os fa&ccedilo e devo fazer scan do ficheiro/programa antes de o abrir.",
            b: "Os atacantes podem usar este meio para invadir o nosso computador, tenho de ter cuidado com os sites onde os fa&ccedilo.",
            c: "N&atildeo t&ecircm um lado perigoso."
        },
        correctAnswer : 'a'

    },
	{
        question : "Outra forma para nos protegermos online &eacute a autentica&ccedil&atildeo por 2 etapas. Esta consiste em: ",
        answers : {
            a: "Eu ao tentar fazer autentica&ccedil&atildeo num site, receber tamb&eacutem notifica&ccedil&atildeo de que algu&eacutem fez login na minha conta, com informa&ccedil&oacutees como o local e hora do acesso.",
            b: "Eu ao tentar fazer autentica&ccedil&atildeo num site, receber tamb&eacutem notifica&ccedil&atildeo com um c&oacutedigo para finalizar a autentica&ccedil&atildeo.",
            c: "Ambas s&atildeo aceit&aacuteveis."
        },
        correctAnswer : 'c'

    },
	{
        question : "Existem v&aacuterias formas de nos protegermos online, entre elas est&atildeo a de: ",
        answers : {
            a: "Ter uma palavra passe forte e usar a autentica&ccedil&atildeo por duas etapas.",
            b: "Ter tanto a firewall como antiv&iacuterus atualizado.",
            c: "Ambas est&atildeo corretas."
        },
        correctAnswer : 'c'

    },
	{
        question : "Privacidade e seguran&ccedila na web s&atildeo a mesma coisa?",
        answers : {
            a: "N&atildeo, a privacidade &eacute a capacidade que eu tenho de controlar como as minha informa&ccedil&otildees s&atildeo tratadas e a seguran&ccedila s&atildeo todos os cuidados que tenho para protoger todas as minhas coisas que est&atildeo conectadas com a internet.",
            b: "N&atildeo, a privacidade &eacute eu n&atildeo partilhar as minhas informa&ccedil&otildees e a seguran&ccedila &eacute eu n&atildeo desativar a minha firewall/antiv&iacuterus e mant&ecirc-los atualizados.",
            c: "Sim, se estivermos a falar no mundo da internet."
        },
        correctAnswer : 'a'

    }      
	
]
function startq() {
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    generateQuiz(questions, quizContainer, resultsContainer, submitButton);
}

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
	    var answers;

	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		for(letter in questions[i].answers){

			answers.push(
				'<label>' + '<p>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ') '
					+ questions[i].answers[letter] + '</p>' + '</label>'
				
			);
			console.log(answers);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>' + '<div class="answers">'
			+ answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
    }

	function showResults(questions, quizContainer, resultsContainer){
		// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'green';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = 'Acertaste ' + numCorrect + ' de ' + questions.length + ' quest&otildees ! ';
    if (numCorrect == questions.length) {
        if(localStorage.questobj != 1) {
            localStorage.questobj = 1;
            if(typeof localStorage.points === "undefined") {
                localStorage.points = 0;
            }
            localStorage.points = parseInt(localStorage.points) + 5;
            console.log(localStorage.points);
        }
    } 
    }

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}