function selectMode(mode) {

var color = "ghostWhite";
var image = "img/cruzeiro.png";
var label = "Light Mode";

if (mode === "dark") {
    color = "darkSlateBlue";
    image = "img/atletico-mineiro.png";
    label = "Dark Mode";

} else if (mode === "light") {
    color = "ghostWhite";
    image = "img/atletico-mineiro.png";
    label = "Light Mode"; 

} else {
    color = "dimGray";
    image = "img/atletico-mineiro.png";
    label = "Ninja Mode"; 
}

console.log(label)


document.getElementById("icon").src = image;
document.getElementById("theme").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;
}