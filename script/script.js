var carta_box = document.getElementById("carta-box");
var detras = document.getElementById("detras");


carta_box.addEventListener("click", voltear);

function voltear(){
	 
	carta_box.style.transform = "rotateY(180deg)";
    carta_box.style.transition = "0.4s linear";
    detras.style.transform = "rotateY(0deg)";
    detras.style.transition = "0.4s linear";
 
}