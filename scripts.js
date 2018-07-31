//console.dir('hola Mundo');


//--------------- punto y coma ; ------------
// js es case sensitive
/* Punto y coma(semicolon - ASI(Automatic Semicolon Insertion->es el algoritmo q usa el interprete para meter ; en el codigo))*/
//tecnicamente el ; no e sobligatorio en js
//let holaMundo='Hola Mundo';
//
//console.log(holaMundo);

//let a
//
//if(1<5){ 
//     a = "holi"
//    console.log(a)
//}


//----------------Espacios en Blanco--------
//function mi(){
//	let hola;
//	hola=6;
//	console
//}


/*//----------------- VARIABLES Y CONSTANTES ------
//variables
let precio=100,
 	impuesto=precio*0.18,
 	descuento=precio*0.1, preciofinal=precio+impuesto-descuento;


console.log(preciofinal);


//constantes
const edyear=2010;

console.log(edyear);*/


/*//-----------------	TIPOS DE DATOS --------------
//JS es dinamicamente tipado.
//JS esta basado en prototipos<- todo td nace d un prototipo del cual toma sus propiedades y metodos. Ejm:
let saludo='Hola soy dora';

console.log(saludo.length);*/

/*//tipo de dato primitivos
//-String

let amigo='Jon Mircha';
let saludo=`Bienvenido, ${amigo}`;*/

/*//-number 
let nacimiento='1997';
let year=new Date().getFullYear();
let edad=year-nacimiento;
let edad2=`${year-nacimiento}`;
console.log(edad2);*/

/*//-boolean 
if('a'=='b'){
	console.log('son iguales');
}else{
	console.log('no son iguales');
}*/

/*//-undefined : es cuando no se le asigna un valor a una variable
let nodefined;
console.log(nodefined);
*/

/*//-null
let title=document.getElementById('title');


//-typeOf : devuelve el tipo de dato
console.log(typeof('hola'));
*/

/*//td compuestos
arrays
objetos
maps
sets
funciones*/

//---------------------	OPERADORES	-------------
/*//operadores aritmeticos(+, -, *, /, %)
let x=6, y=5;
console.log(x%y);

//Incremento y Decremento(++, --) ambas incrementan y decrementan solo 1 unidad
let n=5;
n=n-1;
console.log(n);*/

/*//(+=, -=, *=, /=)
let num=10;
num/=5;
console.log(num);*/

/*//Operadores de comparacion: devuelven un boolean
let condicion = '5' === 5;
console.log(condicion);*/


//--------------------	PROPIEDADES Y METODOS ---
/*
//metodos para strings
let hola='hola mundo';

console.log(hola.indexOf('h'));
*/

/*
//metodos para numeross
let numero=1234.5876;

console.log(numero.toFixed());
*/

//---- propiedades de String
//let saludo="Bienvenidos a escuela digital";

//propiedades
/*let longitud=saludo.length;

console.log(longitud);
console.log(saludo);*/

/*//metodos de string sin parametros
console.log(saludo.trim());

//
console.log(saludo.trim().toUpperCase());
console.log(saludo.trim().toLowerCase());*/


/*// Metodos con parametros
//indexOf(string,[i])
console.log(saludo.indexOf('ESCUELA'));


//lastIndexOf:
console.log(saludo.lastIndexOf('i',22));*/


/*
//replace(oldString, newString); reemplaza una cadena por otra
let newsaludo=saludo.replace('escuela digital', 'Bextlán');
console.log(newsaludo);
*/


/*
//split('separador', N): recibe 2 parametros el 1ro es la cadena a tomar como separacion y el 2do es la cantidad de elementos
let arraySaludo=saludo.split(' ');
console.log(arraySaludo);

let arraySaludo2=saludo.split('i');
console.log(arraySaludo2);
*/


//substring(a,b), substr(a,b), slice(a,b)
/*let substring, substr, slice;*/
/*substring=saludo.substring(4,-1);//si el segundo valor es negativo ejm(-1) coge en reversa empieza a contar en reversa
console.log(substring);*/

/*substr=saludo.substr(4,3);
console.log(substr);*/
/*substr=saludo.substr(-4,3);
console.log(substr);*/
/*slice=saludo.slice(-10,-7)
console.log(slice);*/

/*
//Nuevos Metodos ES6
//.startsWith(), endsWith(), includes()
console.log(saludo.startsWith('B'));
console.log(saludo.endsWith('l'));
console.log(saludo.includes('escuela'));
*/


/*
//------------------ condicionales-----------

	if(true){
	   
	   console.log('se cumplio la condicion');
   			
   	}else{
	   console.log('No se cumplio la condicion');
	}
*/


//-------------------	switch	--------------
/*let edad=prompt('Ingrese su edad:');
switch(edad){
	case '10':
		console.log(`escribiste ${edad}`);
		break;
	case '20':
		console.log(`escribiste ${edad}`);
		break;
	default:
		console.log(`escribiste otro valor`);
		break;
}*/

/*let color=prompt(`Escoge un color (escribe su 
numero):
1. Rojo
2. Verde
3. Azul
4. Negro
5. Amarillo`);

switch(color){
	case '1':
		console.log('Rojo');
		break;
	case '2':
		console.log('Verde');
		break;
	case '3':
		console.log('Azul');
		break;
	case '4':
		console.log('Negro');
		break;
	case '5':
		console.log('Amarillo');
		break;
	default:
		console.log('otro');
		break;
}*/


//--------------------	OPERADOR TERNARIO -------
/*
//Es una  forma abreviada de escribir un if. Sintaxis:
//condicion ? valorTrue : ValorFalse
let nombre = prompt('escribe tu nombre');

nombre.length>5 ? console.log('Tu nombre es muy largo') : console.log('Tu nombre es corto');
*/


//---------------------	BUCLES	------------------
//for

/*for(let i=1; i<=10; i++){
	console.log(i);
}*/


//let teachers=['jon','alexis','daniel','alvaro','francisco','rafa','jose'];

/*for(let i=0; i<teachers.length; i++){
	console.log(`Profesor ${i+1}: `+teachers[i]);
}*/
/*
for(let i=0; i<teachers.length; i++){
	/*mostrar todos los profesores donde su nombre sea mayor de 5 letras
	if(teachers[i].length<5){
		console.log(teachers[i]);
	}*/
	/*//mostrar todos los profesores donde su nombre comiencen con la letra A
	if(teachers[i].toUpperCase().startsWith('A')){
		console.log(teachers[i]);
	}*/
	/*continue y break
	if(teachers[i].toUpperCase().indexOf('A')==0){
		continue;//si se cumple la condicion saltate esta condicion
		//break;
	}
	console.log(teachers[i]);
}
*/


/*//while
let i=100;
while(i--){
	console.log('Debo atender en las clases');
}*/


/*
//do while
let password='ED';
let pass;
do{
	pass=prompt('Escribe el password:');
}while(pass!=password);

*/

/*// for of (ES6)
for(let lista of teachers){
	console.log(lista);
}

let nombre='Yadira';
for(let value of nombre){
	console.log(value);
}*/


//---------------	Arrays ----------------
//let array1=[1,2,'hola',3,true,4,5];

/*let suma=0;
for(let i=0; i<array1.length; i++){
	let element = array1[i];
	//suma += element;
	//	if(typeof element == 'number'){//si el tipo de datos del elemento del array es un numero
	if(typeof element !=  'number')//si el tipo No es un numero
		continue;//saltate este elemento
		suma += array1[i];//suma c/u de los elementos del array
}
console.log(suma);*/

/*//creando una propiedad para todos los arrays
//a traves del prototipo de Array
Array.prototype.saludo='Hola';
console.log(array1.saludo);*/


//Agregar elementos con: 
//push(elem1, elem2); <- añade elementos al final del array
//unshift(elem1, elem2); <- añade elementos al inicio del array
/*
console.log(array1.length);

array1.push('final');
let newLength= array1.unshift('elem1','elem2');

console.log(array1);

console.log(newLength);
*/


//Eliminar un solo elemento(sin parametros)
//estos metodos devuelven el elemento eliminado
//.pop() elimina el ultimo elemento
//.shift() elimina el primer elemento
/*
let ultimoElem=array1.pop();
let primerElem=array1.shift();

console.log(array1);
console.log(`el ultimo elemento eliminado es: ${ultimoElem}`);

console.log(`el primer elemento eliminado es: ${primerElem}`);
*/


//.join('separador') <- convierte un array a un string
//'separador' es por defecto una coma ,
/*
console.log(array1.join());
console.log(array1.join(''));
console.log(array1.join(' '));
*/


//splice(a,b,items)
//añade o quita elementos
//array1.splice(2,1);//a partir del indice 2 elimina ese elemento pero solo 1 elemento
/*
array1.splice(2,0,'escuela','digital');//a partir del indice '2' elimina '0' elementos y añade dos items: 'escuela', 'digital'
console.log(array1);
*/
/*//creando una copia del array1
console.log(array1);
let copia=array1.slice();
console.log(copia);*/


//-----------------	FIND() Y FINDINDEX()
//find() <- devuelve el primer elemento q cumpla con la condicion especificada en la funcion
//(parametro1,parametro2) =>//valor retornado
/*
let array=[1,2,3,4,5];

let num = array.find( elem => elem > 3 );//num contendra el primer elemento q sea mayor a 3 del array

let numIndex= array.findIndex( elem => elem > 3 );

console.log(num);

console.log(numIndex);
*/


//--------------	Iteradores	-----------------
//Son objetos q contienen un metodo next()
//Ese metodo devuelve un objeto con dos propiedades
//Las prop.. son value <- es el valor q devuelve y done <- es un boolean cuando acaba de recorrer la iteracion devuelve false
//tenemos tres metodos q permiten recuperar un iterador
//.keys() <- accede al indice del valor actual 
//. value() 
//.entries()
/*
let array=[1,2,3,4];
//let iterador=array.keys();
let iterador=array.entries();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/ 


/*//--------------	Objetos 
//los objetos son parejas de propiedad valor
let yo = {
	nombre : 'alvaro',
	edad : 37,
	pais : 'Perú',
	esPadre : true,
	hijos : ['sofia','alejandro']
}

yo.ciudad='Lima';

//acceder a una propiedad:
console.log(`Me llamo ${yo.nombre} tengo ${yo.edad} años, Naci en ${yo.pais}, soy padre: ${yo.esPadre} y mis hijos son: ${yo.hijos}`);

console.log(yo.hijos[1]);

console.log(yo);*/


//---------------	DELETE, IN Y HASOWNPROPERTY	------------
/*const ED = {
	nombre: 'Escuela Digital',
	sedes: ['Bogotá','Lima'],
	profesores: ['Alexis','Daniel','Rafa','Jon','Francisco','José','Álvaro'],
	fundacion: 2010,
	mejorPlataforma: true,
	eslogan: 'Aprende desde cero',
	usp: 'Somos el primer sitio en español de Educacion Orientada a Proyectos',
	saludar(){
		return 'Bienvenidos a Escuela Digital. Te deseamos una Felíz Navidad.'
	}
};

//Añadiendo mas propiedades a mi objeto ED
ED.comunidad=true;*/

//Operadores:
//delete <- elimina una propiedad del objeto
//delete ED.fundacion;//borrando la propiedad fundacion

//in <- devuelve true si la propiedad existe en el objeto o existe en la cadena de prototipos 
//una cadena de prototipos es q un objeto podria estar heredando propiedades de otro y este a traves de otro y asi sucesivamente 

//console.log('profesores' in ED);//existe la propiedad 'profesores' en el objeto ED?

//declarando esta propiedad en el prototipo y todos los objetos heredaran de este prototipo
//las propiedades se van heredando de uno a otro 
/*
Object.prototype.numeroMagico=27;
console.log('numeroMagico' in ED);

console.log(ED.numeroMagico);
*/


//¿Como saber si esta propiedad existe dentro de mi objeto o dentro de la cadena de prototipos?
//para esto existe el metodo :
//hasOwnProperty() <- pregunta si la propiedad es propia del objeto 'x' definido
/*Object.prototype.numeroMagico=27;
console.log(ED.hasOwnProperty('numeroMagico'));
console.log(ED.hasOwnProperty('comunidad'));*/


//----------------	Copiar Objeto en ES6 --
/*let ED2 = Object.assign({},ED);
console.log(ED2);*/

/*//Adignar variables existentes a Propiedades
let a='Hola',b='Mundo';
let myObj = {
	a,
	b
}
console.log(myObj);


//-----------	Expresiones en Propiedades
let myObj2={
	[a+b]: 'Hola a todos'
}
console.log(myObj2);*/



//-------------	recorrer arrays sin bucles
//.map() <- permite mapear. hacer un cambio  a cada elemento del array original
//.filter() <- filtrar algunos elementos del array original y vamos a devolver en un nuevo array
//.reduce() <- coge todos los elementos  del array hace operaciones y devuelve un unico valor

/*let estudiantes = [
	{
		nombre: 'Carlos',
		calificacion: 20
	},
	{
		nombre: 'Juan',
		calificacion: 18
	},
	{
		nombre: 'Maria',
		calificacion: 9
	},
	{
		nombre: 'Pepe',
		calificacion: 7
	},
	{
		nombre: 'Arturo',
		calificacion: 17
	},
];*/

/*
//map(callback) 
//transforma cada elemento del array segun el callback(funcion) y devuelve  un array

//obtener los nombres d los estudiantes con la forma tradicional
let estNombres = [];
for (let i=0; i<estudiantes.length; i++){
	estNombres.push(estudiantes[i].nombre);
}
console.log(estNombres);
*/


/*
//con map(parametro=>valor); <- tiene un bucle internamente y recorre cada elemento y le asigna al parametro
let estudiantesNombres = estudiantes.map( estudiante => estudiante.nombre);

console.log(estudiantesNombres);
*/


/*
//------------FILTER(parametro=>valor condicion)	-----------
//obtener los estudiantes q han aprobado el curso
let estuAprobados = estudiantes.filter( estudiante => estudiante.calificacion > 10);

console.log(estuAprobados);

//nombre de los estudiantes aprobados
let estuAprobadosNombres = estuAprobados.map(estudiante => estudiante.nombre);
console.log(estuAprobadosNombres);
*/


//--------------------------	REDUCE()	-----
//reduce(cb(prev, current[,indice, array])[, valorInitial])
//reduce(callback(valorPrevio, valorActual, indiceArray),valorInicial)
/*
prev <- resultado devuelto por la ejecucion anterior de la funcion
current <- valor actual del array en el q me encuentro
indice <- indice en el q estoy ahora
array <- el array total
valorInitial <- cual es el valor por el cual voy a partir. Si no le paso nada el valor initial es el primer indice del array
*/
//esta funcion ejecuta ciclos interiormente
//suma todos los elementos del array
/*let numeros = [2,4,6,8,10];
let suma =numeros.reduce( (a,b) => a + b );*/
//console.log(suma);


////[2,4,6,8,10]
//2=valor inicial y previo
//  (a,b) => a+b 
//   2,4  => 2+4 = 6 
//   6,6  => 6+6 = 12
//  12,8  => 12+8 = 20
//  20,10 => 20+10 = 30


//cuando la estructura es un poco mas compleja y no retornas un valor defrente es decir si necesitamos hacer varios pasos utilizamos las {}
//promedio del array con reduce
/*let promedio = numeros.reduce( (a,b,i,arr) => {
	b += a;//b contiene la suma de todos los elementos de mi array
	return i == arr.length -1 ? b / arr.length : b; 
	//si el indice en donde me encuentro es 4 ? retorna b/5 : si no retorna solo b
});
console.log(promedio);*/


/*//como se hacia sin operador ternario
let promSinTernario = numeros.reduce( (a,b,i,arr) => {
	b += a;//b contiene la suma de todos los elementos de mi array
	if(arr.length-1){
		return b/arr.length;
	}else{
		return b;
	}
});*/



//obtener el valor mas alto del array
//let masAlto = numeros.reduce( (a,b) => a > b ? a : b )

/*let calificacion=estudiantes.map(estudiante => estudiante.calificacion);


//obtener el estudiante con mayor calificacion
let mayorCalif = calificacion.reduce( (a,b) => a>b ? a : b );
console.log(mayorCalif);


let mayorCalif2 = estudiantes.reduce( (a,b) => a.calificacion > b.calificacion ? a : b );
console.log(mayorCalif2);*/

//	if(a > b){
//		return a;
//	}
//	else{
//		return b;
//	}
//	// lo de arriba es igual a esto: (a > b ? a : b)


//console.log(masAlto);


/*//recorrer todos los elementos de un array con reduce 
let arrayInt=[12,230,'maria',1,2,3,4,'juan',5,6,7,8,9,75];

//let reco=arrayInt.reduce((a,b) => console.log(b),0); 

//pero mostrar solos los enteros
let num=arrayInt.reduce((a,b) => typeof b =='number' ? console.log(b) : null , 0 );*/



//mostrar nombres de un objeto con reduce
//let nombres = estudiantes.reduce( (anterior,actual) => console.log(actual.nombre),0);


/*//con for of
for(let est of estudiantes){
	 est=est.nombre;
console.log(est);
}*/



//---------------------	FUNCIONES	-----------------
/*
las funciones son bloques de codigo reutilizables
sintaxis:
function nombreFunction(parametro1, parametro1){
	//codigo
}
Score global: cuando una funcion se encuentra fuera de un obj
*/
/*function sumar(a,b){
	return {
		a: a+1,
		b: b+1
	}
}

let miSuma=sumar(1,5);
console.log(miSuma);

//Score del objeto: cuando una funcion se encuentra dentro de un obj
//cuando una funcion esta dentro de un objeto se llama metodo
let obj={
	nombre: 'objeto1',
	sumar(a,b){
		return a+b;
	}
}

//llamando a una funcion q se encuentra dentro d eun objeto
let miOtraSuma = obj.sumar(12,4);
console.log(miOtraSuma);*/



//-------------	FUNCION DENTRO DE OTRA FUNCION --	
/*function restar(a){
	return function(b){
		return a-b;
	}
}

let miResta=restar(5)(3);
console.log(miResta);*/



//------------	FUNCIONES AUTOINVOCADAS	-------
//funciones q se llaman a si mismas
/*let miMultiplicacion = (function (a,b){
	return a * b; 
})(5,6);//autoinvocando a esta funcion

//} <- esta llave finaliza una sentencia pero si le coloco los ) parentesis le estoy diciendo q lo q este dentro es una expresion entonces q siga ejecutando lo q sigue osea: (5,6)<- los parametros de la funcion;

//let miMulti=multiplicar(2,3);
console.log(miMultiplicacion);*/


//-------------	FUNCION CONSTRUCTORA -------
/*
ES6 trae el concepto de clases
Antes de ES6 todo se hacia con constructores como:
*/
//creando funcion contructor
/*let Pais = function(nombre,moneda){
	this.nombre =nombre;
	this.moneda=moneda;
}

//creando 
let peru = new Pais('Perú','Sol');

console.log(peru);*/


//-------------	FUNCIONES APPLY Y CALL	--------
//APPLY() Y CALL() son dos maneras de llamar a una funcion indirectamente
/*
function sum(a, b, c){
	return a + b + c;
}

let miArray=[1,2,4];

let mySum = sum.apply(undefined,miArray);

console.log(mySum);

//call() <- no admite un array sino los elementos separado por , 
let mySum2 = sum.call(undefined,1,2,4);

console.log(mySum2);*/



//-----------------	TIPOS DE FUNCIONES	----------
//Funciones por definicion: Son cuando uno la declara Asi:
/*function funcionPorDefinicion(){
	//cuerpo de la funcion
	return 'Hola desde la funcion por Definicion';
}
//ejecutar
funcionPorDefinicion();

//Funciones por expresion es cuando lo metes dentro de una variable
let funcionPorExpresion = function(){
	//cuerpo de la funcion
	return 'Hola desde la funcion por expresion';
}
//ejecutar
funcionPorExpresion();

let c =console.log;//guardo la funcion console.log en c pero aun no lo ejecuto
c('hola mundo');//recien lo ejecto y paso el argumento

let x= funcionPorDefinicion();
c(x);*/



//--------------	FUNCIONES NOMBRADAS Y FUNCIONES ANONIMAS-----	
//funcion nombrada: es aquella funcion q tiene un nombre 
//funcion anonima: es aquella funcion q no tiene nombre
/*
callback: es una funcion q es ejecutada por otra luego de un proceso
*/
/*
document.addEventListener('click', function(){
	document.write('Hola a todos');
});*/



//--------------	FUNCION ARROW functions	---------
/*
funciones de flechas(arrow functions) ES6. Son funciones anonimas. Callback es una funcion anonima.
sintaxis:
(par1, par2, par3) => valorDeRetorno
*/
//suma contiene una funcion dentro con dos parametros
/*let suma = (a,b) => a + b;
//esto es lo mismo q lo d arriba
let suma2 = function (a,b) {
	return a+b;
}
console.log(suma(12,2));*/


//let sumaConArrow = function (a,b){
//	if(a>b){
//		return a + b;
//	}
//	return b;
//}
//console.log(sumaConArrow(4,3))
/*
let cuadrado2 = (a) => {
	if(typeof a == 'number'){
		return a*a;
	}
}

//refactorizando
let cuadrado1 = (a) => (typeof a == 'number') ? a*a : undefined;

console.log(cuadrado1(9));*/


//----------------	PARAMETROS Y ARGUMENTOS	----------

//function sumExample (a,b) {
//	console.log(arguments);
//};
//
//sumExample(2,3,5,6);

/*
Si hay mas parametros que argumentos en una funcion, los argumentos faltantes son undefined
Si hay mas argumentos que parametros, no devuelve error por q los demas parametros son ignorados
*/
/*function suma1 (a,b,c,d) {
	return a+b+c+d;
}

console.log(suma1(2,3,5));*/


//con mas argumentos que parametros
/*function suma2 (a,b,c) {
	return a+b+c;
}

console.log(suma2(2,3,5,6,7));*/




//----------------------	EXPRES OPERATION ... ----
//que sume todos los argumentos sin importar cuando parametros tenga declarado mi funcion
/*
function sumarTodos(){
	//console.log(...arguments);//...arguments<-lo convierte en una cadena
	//console.log([...arguments]);//convierte a un array por los[]
	return [...arguments].reduce( (a,b) => a + b);
}
console.log(sumarTodos(1,2,3,4,5));
*/

//otro ejm:
//function restar(a,b) {
//	if(a>b){
//		return a-b;
//	}
//	return b-a;
//}

/*let restar = (a,b) => a > b ? a - b : b - a; 

let numeros = [9,12,3,4,5,6];

console.log(...numeros);
console.log( restar(...numeros) );*/



//------------------	PARAMETROS POR DEFECTO Y REST	-----------
/*
Los parametros en ES6 ya tienen valores por defecto osea ya le puedo asigna run valor por defecto a un parametro
*/
//function sumar(a,b=8){
//	return a+b;
//}
//
//console.log(sumar(1));


/*//parametros rest
//...elementos <- es un param rest es decir cuando llame a la funcion voy a poder meterle cuantos parametros quiera. Lo mejor es q elementos es un array
function sumarTodos2(e1, e2, ...elementos){
	return elementos.reduce( (a,b) => a+b);
}
console.log(sumarTodos2(1,5,4,3,2,10));//1 y 5 son ignorados ya q no he hecho la suma de los dos parametros e1=1 y e 2=5 solo hice la suma de ...elementos=4,3,2,10*/


//-----------------	SCOPE 	--------------
/*
Es el ambito o contexto donde se ejecuta una funcion y existen sus variables
En ES5 el unico score local q se podia crear era a traves d funciones
*/
//var hola es una variable global ya q fue declarada desde el contexto global es decir que podemos acceder a ella desde fuera de cualquier parte
//var hola;
/*

function holaMundo(){
	let hola;//esta es una variable local 
	hola='Hola Alvaro';
}

holaMundo();
console.log(hola);

function holaDeNuevo(){
	hola='Hola otra vez';
}

holaDeNuevo();
console.log(hola);
*/


/*function sumar(a){
	//return a+b;//b en esta linea es local y a es global
	return function(b){
		return a+b;
	}
}

let miSuma=sumar(5)(7);
*/



//-------------------	CLOSURES ---------

/*function saludar(){
	let saludo = 'Hola';
	
	return function saludarInterno(amigo){
		console.log(`${saludo} ${amigo}`);
	}
}

//ejecutando la funcion interna
saludar()('Daniel');

let miSaludo=saludar();
//miSaludo contiene toda la funcion function saludarInterno(amigo){
//		console.log(`${saludo} ${amigo}`);
//	} 
//pero para ejecutar la funcion interna necesita ejecutar esta variable miSaludo(ParametroSaludarInterno)
miSaludo('Alexis');
miSaludo('Jon');*/


//otro ejem:
/*function afuera(){
	let num = 1;
	
	return function adentro(){
		num++;
		console.log(num);
	}
}

afuera()();

//magia con closure
let ejecuta=afuera();
ejecuta();
ejecuta();
ejecuta();

afuera()();*/



//--------------------	THIS	----------

//cuando uso this dentro de un metodo de un objeto this es el objeto pero si uso this dentro d una function en el contexto global this es udefined.
//El contexto es en donde se esta ejecutando esa funcion
/*let myObj = {
	name : 'yadira',
	saludando(){
		console.log(`Hola ${this.name}`);
	}
}

myObj.saludando();*/


//use strict es una instruccion de ES5 q nos obliga  aseguir ciertas buenas practicas. Es bueno usar use strict siempre
/*'use strict';
//checkeando el this
function checkThis(){
	console.log(this);
}

checkThis();*/



//--------------------	LEXICAL THIS	---
//Antes en ES5 se hacia asi ya q el this de setInterval esta haciendo referencia a la funcion setInterval y no a Boy
/*
function Boy(edad){
	this.edad=0;
	let _nuevothis=this;
	setInterval(function(){
		//incrementar la edad	
		_nuevothis.edad++;
	},1000);//1000=1s en cada 1s ejecutara esta funcion
}
*/
/*
//Ahora con row function 
function Boy(edad){
	this.edad=0;
	setInterval(() => {this.edad++},1000);//1000=1s en cada 1s ejecutara esta funcion
}


let juanito= new Boy(1);
*/



//-----------------------	OBJETOS Y CLASES EN ES6	--------
/*
Clase <- plantilla a partir de la cual se crean objetos
Instancia <- cada objeto creado a partir de una clase.
Constructor <- funcion que se ejecuta automaticamnete al instanciar una clase
Propiedades <- son los atributos de la clase
Metodos <- funciones de la clase
*/

//En ES5 se usaba funciones en ves de clases
/*var Profesor = function(nombre, apellido, pais){
	this.nombre=nombre;
	this.apellido=apellido;
	this.pais=pais;
}

var jon = new Profesor('Jon','Mircha','Mexico');
var alexis = new Profesor('Alexis','Lozada','Colombia');

console.log(jon);
console.log(alexis);*/

/*
const obj1 = {
	nombre : 'Jon',
	apellido : 'Mircha',
	cursos : ['Node.js','React.js'],
	pais : 'Mexico'
}

const obj2 = {
	nombre : 'Alexis',
	apellido : 'Lozada',
	cursos : ['SQL','Java','Go'],
	pais : 'Colombia'
}
*/



/*
//-------------------	CLASES EN ES6	-----
class Persona{
	
	//el constructor debe de llevar el nombre de "constructor" no puede llevar otro nombre
	constructor(nombre,apellido,pais){
		this.nombre=nombre;
		this.apellido=apellido;
		this.pais=pais;
		this.nombreCompleto=`${nombre} ${apellido}`;
	}
	
	
	
	//metodos
	saludar(){
		return `Hola, soy ${this.nombreCompleto} y vivo en ${this.pais}`;
	}
	
	//------------	METODOS ESTATICOS	----------
	//es un metodo que no requiere una instancia. 
	static describirPersona(persona){
		return `Esta persona se llama ${persona.nombreCompleto} y es de ${persona.pais}`;
	}

	
}
	

//----------------------------	HERENCIA	-------

class Profesor extends Persona{
	
	//estas propiedades: nombre,apellido,pais las hereda de Persona
	constructor(nombre,apellido,pais,curso){
		super(nombre,apellido,pais);//trae las propiedades de la clase padre
		this.curso = curso;
	}
	
	
	
	invitarAlCurso(){
		return `Hola soy ${this.nombreCompleto} y te invito al curso ${this.curso}. !Nos vemos en clase!`;
	}
	
}





//--------	creando instancias de clase
const alexys = new Persona('Alexis','Lozada','Colombia');
console.log(alexys);
console.log(alexys.saludar());


const juan = new Persona('Juan','Espinoza','Peru');
console.log(juan);
console.log(juan.saludar());


const daniel = new Profesor('Daniel','Romero','Colombia','PHP desde cero');
console.log(daniel);
console.log(daniel.saludar());
console.log(daniel.invitarAlCurso());

console.log(Persona.describirPersona(alexys));


//creando propiedad estatica
//nombreClase.prototype.nombrePropiedad='
Persona.prototype.propiedadEstatica='valor de la propiedad estatica';

console.log(daniel.propiedadEstatica);
*/










