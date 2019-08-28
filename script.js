const database = firebase.database().ref();

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', handleClick);

function handleClick(){
  database.push(input.value);
  input.value = '';
}
