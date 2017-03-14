var muestra= document.getElementById('muestra');

var arrPacient = [];
function Persona (nombre, apellido, edad,genero,ciudad,pais){
        this.nombre = nombre;
        this.apellido=apellido;
        this.edad= edad;
        this.genero= genero;
        this.ciudad = ciudad;
        this.pais = pais;
        this.respuesta = function(){
       return ("<br>"+"Nombre: "+ nombre+" "+ apellido+ "<br>" + "Edad: "+ edad +"<br>" + "País: " + pais  +"<br>");
     }};
window.addEventListener('load',function(){ // para cargar la pagina
  var botoncito = document.getElementById("send");

  botoncito.addEventListener('click',function(){ // para cuando hace click -"onclick"
    var name = document.getElementById('name').value;
   var lastName = document.getElementById('lastname').value;
   var age = document.getElementById("age").value;
   var gender = document.getElementById('gender').value;
   var city = document.getElementById('city').value;
   var country = document.getElementById('country').value;

   var datos = new Persona (name, lastName, age, gender, city, country)
   arrPacient.push(datos);
   muestra.innerHTML += datos.respuesta();

  })
})
