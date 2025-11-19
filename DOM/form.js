//form validation

document.getElementById('name');
let fullName = document.getElementById('name').value.trim();
//this will give us the value of our input tag with the id name
let age = document.getElementById('age').value.trim();
let email = document.getElementById('email').value.trim();
let message = document.getElementById('message').value.trim();

console.log(fullName)

let form = document.getElementById('contact-form')
let messageAction = document.getElementById('message-action')

form.addEventListener('submit', (event) =>{ // || function (event){
 //}
event.preventDefault();
if (fullName === '' ){
    messageAction.textContent='Please enter the name!';
    messageAction.style.color = 'red';
    return
}
    if (email===''){
    messageAction.textContent='Please eter your email';
    messageAction.style.color='red';
}
    if (age==='' || isNaN(age)){
    messageAction.textContent='Enter age in figures';
    messageAction.style.color = 'yellow'
}
})

 function isUnder50(message) {
  return message.length < 50;
}





function showThankYou(event) {
    event.preventDefault(); 

}
