var carta_box = document.getElementsByClassName("carta-box");
var detras = document.getElementsByClassName("detras");
var img = document.getElementsByTagName("img");
var btn = document.getElementById("btn");
var contenedorImg= document.getElementById("contenedor-img");
var imgcont=1;
var activo=[];     //se usa para saber el nombre de la imagen que fue activada por el evento
var eliminaEvento=[];//se usa para  saber cual evento se va a remover
var contadorActivo=0;


//se crean las classes y id para posteriormente trabajar con estas 
for(let i=0;i<carta_box.length;i++){
	carta_box[i].addEventListener("click", voltear);
	carta_box[i].setAttribute("id", "crt"+i);
	detras[i].classList.add("crt"+i);
	img[imgcont].classList.add("img"+i);
	imgcont+=2;
 
}
 
function voltear(){
	//se realiza la rotacion de la tarjeta y se realiza mach entre el id "ctr" creado en carta-box y
	//la classe creada "ctr" en  el div con clase detras
	this.style.transform = "rotateY(180deg)";
    this.style.transition = "0.4s linear";
    this.classList.add("activo");
    let xclase= this.id;
    console.log(this.id)
    console.log(xclase.substr(3))
    let reverso=document.getElementsByClassName(xclase);
    reverso[0].style.transform = "rotateY(0deg)";
    reverso[0].style.transition = "0.4s linear";

    let temporal="img"+xclase.substr(3);//variable que rescata el numero la clase de la imagen 
    //let temporal2=parseInt(xclase.substr(3));
    //console.log("temporal2 = "+temporal2);
    let temporalsrc = document.getElementsByClassName(temporal);//accedemos a la imagen atravez de la classe
    temporal=temporalsrc[0].getAttribute("src");                //extraemos el nombre de la imagen
    tempora2=temporal.substr(4 ,temporal.length-4 );             //se acorta el texpo para solo tener el nombre de la imagen
    console.log("nombre de img"+temporal);
    eliminaEvento[contadorActivo]=xclase.substr(3)
    activo[contadorActivo]=temporal;

    if (contadorActivo==1) {
    	 validarPares(eliminaEvento[0],eliminaEvento[1], activo[0],activo[1]);
    	 console.log('contadorActivo= '+contadorActivo)
    }
    else {
    	contadorActivo++;
    }
    
}
 


function validarPares(eventox,eventoy,valida1,valida2){
	if (valida1==valida2) {
		console.log("son pares");
        carta_box[eventox].removeEventListener("click", voltear);
        carta_box[eventoy].removeEventListener("click", voltear);

		let elimina = document.querySelectorAll("img[src='img/vista.jpg']");
		//elimina[0].style.width="500px"
		//elimina[1].style.width="500px"

	} 	
	else {
		console.log('no son pares');
	}
	contadorActivo=0;

}