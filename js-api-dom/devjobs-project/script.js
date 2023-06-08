// zadanie nr 1

const jobsGrid = document.querySelector('.jobs__grid')
const jobCard = document.querySelector('.job__card')


const AMOUNT_OF_NEW_OFFERS_JOBS = 3

for (let i=1; i<= AMOUNT_OF_NEW_OFFERS_JOBS; i++) {
    let newJobCard = jobCard.cloneNode(true);
    jobsGrid.appendChild(newJobCard);
}


//zadanie nr 2

const allJobCardPosition = document.querySelectorAll('.job__card__position')

let newJobCardPosition = ['Junior JavaScript Developer', 'Python Developer', 'Senior Java Developer']

for (let i=0; i<newJobCardPosition.length; i++) {
    allJobCardPosition[i+1].textContent = newJobCardPosition[i]
}


//zadanie nr 3 

const jobListed = document.querySelector('.jobs-listed span')
const allJobCards = document.querySelectorAll('.job__card')

function countJobCards() {
    let num = 0;

    for (let i = 0; i < allJobCards.length; i++) {
        if(allJobCards[i].style.display == 'block') {
            num++;
        } 
    }
    jobListed.textContent = num;
  }
  countJobCards();


//zadanie nr 4

const btnToggle = document.querySelector('.toggle__button')
btnToggle.addEventListener('click', () => document.querySelector('body').classList.toggle('dark-theme'))


// zadanie nr 5

function liveSearch() {
    let searchValue = document.querySelector("#search").value;
 
    for (let i = 0; i < allJobCards.length; i++) {
        if(allJobCardPosition[i].textContent.toLowerCase()
                .includes(searchValue.toLowerCase())) {
                    allJobCards[i].style.display = 'block'
        } else {
            allJobCards[i].style.display = 'none';
        }
    }
    countJobCards(); 
}
liveSearch();

const searchInput = document.querySelector('#search')
searchInput.addEventListener('input', liveSearch)



//zadanie nr 6

const searchForm = document.querySelector('.search-bar__container')
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchInput.value = '';
    for (let i = 0; i < allJobCards.length; i++) {
        allJobCards[i].style.display = 'block'; 
        } 
    countJobCards()
    })
