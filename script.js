'use strict'; //for better error handling and to prevent accidental globals

const clock = document.getElementById('clock');
const greeting = document.getElementById('greeting');
const nameField = document.getElementById('name');
const focusField = document.getElementById('focus');

//extra : quote element
const quoteBox = document.createElement('p');
quoteBox.id = 'quote';
quoteBox.style.marginTop = '15px';
quoteBox.style.fontStyle = 'italic';
document.querySelector('.container').appendChild(quoteBox);

//quotes array
const quotes = 
[
  "Believe you can and you're halfway there.",
  "Do something today that your future self will thank you for.",
  "Small steps every day lead to big results.",
  "Focus on progress, not perfection.",
  "Your limitation—it’s only your imagination."
];

//show time
function showTime() {
  const now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  const amPm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;

  clock.textContent = `${addZero(hour)}:${addZero(min)}:${addZero(sec)} ${amPm}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (n < 10 ? '0' : '') + n;
}

//set background and greeting
function setBgGreet() {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('images/morning.jpg')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = '#fcffdc';
  } 
  
  else if (hour < 18) {
    document.body.style.backgroundImage = "url('images/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = '#e3ee44';
  } 
  
  else {
    document.body.style.backgroundImage = "url('images/evening.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = '#a7a6d8';
  }

  // show random quote
  const randIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = quotes[randIndex];
}

//get name
function getName() 
{
  if (localStorage.getItem('name') === null) {
    nameField.textContent = '[Enter Name]';
  } 
  
  else {
    nameField.textContent = localStorage.getItem('name');
  }
}

//set name
function setName(e) 
{
  if (e.type === 'keypress') {
    if (e.key === 'Enter') {
      localStorage.setItem('name', e.target.textContent);
      nameField.blur();
    }
  } 
  
  else {
    localStorage.setItem('name', e.target.textContent);
  }
}

//get focus
function getFocus() 
{
  if (localStorage.getItem('focus') === null) {
    focusField.textContent = '[Enter Focus]';
  } 
  else {
    focusField.textContent = localStorage.getItem('focus');
  }
}

//set focus
function setFocus(e) 
{
  if (e.type === 'keypress') {
    if (e.key === 'Enter') {
      localStorage.setItem('focus', e.target.textContent);
      focusField.blur();
    }
  } 

  else {
    localStorage.setItem('focus', e.target.textContent);
  }
}

//event listeners
nameField.addEventListener('keypress', setName);
nameField.addEventListener('blur', setName);
focusField.addEventListener('keypress', setFocus);
focusField.addEventListener('blur', setFocus);

//run
showTime();
setBgGreet();
getName();
getFocus();
