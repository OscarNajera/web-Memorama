var carta_box = document.getElementsByClassName("carta-box"); //arreglo de elementos para divs con clase carta-box
var detras = document.getElementsByClassName("detras");		  //arreglo de elementos para divs con clase detras
var img = document.getElementsByTagName("img");
var contenedorImg= document.getElementById("contenedor-img");
var imgcont=1;
var activo=[];     //se usa para saber el nombre de la imagen que fue activada por el evento
var eliminaEvento=[];//se usa para  saber cual el numero del evento se va a remover
var contadorActivo=0;
var xclase=[];

/////////////////////Secuencia iniciadora//////////////////////////////


///////////////////////////////////////////////////


//se crean las classes y id para posteriormente trabajar con estas 
function iniciar(){

//console.log("imagenes  =  "+ img.length);
	for(let i=0;i<carta_box.length;i++){

		carta_box[i].addEventListener("click", voltear);
		carta_box[i].setAttribute("id", "crt"+i);//se crea el id ctrx  para sincronizar con la clase ctrx 
		detras[i].classList.add("crt"+i);    //se crea la clase ctrx  para sincronizar con el id ctrx  
		img[imgcont].classList.add("img"+i); /////////////////////////////////////////////////< problema------------------------------
		imgcont+=2;
	 
	}
 	

}

 
function voltear(){
	//se realiza la rotacion de la tarjeta y se realiza mach entre el id "ctr" creado en carta-box y
	//la classe creada "ctr" en  el div con clase detras
	this.style.transform = "rotateY(180deg)";
    this.style.transition = "0.4s linear";
    this.classList.add("activo");
    xclase[contadorActivo]= this.id;

    let reverso=document.getElementsByClassName(xclase[contadorActivo]);
    reverso[0].style.transform = "rotateY(0deg)";
    reverso[0].style.transition = "0.4s linear";

    let temporal="img"+xclase[contadorActivo].substr(3);//variable que rescata el numero la clase de la imagen 
    let temporalsrc = document.getElementsByClassName(temporal); //accedemos a la imagen atravez de la classe
    temporal=temporalsrc[0].getAttribute("src");                 //extraemos el nombre de la imagen
    tempora2=temporal.substr(4 ,temporal.length-4 );             //se acorta el texpo para solo tener el nombre de la imagen
    eliminaEvento[contadorActivo]=xclase[contadorActivo].substr(3);
    carta_box[xclase[contadorActivo].substr(3)].removeEventListener("click", voltear);
    activo[contadorActivo]=temporal;                            //nombre de la imagen
    console.log(contadorActivo);
    if (contadorActivo==1) {
        //validarPares  = parametro 1 y 2 referencian un indice de los eventos 3 y 4 es el nombre de la imagen
        setTimeout(function(){validarPares(eliminaEvento[0],eliminaEvento[1], activo[0],activo[1]) }, 800);//temporizador 
    }
    else {
    	contadorActivo++;
    }
    
}
 
function validarPares(eventox,eventoy,valida1,valida2){
	console.log("imagen 1 =" + valida1);
	console.log("imagen 2 =" + valida1);

	if (valida1==valida2) {
		console.log("son pares");

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
    	reversox[0].style.transform = "rotateY(180deg)";
    	reversox[0].style.transition = "0.4s linear";
    	let reversoy=document.getElementsByClassName(xclase[1]);
    	reversoy[0].style.transform = "rotateY(180deg)";
    	reversoy[0].style.transition = "0.4s linear";
	}
	contadorActivo=0;

}

////////////////////////////////////////////////////////////////////////////////
//accion de boton

var fileVal=document.getElementById("files").files; //lectura de ficheros
var btn=document.getElementById("btn");  //etiqueta boton
var nombreImg=[];
var memorama=[];
var memoramaFiltro=[];
var ramdom=0;

btn.addEventListener("click", recopilaImagen );  //al precionar el boton se mostraran las imagenes

function recopilaImagen() {  //funcion que recorrera las imagenes y las mostrara
	var random;
	let tamano=0;
	let repit=0;
	let contador=0;

    for(let i=0;i<fileVal.length;i++){
  		nombreImg.push(fileVal[i].name);

  		memorama.push("*");
  		memorama.push("*");
  		memorama.push("*");
  		memorama.push("*");
  		memorama.push("*");
  		memorama.push("*");
  		nombreImg.push(fileVal[i].name);
        
    }

    //////////////////////////

    for(let i=0;i<nombreImg.length ; i++ ){

 		while (true) {
 		random=Math.floor(Math.random() * memorama.length) + 1;

 			console.log("Amemorama ["+ random + "]="+ memorama[random]);

 			if (memorama[random] == "*") {
 				memorama[random]=nombreImg[i];
 				console.log("Dmemorama ["+ random + "]="+ memorama[random]);
 				console.log('memorama= '+ memorama);
 				break;
 			}
 			else {
 				console.log('no es igual')
 			}

 		}
 	}

 	console.log('memorama = '+ memorama.length + memorama)
 	for(let i=0;i<memorama.length;i++){
 		if (memorama[i] != "*") {
 			memoramaFiltro.push(memorama[i]);
 		}
 	}
    for(let i=0;i<memoramaFiltro.length ;i++){
    	crearCarta(memoramaFiltro[i]);
    }

  



    //////////////////////////




  iniciar();
  

}


function crearCarta(Xcarta){
	let creaCartaBox= document.createElement("div");
	creaCartaBox.setAttribute("class","carta-box");

	let creaCarta= document.createElement("div");
	creaCarta.setAttribute("class","carta");	

	let creaCara= document.createElement("div");
	creaCara.setAttribute("class","cara");	

	let creaDetras= document.createElement("div");
	creaDetras.setAttribute("class","cara detras");


	let creaImg= document.createElement("img");
	let creaImgD= document.createElement("img");

	contenedorImg.appendChild(creaCartaBox);
	creaCartaBox.appendChild(creaCarta);

	creaCarta.appendChild(creaCara);
	creaCarta.appendChild(creaDetras);

	creaImg.setAttribute("src","https://cdn.pixabay.com/photo/2012/05/07/18/52/card-game-48980_960_720.png");
	creaCara.appendChild(creaImg);


	creaImgD.setAttribute("src","img/"+Xcarta);
 	creaDetras.appendChild(creaImgD);
 


} 