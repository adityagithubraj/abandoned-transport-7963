let budsData = [
    {id:1,
    image_url:"https://m.media-amazon.com/images/I/611SRh1TG7L._AC_UY218_.jpg",
name:"Asus Vivobook 14",
price:59.999,
strikedoffprice:2999,
},
{id:1,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/61NUA0O7WTL._AC_UL450_SR450,320_.jpg",
name:"classmate spirel Notebook",
price:159,
strikedoffprice:2999,
},
{id:1,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/81xbneM30QL._AC_UL450_SR450,320_.jpg",
name:"Vedaka Sooj",
price:199,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/61+Tbm3cW-S._AC_UL320_.jpg",
name:"joypak",
price:9.999,
strikedoffprice:2999,
},
{id:1,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/81xbneM30QL._AC_UL450_SR450,320_.jpg",
name:"Vedaka Sooj",
price:199,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/61+Tbm3cW-S._AC_UL320_.jpg",
name:"joypak",
price:9.999,
strikedoffprice:2999,
},
{id:1,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/81xbneM30QL._AC_UL450_SR450,320_.jpg",
name:"Vedaka Sooj",
price:199,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/61+Tbm3cW-S._AC_UL320_.jpg",
name:"joypak",
price:9.999,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/611SRh1TG7L._AC_UY218_.jpg",
name:"Asus Vivobook 14",
price:59.999,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/61+Tbm3cW-S._AC_UL320_.jpg",
name:"joypak",
price:9.999,
strikedoffprice:2999,
},{id:1,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/81xbneM30QL._AC_UL450_SR450,320_.jpg",
name:"Vedaka Sooj",
price:199,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/61+Tbm3cW-S._AC_UL320_.jpg",
name:"joypak",
price:9.999,
strikedoffprice:2999,
},{id:1,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/81xbneM30QL._AC_UL450_SR450,320_.jpg",
name:"Vedaka Sooj",
price:199,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/61+Tbm3cW-S._AC_UL320_.jpg",
name:"joypak",
price:9.999,
strikedoffprice:2999,
},{id:1,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/81xbneM30QL._AC_UL450_SR450,320_.jpg",
name:"Vedaka Sooj",
price:199,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/61+Tbm3cW-S._AC_UL320_.jpg",
name:"joypak",
price:9.999,
strikedoffprice:2999,
},{id:1,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/81xbneM30QL._AC_UL450_SR450,320_.jpg",
name:"Vedaka Sooj",
price:199,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/61+Tbm3cW-S._AC_UL320_.jpg",
name:"joypak",
price:9.999,
strikedoffprice:2999,
},{id:1,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/81xbneM30QL._AC_UL450_SR450,320_.jpg",
name:"Vedaka Sooj",
price:199,
strikedoffprice:2999,
},{id:1,
    image_url:"https://m.media-amazon.com/images/I/61+Tbm3cW-S._AC_UL320_.jpg",
name:"joypak",
price:9.999,
strikedoffprice:2999,
}
]
let cartArr= JSON.parse(localStorage.getItem("budsData")) || []
budsData.forEach(function(el){
    let card = document.createElement("div");
    let  productimg = document.createElement("img");
    productimg.src=el.image_url;

    let name = document.createElement("h3");
    name.innerText=el.name;

    let price = document.createElement("p")
    price.innerText=el.price;
    let btn = document.createElement("button")
        btn.innerText="Add to card";
        btn.addEventListener("click", function(){
            addTocart(el);
        })

    card.append(productimg,name,price,btn)
document.querySelector("#cont").append(card);
});
function addTocart(el){
    cartArr.push(el)
    
    localStorage.setItem("budsData",JSON.stringify(cartArr))
    
}