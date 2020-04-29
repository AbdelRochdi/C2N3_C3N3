const questionsList = [
	{
		text: 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 1,
		value: 10
	},
	{
		text: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
		choices: `<label for="numerique">degrée</label>
        <input type="number" id="numerique">`,
		number: 2,
		value: 10
	},
	{
		text: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 3,
		value: 10
	},
	{
		text: 'Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 4,
		value: 10
	},
	{
		text:
			'Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 5,
		value: 10
	},
	{
		text: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 6,
		value: 10
	},
	{
		text: 'Ces derniers jours, avez-vous une fatigue inhabituelle ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 7,
		value: 10
	},
	{
		text: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 8,
		value: 10
	},
	{
		text: "Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?",
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 9,
		value: 10
	},
	{
		text:
			'Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 10,
		value: 10
	},
	{
		text: `Quel est votre âge ? 
        Ceci, afin de calculer un facteur de risque spécifique.`,
		choices: `<label for="numerique">ans</label>
        <input type="number" id="numerique" name="choice">`,
		number: 11,
		value: 10
	},
	{
		text: `Quel est votre taille ? 
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">cm</label>
        <input type="number" id="numerique" name="choice">`,
		number: 12,
		value: 10
	},
	{
		text: `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">kg</label>
        <input type="number" id="numerique" name="choice">`,
		number: 13,
		value: 10
	},
	{
		text: `Avez-vous de l’hypertension artérielle mal équilibrée ?
        Ou avez-vous une maladie cardiaque ou vasculaire ?
        Ou prenez vous un traitement à visée cardiologique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="sspas" name="choice" >`,
		number: 14,
		value: 10
	},
	{
		text: `Êtes-vous diabétique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 15,
		value: 10
	},
	{
		text: `Avez-vous ou avez-vous eu un cancer ces trois dernières années ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 16,
		value: 10
	},
	{
		text: `Avez-vous une maladie respiratoire ?
        Ou êtes-vous suivi par un pneumologue ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 17,
		value: 10
	},
	{
		text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 18,
		value: 10
	},
	{
		text: `Avez-vous une maladie chronique du foie ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 19,
		value: 10
	},
	{
		text: `Êtes-vous enceinte ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Non applicable</label>
        <input type="radio" id="sspas" value="sspas" name="choice" >`,
		number: 20,
		value: 10
	},
	{
		text: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="sspas" name="choice" >`,
		number: 21,
		value: 10
	},
	{
		text: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="sspas" name="choice">`,
		number: 22,
		value: 10
	}
];

const launch = document.querySelector('.launch');
const preambule = document.querySelector('.preambule');
const progress = document.querySelector('.progress');
const questions = document.querySelector('.questions');
const previous = document.querySelector('.buttons__previous');
const next = document.querySelector('.buttons__next');
const questionText = document.querySelector('.questions__text');
const form = document.querySelector('.questions__form');
const answer = document.getElementsByName('choice');
const circles = document.querySelectorAll('.circle');

console.log(circles);

circles[0].style.display = 'block';

let counter = 0;
let values = [];

// launching the test

launch.addEventListener('click', () => {
	launch.classList.add('invisible');
	preambule.classList.add('invisible');
	questions.classList.add('visible');
	progress.classList.add('flex');
	counter += 1;
	renderQuestions(counter);
	addProgress(counter);
	circles[0].style.display = 'none';
	circles[1].style.display = 'block';
});

//returning to the previous question and deleting the last value

previous.addEventListener('click', () => {
	counter -= 1;

	if (counter <= 1) {
		previous.classList.remove('visible');
	}

	values.pop();
	console.log(values);

	renderQuestions(counter);
	addProgress(counter);
});

//going to next question and adding a value

next.addEventListener('click', () => {
	const detail = document.querySelector('#numerique');

	if (form.children[1].id === 'numerique') {
		if (detail.value === '' ) {
			alert('please enter valid infos')
			return;
		}else if(counter === 2 && (detail.value < 34 || detail.value > 42)){
			alert('la temperature doit etre comprise entre 34 et 42')
			return
		}else if(counter === 11 && (detail.value > 110) ){
			alert("l'age doit etre inferieure a 110")
			return
		}else if(counter === 12 && (detail.value < 80 || detail.value > 250 )){
			alert('la taille doit etre comprise entre 80 et 250')
			return
		}else if(counter === 13 && (detail.value < 20 || detail.value > 250)){
			alert('le poids doit etre compris entre 20 et 250')
			return
		}else{
		values.push(detail.value);
		console.log(detail.value);
		counter += 1;
		}
	} else {
		for (i = 0; i < answer.length; i++) {
			if (answer[i].checked) {
				values.push(answer[i].value);
				counter += 1;
			}
		}
	}

	

	console.log(values);

	
	if (counter > 1) {
		previous.classList.add('visible');
	}

	renderQuestions(counter);
	addProgress(counter);
	
});

//rendering questions and inputs in the UI from their objects

function renderQuestions(step) {
	
	let currentQuestion = questionsList.find((ques) => {
		return ques.number == step;
	});

	questionText.textContent = currentQuestion.text;
	form.innerHTML = currentQuestion.choices;
}

function addProgress(valeur) {
	progress.firstElementChild.firstElementChild.style.width = `${(100/22)*valeur}%`
	progress.lastElementChild.textContent = `${valeur}/22`
}
