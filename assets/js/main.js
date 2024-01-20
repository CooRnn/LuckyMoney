const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const listData = [
    {
        id: 1,
        coin: "2.000 VNĐ",
        color: "#fff",
        img: "./img/2k.jpg",
    },
    {
        id: 2,
        coin: "5.000 VNĐ",
        color: "blue",
        img: "./img/5k.jpg",
    },
    {
        id: 3,
        coin: "10.000 VNĐ",
        color: "yellow",
        img: "./img/10k.jpg",
    },
    {
        id: 4,
        coin: "20.000 VNĐ",
        color: "aqua",
        img: "./img/20k.jpg",
    },
    {
        id: 5,
        coin: "50.000 VNĐ",
        color: "pink",
        img: "./img/50k.jpg",
    },
    {
        id: 6,
        coin: "100.000 VNĐ",
        color: "green",
        img: "./img/100k.jpg",
    },
]


// Hiện thị dánh sách
const row = document.querySelector('.bodyLucky .row')
const cardjs = listData.map(function(e) {
    return `<div class="col l-3 c-6">
                <div class="card">
                    <div class="card__top"></div>
                    <div class="card__right"></div>
                    <div class="card__left"></div>
                    <div class="cricle"></div>
                    <div class="rhombus">${e.id}</div>
                    <div class="card__footer">
                        <div class="rhombuses"></div>
                        <div class="rhombuses"></div>
                        <div class="rhombuses"></div>
                    </div>
                </div>
            </div>`;
})

row.innerHTML = cardjs.join('')


// Ẩn/Hiện Choose Card
const cards = $$('.card')
const chooseCard = $('.chooseCard')
const animatedCard = $('.animatedCard')

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

animatedCard.addEventListener('click', function(e) {
    e.stopPropagation();
})


//


