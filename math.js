/*
OBJETO MATH: 
solo tiene propiedades y metodos estáticos. Eso quiere decir que no necesitamos instanciarlo si no q tenemos q llamar a la clase 
ejm: Math.pow(); 


METODOS:

Math.max(a,b,c,...n) <- devuelve el maximo valor
Math.min(a,b,c,...n) <- 
Math.random() <- numero aleatorio entre 0 y 1
Math.floor() <- redondea hacia abajo un decimal
Math.ceil() <- redondea hacia arriba un decimal
Math.round() <- redondea un decimal a su entero mas cercano 
Math.pow(x,e) <-  eleva a la potencia de n al exponente x
.Math.sqrt(n) <- devuelve la raiz de n
*/
/*
let arr = [1,2,53,5,6,32];

console.log(Math.max(...arr));
console.log(Math.max(...arr));*/


//funcion q devolvera un random de acuerdo a su valor minimo y maximo q le pase como argumento
let  getRandomNumber = (min,max) => {
	return Math.floor(Math.random() * (max-min)+min);
}


/*
let arr = ['jose','carlos','ani','alexis'];

console.log(arr[getRandomNumber(0,arr.length)]);
*/


/*//Obtener un entero aleatorio
//Math.random devuelve un decimal aleatorio
let randomNumber = Math.floor(Math.random()*10);//numero aleatorio del 0 a 10
//redondeamos hacia abajo por q queremos el 0
console.log(randomNumber);*/




//adivina el numero
let guestNumber = (min,max) => {
	let numMachine = getRandomNumber(min,max);
	let numPlayer;
	let count = 0;
	do{
		numPlayer = Number(prompt(`Adivina el numero de la máquina (entre ${min} y ${max})`));
		count++;
		if(numPlayer > numMachine){
			alert(`Tu número es mayor que el de la máquina. Vas ${count} ${count===1 ? 'intento' : 'intentos'}!`);
		}else if(numPlayer < numMachine){
			alert(`Tu numero es menor que el de la maquina. Vas ${count} ${count===1 ? 'intento' : 'intentos'}!`);
		}else{
			alert(`!Adivinaste el numero en ${count} ${count===1 ? 'intento' : 'intentos'}!`);
		}
		
	}while(numPlayer != numMachine);
}




guestNumber(15,20);
















