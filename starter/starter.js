const title = document.querySelector('.title');
title.textContent = 'Starter';

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'tomek sobkow',
    job: 'UX &  ETH Blockchain developer',
    img: '/starter/PICTURES/TomAgaFlipped.jpg',
    text: "At Crypto Blockchain, my focus is on developing cutting-edge (ETH) tokens using Solidity, drawing from a rich background in system administration and network solutions. Our team's commitment to excellence has led to the successful implementation of advanced blockchain projects",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: '/starter/PICTURES/anna johnson.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: '/starter/PICTURES/peter jones.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: '/starter/PICTURES/bill anderson.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id:5,
    name: 'Julia roberts',
    job: 'an actor',
    img: '/starter/PICTURES/person-1.jpeg',
    text:'Julia Fiona Roberts is an American actress. Known for her leading roles across various genres, she has received multiple accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards.'
  }
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;
let revievLength = reviews.length -1;

//load initial item Zdarzenie ' DOMContentLoaded' jest wyzwalane, gdy dokument HTML
//  zostanie całkowicie przeanalizowany, a wszystkie odroczone skrypty 
// ( <script defer src="…">i <script type="module">) zostaną pobrane i wykonane.
//  Nie czeka na zakończenie ładowania innych rzeczy, takich jak obrazy, podramki i skrypty asynchroniczne.
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
  
});

//show person based on item's array 
//function showPerson(person){
//  console.log('Current item is ', currentItem)
//  const item = reviews[person];

function showPerson(){
  console.log('Current item is ', currentItem);
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click',function(){
  currentItem ++;
  currentItem < revievLength ? showPerson(currentItem) : showPerson(currentItem = 0 );
});

//show previous person
prevBtn.addEventListener('click',function(){
  currentItem--
  currentItem < 0 ? showPerson(currentItem = revievLength) : showPerson(currentItem );
});



randomBtn.addEventListener('click', function(){
  
  let fakeRandomNumber = Math.floor(Math.random() * reviews.length)
  console.log('Random button clicked!',  fakeRandomNumber );

  if(fakeRandomNumber == currentItem ){
    if(currentItem >= 0 && currentItem < revievLength) {
      currentItem++;
      showPerson();
    }else if(currentItem == revievLength){
      currentItem = 0;
      showPerson();
    }
  } else {
    currentItem = fakeRandomNumber;
    showPerson();
  }
});

