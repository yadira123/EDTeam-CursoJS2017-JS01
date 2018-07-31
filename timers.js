//es para hacer ejecucionesconsecutivas 
/*
* Timers
* Hay dos tipos de timers:
* .setTimeOut(callback, tiempo) <- lo que hace es esperar un tiempo y luego d ese tiempo ejecuta el callback
* .setInterval(callback, tiempo) <- ejecuta la funcion q  le pases como parametro(callback) repetidas veces segun la cantidad de tiempo q le pase como parametro
*/

let counter = num => console.log(++num);

//espera 6seg para q se ejecute esta funcion
//setTimeout(function(){
//	counter(1)
//},6000);


//No sirve
//setTimeout(counter(1),3000);
//
//console.log(setTimeout(counter(1),3000));
//	


/*
//Ejemplo con setInterval q ejecute esta funcion cada 2seg
setInterval(function(){
	counter(1);
},2000);
*/


/*
let count = 0;

setInterval(function(){
	console.log(++count);
},2000);
*/
/*let count = 0;
let myInterval = setInterval(function(){
	console.log(++count);
	if(count === 5){
		clearInterval(myInterval);
	}
},1000);*/


//----------------------	ejercicios	--------------
/*//1. RELOJ
let reloj = setInterval(function(){
	document.body.innerHTML = new Date().toLocaleString();
},1000);*/

/*
//CONTADOR HACIA ATRAS
let countDown = ms => {
	let myCountDown = setInterval(function(){
		//en cada ejecucion
		ms -= 1000;//resto a ms -1s
		let minutes = Math.floor(ms / (1000 * 60)),
			seconds = Math.floor( (ms % (1000 * 60) )/1000);
		document.body.innerHTML = `Quedan ${minutes} minutos y ${seconds} segundos`;
		
		if(ms === 0){
			clearInterval(myCountDown);//limpia el intervalo
			document.body.innerHTML = `Tiempo Cumplido`;
		}
		
	},1000)
}

//ejecutarlo
countDown(100000);*/



//EFECTO MAQUINA DE ESCRIBIR	
/*let writing = str => {

	let arrFromString = str.split('');//tranforma a un array este string
	let i = 0;//contador
	
	let printStr = setInterval(function(){
		document.body.innerHTML += arrFromString[i];
		i++;
		
		//si la cadena del string ya termino
		if(i === arrFromString.length){
			clearInterval(printStr);//limpia el intervalo	
			document.body.style.color = 'steelblue';
		}
		
	},300);//se imrpima cada medio segundo
}*/
let writing = str => {

	let arrFromString = str.split('');//tranforma a un array este string
	let i = 0;//contador
	
	let printStr = setInterval(function(){
			
		//si la cadena del string tiene un espacio vacio
		if(arrFromString[i] === ' '){
			document.body.innerHTML += arrFromString[i];
			document.body.innerHTML += arrFromString[i+1];
			i+=2;
		}else{
			document.body.innerHTML += arrFromString[i];
			i++;
		}
		
		
		//si la cadena del string ya termino
		if(i === arrFromString.length){
			clearInterval(printStr);//limpia el intervalo	
			document.body.style.color = 'steelblue';
		}
		
	},200);//se imrpima cada medio segundo
}

writing('Bienvenidos a Escuela Digital')
