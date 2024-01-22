const listFake = [
    {
        id: 1,
        img: "../assets/img/20.jpg",
    },
    {
        id: 2,
        img: "../assets/img/100.jpg",
    },
    {
        id: 3,
        img: "../assets/img/100.jpg",
    },
    {
        id: 4,
        img: "../assets/img/100.jpg",
    },
    {
        id: 5,
        img: "../assets/img/100.jpg",
    },
    {
        id: 6,
        img: "../assets/img/100.jpg",
    },
    {
        id: 7,
        img: "../assets/img/100.jpg",
    },
]

function showChooseCard() {
    chooseCard.classList.add('open')
    randomFake()
}

for(const card of cards) {
    card.addEventListener('click', showChooseCard)
}


// Ngẫu nhiên 90% ra 100.000 VNĐ

function randomFake() {
    const rdFake = listFake[(Math.floor(Math.random() * (listFake.length)))].img.toString()

    envelope.style.backgroundImage = `url("${rdFake}")`
}
