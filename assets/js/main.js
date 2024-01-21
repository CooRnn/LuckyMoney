const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const listData = [
    {
        id: 1,
        coin: "2.000 VNĐ",
        color: "#fff",
        img: "./img/2.jpg",
    },
    {
        id: 2,
        coin: "10.000 VNĐ",
        color: "blue",
        img: "./img/10.jpg",
    },
    {
        id: 3,
        coin: "20.000 VNĐ",
        color: "yellow",
        img: "./img/20.jpg",
    },
    {
        id: 4,
        coin: "50.000 VNĐ",
        color: "aqua",
        img: "./img/50.jpg",
    },
    {
        id: 5,
        coin: "100.000 VNĐ",
        color: "pink",
        img: "./img/100.jpg",
    },
    {
        id: 6,
        coin: "200.000 VNĐ",
        color: "green",
        img: "./img/200.jpg",
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
    card.addEventListener('click', showChooseCard,

    // listData.filter(function(e) {
    //     return e.id === card[this]
    // }), 
    // console.log(2),
    // return `<div class="animatedCard">
    //             <div class="envelope"></div>
    //             <div class="top__envelope"></div>
    //             <div class="right__envelope"></div>
    //             <div class="left__envelope"></div>
    //             <div class="animatedCard__circle"></div>
    //             <div class="animatedCard__rhombus">${e.id}</div>
    //             <div class="animatedCard__footer">
    //                 <div class="animatedCard__rhombuses"></div>
    //                 <div class="animatedCard__rhombuses"></div>
    //                 <div class="animatedCard__rhombuses"></div>
    //             </div>
    //         </div>`;
    )}
    // chooseCard.innerHTML = card.join(''),

chooseCard.addEventListener('click', closeChooseCard)

animatedCard.addEventListener('click', function(e) {
    e.stopPropagation();
})


// xử lý bấm card



