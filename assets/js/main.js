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



// Hiện thị dánh sách
const row = document.querySelector('.bodyLucky .row')
const cardjs = listData.map(function(e) {
    return `<div class="col l-3 c-6">
                <div class="alignment">
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
    rdCoin()
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


// Ngẫu nhiên từ 2k ~ 500k
const envelope = $('.envelope')


// Ngẫu nhiên có tỷ lệ thấp
function rdCoin() {
    const rd = Math.random()
    
    let rd50 = .5, rd100 = .3, rd200 = .15, rd500 = .1, rdSelect, rds

    if (rd < rd500) { // 500
        rdSelect = 7
        rds = .1
    } else if (rd < rd200 && rd > rd500) { // 200
        rdSelect= 6
        rds = .15
    } else if (rd < rd100 && rd > rd200) { // 100
        rdSelect = 5
        rds = .4
    } else if (rd < rd50 && rd > rd100) { // 50
        rdSelect = 4
        rds = .5
    } else {
        rdSelect = Math.floor(Math.random() * 3) + 1 // 20 10 2
        rds = .9
    }

    const fill = listData.filter(function(e) {
        return e.id === rdSelect
    })

    const ids = fill.map(function(e) {
        return e.img
    }).toString()

    console.log(ids, rdSelect, rds)
    envelope.style.backgroundImage = `url("${ids}")`
}


