const database = firebase.database().ref();

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', handleClick);

function handleClick(){
  database.push(input.value);
  input.value = '';
}



database.on('child_added', function(data){
const messageDiv = document.querySelector('.messages')
const message = document.createElement('p')
message.innerText = data.val();
messageDiv.appendChild(message);
});
