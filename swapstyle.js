function setStyle () {

if (screen.width <= 800) {

document.getElementById("sheet").setAttribute("href", "mstyle.css");  

}else{
document.getElementById("sheet").setAttribute("href", "style.css");  
}
}