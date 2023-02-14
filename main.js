let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id: "1",
        name: "Nome1",
        price: 45,
        desc: "Descrição 1",
        img: "images/face.jpg"
    },
    {
        id: "2",
        name: "Nome2",
        price: 45,
        desc: "Descrição 2",
        img: "images/copa 2.jpg"
    },
    {
        id: "3",
        name: "Nome3",
        price: 45,
        desc: "Descrição 3",
        img: "images/copa 8.jpg"
    },
    {
        id: "4",
        name: "Nome4",
        price: 45,
        desc: "Descrição 4",
        img: "images/copa 4.jpg"
    }
];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let{id, name, price, desc, img}=x
        return ` 
    <div id=product-id-${id} class="item">
        <img width="220" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
        `;
    }).join(""));

};

generateShop();


// shift + backstik do teclado = ``shift + backstik do teclado = ``