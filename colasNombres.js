var nombreCompleto = [5];
var nombre = ["Andy", "Nelly", "Inti", "Josh", "Ro"]
var apellido = ["Monares", "Gomez", "Trejo", "Santos", "Ruiz"]

for (var i=0; i<nombreCompleto; i++){
  var nombreTemporal = nombre.shift() + " " + apellido.shift();
  console.log(nombreTemporal);
}
