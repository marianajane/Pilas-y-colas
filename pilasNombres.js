var nombreCompleto = [5];
var nombre = ["Andy", "Nelly", "Inti", "Josh", "Ro"]
var apellido = ["Monares", "Gomez", "Trejo", "Septimo", "Ruiz"]

for (var i=0; i<nombreCompleto; i++){
  var nombreTemporal = nombre.pop() + " " + apellido.pop();
  console.log(nombreTemporal);
}
