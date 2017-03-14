var nombres = [];//arreglo vacío para almacenar nombres y apellidos
function Queue(){//función constructora para crear la pila de nombres y la pila de apellidos
 var almacen = [];

 this.push = function (element){
   almacen.push(element);
 };
 this.shift = function(){
   return almacen.pop();
 };
 this.dequeue = function(){
   return almacen [almacen.length-1];
 };
 this.isEmpty = function(){
   return almacen.length == 0;
 };
 this.size = function(){
   return almacen.length;
 };
 this.clear = function(){
   almacen = [];
 };
 this.print = function(){
   console.log(almacen.toString());
 };
}
var nombre = new Queue();
nombre.push(" Adriana ");
nombre.push(" Mariana ");
nombre.push(" Gabriela ");
nombre.push(" Pitt ");
nombre.push(" Josh ");

nombre.print();

var apellido = new Queue();
apellido.push(" Hernández");
apellido.push(" Muñoz");
apellido.push(" Flores");
apellido.push(" Gutiérrez");
apellido.push(" Séptimo");

apellido.print();

for (var i = 0; i < 5; i++){//se pone cinco porque es menor al nunmero de elementos que tiene el arreglo nombre y apellido,porque son iguales
 nombres.push(nombre.shift() +  apellido.shift());
}

document.write(nombres);
console.log(nombres);
