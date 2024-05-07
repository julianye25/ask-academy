// base de datos
const dbGame = [
  {
    id: 0,
    question: 'Que se utiliza para maquetar paginas web',
    option0: 'Javascript',
    option1: 'Python',
    option2: 'Go',
    option3: 'Html',
    correct: '3',
  },
  {
    id: 1,
    question: 'Que se utiliza para dar estilos a paginas web',
    option0: 'Javascript',
    option1: 'Python',
    option2: 'Css',
    option3: 'Html',
    correct: '2',
  },
  {
    id: 2,
    question: 'Que se utiliza para dar interactividad a paginas web',
    option0: 'Javascript',
    option1: 'Python',
    option2: 'Css',
    option3: 'Html',
    correct: '0',
  },
  {
    id: 3,
    question: 'Que es un algoritmo?',
    option0: 'Programa para validar codig',
    option1: 'termino que se utiliza para agrupar cosas',
    option2: 'Serie de pasos para llegar a la solución de un problema',
    option3: 'Ecuaciones matematicas',
    correct: '0',
  },
];

let answers = [];
let countSuccess = 0;
let numQuestion = 0;

const loadQuestion = () => {
  const question = dbGame[numQuestion];

  const container = document.createElement('div');
  container.className = 'container-question';
  container.id = question.id;
  const h2 = document.createElement('h2');
  h2.textContent = question.id + 1 + ' - ' + question.question;
  container.appendChild(h2);
  const options = document.createElement('div');

  const label1 = createLabel('0', question.option0);
  const label2 = createLabel('1', question.option1);
  const label3 = createLabel('2', question.option2);
  const label4 = createLabel('3', question.option3);

  options.appendChild(label1);
  options.appendChild(label2);
  options.appendChild(label3);
  options.appendChild(label4);

  container.appendChild(options);
  document.getElementById('game').appendChild(container);
};

const createLabel = (num, textOption) => {
  const label = document.createElement('label');
  label.id = 'label' + numQuestion + num;

  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.name = 'question' + numQuestion;
  input.setAttribute('onclick', 'selection(' + numQuestion + ',' + num + ')');

  const span = document.createElement('span');
  const correction = document.createElement('span');
  correction.id = 'question' + numQuestion + num;
  span.textContent = textOption;

  label.appendChild(input);
  label.appendChild(span);
  label.appendChild(correction);

  return label;
};

for (i = 0; i < dbGame.length; i++) {
  loadQuestion();
  numQuestion++;
}

const selection = (pos, choice) => {
  answers[pos] = choice;
};
