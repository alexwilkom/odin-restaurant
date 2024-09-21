function Card(imgUrl, name) {
    return `
        <div class="card">
            <img src="${imgUrl}" alt="A delicious meal by The Odin Restaurant">
            <div class="food-desc">
                <h3>${name}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore earum esse magni accusamus
                    aliquam
                    ut
                    dolorem illum harum. Tempora, at?</p>
            </div>
        </div>
    `
}

export default Card;