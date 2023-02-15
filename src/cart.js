let label = document.getElementById('label');
let ShoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let total = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

total();

let generateCartItens = () => {
if(basket.length !== 0){
    return (ShoppingCart.innerHTML = basket.map((x) => {
        let {id, item} = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        let{img, name, price} = search;
        return `
        <div class="cart-item">
        <img width="100" src=${img} alt="Imagem"/>
        <div class ="details">

            <div class="title-price-x">
                <h4 class="title-price">
                <p>${name}</p>
                <p class="cart-item-price">$${price}</p>
                </h4>
                <i onclick ="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>

            <div class="buttons">
                <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${item}</div>
                <i onclick ="increment(${id})" class="bi bi-plus-lg"></i>
            </div>

        <h3>$ ${item}<h3>
        </div>
        `;  
    })
    .join(""));
}else{
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Carrinho Vazio</h2>
    <a href="index.html">
        <button class="Home">Pagina Inicial</button>
    </a>
    `;
    }
};

generateCartItens();

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
    generateCartItens();
    update(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) return

    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItens();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    total();
    TotalAmout();
};

let removeItem = (id) =>{
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem);
    generateCartItens();
    TotalAmout();
    total();
    localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () =>{
    basket = [];
    generateCartItens();
    total();
    localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmout = () =>{
    if(basket.length !== 0){
        let amount = basket.map((x) => {
            let {item, id} = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return item*search.price;
        }).reduce((x, y)=>x+y, 0)
        // console.log(amount);
        label.innerHTML=`
        <h2>Total a Pagar: $ ${amount}</h2> 
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()" class="removeAll">Esvaziar Carrinho</button>
        `;
    }
    else return;
};

TotalAmout();