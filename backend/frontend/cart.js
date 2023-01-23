let output =  JSON.parse(localStorage.getItem("budsData"))
 //console.log(output);
 //this is for total amount...
 let total_price = output.reduce(function(acc,el){
return acc+el.price;
 },0)
document.querySelector("h2>span").innerText=output.length
 document.querySelector("h1>span").innerText=total_price
 output.forEach(function(el){
    let card = document.createElement("div");
    let  productimg = document.createElement("img");
    productimg.src=el.image_url;

    let name = document.createElement("h3");
    name.innerText=el.name;

    let price = document.createElement("p")
    price.innerText=el.price;
 
card.append(productimg,name,price);

    document.querySelector("div").append(card);
 })