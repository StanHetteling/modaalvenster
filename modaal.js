//video 3
const modaalinhoud = document.querySelectorAll('.modaalinhoud');

for (let i = 0; i < modaalinhoud.length; i++) {
  let modaalNode = modaalinhoud[i];
  modaalNode.parentNode.removeChild(modaalNode);
}
// video 6
const modaalKnoppen = document.querySelectorAll('.modaalKnop');
const modaalKnoppenArray = [];


//video 4
let modaalAchtergrond = document.createElement('div');
modaalAchtergrond.className = 'modaal-achtergrond';
let modaal = document.createElement('div');
modaal.className = 'modaal';
//video 8
let sluitKnop   = document.createElement('button');
sluitKnop.className = 'sluit-knop';
sluitKnop.innerHTML  = '&#x00D7;';
//video 5
const voegInhoudToe = (event) => {
  const teller = modaalKnoppenArray.indexOf(event.target);
  console.log(teller);
  modaal.appendChild(sluitKnop);
  modaal.appendChild(modaalinhoud[teller]);
  modaalAchtergrond.appendChild(modaal);
  document.body.appendChild(modaalAchtergrond);
}
//video 9
const sluitModaal = () => {
  modaal.innerHTML = '';
  modaalAchtergrond.innerHTML = '';
  document.body.removeChild(modaalAchtergrond);
}

sluitKnop.addEventListener('click', sluitModaal);

//video 6 part2

for (let i = 0; i < modaalKnoppen.length; i++) {
  //video 7 nu
  modaalKnoppenArray.push(modaalKnoppen[i]);
  //klikevent toevoegen
  modaalKnoppen[i].addEventListener('click', voegInhoudToe);
}
