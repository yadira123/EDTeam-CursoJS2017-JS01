/*
Date es un objeto para manejar fechas y horas en js 
Date es un objeto q necesita ser instanciado para usarse
*/

/*let date = new Date();
console.log(date);


let date2 = new Date();
date2.setFullYear(1997);//estableciendo un nuevo año
date2.setMinutes(58);//los minutos
date2.setHours(20);//la hora
date2.setSeconds(15);
date2.setDate(21);//la fecha del mes
date2.setMonth(0);//Month es un array q va del 0(Enero) al 11(diciembre)
console.log(date2);*/


//-------------	Metodos GET	-----------
/*
.getFullYear() <- devueve el año 
.getMonth() <- devuelve el mes. 0=enero 
.getHours() <- devuelve la hora
.getSeconds() <- // segundos 
.getMilliseconds() <- la pc usan milisegundos
.getDate() <- es el dia del mes
.getDay() <- dia de la semana donde 0 es(domingo)
.getTime() <- milisegundos desde el 1 de enero de 1970. Se usa esta fecha para calcular ek tiempo
*/

/*let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());//cant de milisegundos q han transcurrido desde el 1 de enero de 1970*/



// ----------------------Ejercicios:
/*
//1. imprimir la fecha y hora en nuestro formato personalizado

let date = new Date();

//crear funcion para obtener el nombre del dia
//le voy a pasar como param un dia. y retornare el elemento del array conforme al numero(indice) pasado por el parametro 
let getSringDay = date => {
	let days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
	return days[date.getDay()];
}


//obtener el mes en cadena
let getSringMonth = date => {
	let months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
	return months[date.getMonth()];
}

//funcion para añadir un cero a la derecha de la hora y minutos en caso sea necesario
let hourLeadingZero = num => ('0' + num).slice(-2);//-2 obtiene los 2 ultimos valores del numero y retorna esto ejm: 09 o 12



//obtener si es am o pm la hora
let getAmPmHour = date => {
	let hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds(),
		amPm = hours >= 12 ? 'pm' : 'am';
		if (amPm === 'pm') hours -= 12; 
	return `${hourLeadingZero(hours)}:${hourLeadingZero(minutes)}:${hourLeadingZero(seconds)} ${amPm}`;
}


let dateFormated = `${getSringDay(date)} ${date.getDate()} de ${getSringMonth(date)} de ${date.getFullYear()} , ${getAmPmHour(date)}`;

console.log(dateFormated);*/



//2. Definir fechas
/*//hay dos formas d definir una fecha:

//primera forma:
//new Date(año, mes, dia, horas, minutos, segundos, millisegundos)
console.log(new Date(1996,0,21,10,45,32));

//segunda forma: con set
//tercera forma: usando un string: new Date(string)
//usando formato gringo ejm: new Date('mes/dia/año')
console.log(new Date('1/29/1980'));

//usando formato definido por date ejm: 
console.log(new Date('Mon Jan 01 1997 10:45:32 GMT-0500'));*/


/*
----------OPERACIONES CON FECHAS 
Se operan con milisegundos(ms)
1s = 1000ms
1m = 1000ms * 60
1h = 1000ms * 60 * 60
1d = 1000ms * 60 * 60 * 24
1y = 1000ms * 60 * 60 * 24 * 365
*/



let msToDayObj = ms => {
	let seconds = Math.floor(ms / 1000),
		minutes = Math.floor(ms / (1000 * 60)),
		hours = Math.floor(ms / (1000 * 60 * 60 )),
		days = Math.floor(ms / (1000 * 60 * 60 * 24)),
		years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
	return {years,days,hours,minutes,seconds}//retorno un objeto
}


//obtener tiempo exacto que he vivido
let msToExpandDateObj = ms => {
	let years = msToDayObj(ms).years,
		days = msToDayObj(ms).days % 365,
		hours = msToDayObj(ms).hours % 24,
		minutes = msToDayObj(ms).minutes % 60,
		seconds = msToDayObj(ms).seconds % 60;
	return {years,days,hours,minutes,seconds}
}


//sacar la diferencia entre la fecha actual y una fecha de nacimiento
let date = new Date(),
	date2 = new Date('Jan 09 2010 10:45:32 GMT-0500');

console.log(msToExpandDateObj(date-date2));//devuelve en millisegundos





/*
 HORARIOS Y FECHAS INTERNACIONALES
Peru es GMT-05 es decir es 5 horas por debajo del horario internacional
para saber mi zona horaria de mi pais
console.log(new Date());

UTC es el horario internacional
.getUTC...
.getTimeZoneOffset() <- devuelve la diferencia en minutos de la hora 0 del meridiano de grendwich a mi zona horaria
*/

/*let date = new Date();

console.log(date.getHours());//obtener la hora en mi pais
console.log(date.getUTCHours());//obtener la hora internacional
console.log(date.getTimezoneOffset());//300 minutos*/


//obtener la zona horaria de X pais de acuerdo a una hora establecida 
/*let date = new Date('Jan 02 2018 17:00:00 GMT-0500');
let hours = date.getHours(),
	utcHours = date.getUTCHours(),
	diffHours = new Date().getTimezoneOffset()/60;

document.body.textContent = `${utcHours - diffHours}`;*/













