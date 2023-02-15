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
        console.log(x);
        let {id, item} = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
        <div class="cart-item">
        <img width="100" src=${search.img} alt=""/>
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