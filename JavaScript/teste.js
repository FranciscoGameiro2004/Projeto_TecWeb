function testeClick(texto) {
    console.log(texto)
}

function testeClick() {
    console.log("testeClick")
}

btnRemove = document.getElementById("removeQuantity");
btnZero = document.getElementById("zeroQuantity");
btnAdd = document.getElementById("addQuantity");

txtQuantity = document.getElementById("shopQuantity");
let newQuantity = 0

function removeQuantity() 
{
    Quantity = document.getElementById("shopQuantity").textContent;
    console.log(Quantity);
    remove = 1
    newQuantity = Quantity - remove;
    txtQuantity.textContent = newQuantity;
}
function zeroQuantity() 
{
    Quantity = document.getElementById("shopQuantity").textContent;
    console.log(Quantity);
    newQuantity = 0;
    txtQuantity.textContent = newQuantity;
}
function addQuantity() 
{
    Quantity = document.getElementById("shopQuantity").textContent;
    console.log(Quantity);
    add = 1;
    newQuantity = Quantity + add;
    txtQuantity.textContent = newQuantity;
}
btnRemove.addEventListener("click",removeQuantity);
btnZero.addEventListener("click",zeroQuantity);
btnAdd.addEventListener("click",addQuantity);

