const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cards = $$('.card')
const chooseCard = $('.chooseCard')
const chooseCardCard = $('.chooseCard-card')

function showChooseCard() {
    chooseCard.classList.add('open')
}

function closeChooseCard() {
    chooseCard.classList.remove('open')
}

for(const card of cards) {
    card.addEventListener('click', showChooseCard)
}

chooseCard.addEventListener('click', closeChooseCard)

chooseCardCard.addEventListener('click', function(e) {
    e.stopPropagation();
})