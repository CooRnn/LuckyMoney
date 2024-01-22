const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const listData = [
    {
        id: 1,
        coin: "2.000 VNĐ",
        img: "assets/img/2.jpg",
    },
    {
        id: 2,
        coin: "10.000 VNĐ",
        img: "assets/img/10.jpg",
    },
    {
        id: 3,
        coin: "20.000 VNĐ",
        img: "assets/img/20.jpg",
    },
    {
        id: 4,
        coin: "50.000 VNĐ",
        img: "assets/img/50.jpg",
    },
    {
        id: 5,
        coin: "100.000 VNĐ",
        img: "assets/img/100.jpg",
    },
    {
        id: 6,
        coin: "200.000 VNĐ",
        img: "assets/img/200.jpg",
    },
    {
        id: 7,
        coin: "500.000 VNĐ",
        img: "assets/img/500.jpg",
    },
]

const envelope = $('.envelope')


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
    randomCoin()
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


// randomCoin()
function randomCoin() {
    const max = Math.floor(Math.random() * 7) + 1;
    const fill = listData.filter(function(e) {
        return e.id === max
    })

    const ids = fill.map(function(e) {
        return e.img
    }).toString();

    console.log(max, ids)
    envelope.style.backgroundImage = `url("${ids}")`;
}

