var carta_box = document.getElementsByClassName("carta-box");
var detras = document.getElementsByClassName("detras");
var img = document.getElementsByTagName("img");
var btn = document.getElementById("btn");
var contenedorImg= document.getElementById("contenedor-img");
var imgcont=1;
var activo=[];     //se usa para saber el nombre de la imagen que fue activada por el evento
var eliminaEvento=[];//se usa para  saber cual el numero del evento se va a remover
var contadorActivo=0;
var xclase=[];

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
    xclase[contadorActivo]= this.id;

    //console.log("xclase =" + xclase[contadorActivo];
    let reverso=document.getElementsByClassName(xclase[contadorActivo]);
    reverso[0].style.transform = "rotateY(0deg)";
    reverso[0].style.transition = "0.4s linear";

    let temporal="img"+xclase[contadorActivo].substr(3);//variable que rescata el numero la clase de la imagen 
    let temporalsrc = document.getElementsByClassName(temporal);//accedemos a la imagen atravez de la classe
    temporal=temporalsrc[0].getAttribute("src");                //extraemos el nombre de la imagen
    tempora2=temporal.substr(4 ,temporal.length-4 );             //se acorta el texpo para solo tener el nombre de la imagen
    console.log("nombre de img"+temporal);
    eliminaEvento[contadorActivo]=xclase[contadorActivo].substr(3);
    carta_box[xclase[contadorActivo].substr(3)].removeEventListener("click", voltear);
    activo[contadorActivo]=temporal;                            //nombre de la imagen

    if (contadorActivo==1) {
    	 validarPares(eliminaEvento[0],eliminaEvento[1], activo[0],activo[1],xclase[0],xclase[1]);   //parametro 1 y 2 referencian un indice de los eventos 3 y 4 es el nombre de la imagen
    	 console.log('contadorActivo= '+contadorActivo) 
    }
    else {
    	contadorActivo++;
    }
    
}
 
function validarPares(eventox,eventoy,valida1,valida2,xxclase,yclase){
	if (valida1==valida2) {
		console.log("son pares");
        //carta_box[eventox].removeEventListener("click", voltear);
        //carta_box[eventoy].removeEventListener("click", voltear);

		//let elimina = document.querySelectorAll("img[src='img/vista.jpg']");
		//elimina[0].style.width="500px"
		//elimina[1].style.width="500px"

	} 	
	else {
		console.log('no son pares');
		//se devuelve la clase
		carta_box[eventox].addEventListener("click", voltear);
        carta_box[eventoy].addEventListener("click", voltear);
        //se rota la imagen de portada o carta-box
        carta_box[eventox].style.transform = "rotateY(0deg)";
        carta_box[eventox].style.transition = "0.4s linear";
        carta_box[eventoy].style.transform = "rotateY(0deg)";
        carta_box[eventoy].style.transition = "0.4s linear";
        //se restaura la imagen para

    	let reversox=document.getElementsByClassName(xclase[0]);
    	console.log('xclase-- = ' + xclase)
    	reversox[0].style.transform = "rotateY(180deg)";
    	reversox[0].style.transition = "0.4s linear";

    	let reversoy=document.getElementsByClassName(xclase[1]);
    	console.log('xclase-- = ' + xclase)
    	reversoy[0].style.transform = "rotateY(180deg)";
    	reversoy[0].style.transition = "0.4s linear";


	}
	contadorActivo=0;

}