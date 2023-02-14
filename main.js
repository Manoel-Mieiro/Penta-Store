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

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x
        let search = basket.find((x)=> x.id === id) || [];
        return ` 
    <div id=product-id-${id} class="item">
        <img width="220" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="buttons">
                    <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                    <i onclick ="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
        `;
    }).join(""));

};

generateShop();


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });

    }
    else {
        search.item += 1;
    }
localStorage.setItem("data", JSON.stringify(basket));
    update(selectedItem);
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    update(selectedItem);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    total();
};

let total = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

total();

// shift + backstik do teclado = ``shift + backstik do teclado = ``