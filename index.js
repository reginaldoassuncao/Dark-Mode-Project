function selectMode(mode) {

var color = "ghostWhite";
var image = "img/cruzeiro.png";
var label = "Modo claro";

if (mode === "dark") {
    color = "darkSlateBlue";
    image = "img/atletico-mineiro.png";
    label = "Modo escuro";

} else if (mode === "light") {
    color = "ghostWhite";
    image = "img/atletico-mineiro.png";
    label = "Modo claro"; 

} else {
    color = "dimGray";
    image = "img/atletico-mineiro.png";
    label = "Modo cinza"; 
}

console.log(label)


document.getElementById("icon").src = image;
document.getElementById("theme").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;
}