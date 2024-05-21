// FORMAS DE IMPRIMIR EN PANTALLA
// alert("HOLA SOY UN ALERT DESDE EL ARCHIVO EXTERNO DE JS");
// console.log("HOLA SOY UN MENSAJE DE CONSOLA");
//document.write("HOLA SOY LA INTERFAZ PRINCIPAL");
// Swal.fire("Hola soy una alerta de una librería");
// Swal.fire(
//     {
//         title: "The Internet?",
//         text: "That thing is still around?",
//         icon: "success",
//         showConfirmButton: false,
//         timer: 1500
//     }
//   );

// VARIABLES Y TIPO DE DATOS
const pi = 3.14; // decimal
var name = "Wilder Duarte"; // string
let edad = 32; // entero
let edad_string = "32"; // string
var bool = true; // false booleanos

//OPERADORES BÁSICOS + - / * %
var suma = 5-2;
console.log(suma);
console.log(edad_string + suma);
var one = 10;
var two = 20;
console.log(one+two);
console.log(one-two);
console.log(one*two);
console.log(one/two);
console.log(one%two);

//OPERADORES DE COMPARACIÓN
// < > >= <= <> 
//= Asignación
//== Comparación 5=="5"
//=== Comparación 5=="5"
//==== es una mentira del profesor
//OPERADORES LÓGICOS
// AND && OR ||

console.log("Mi nombre "+name+" tiene como edad: "+edad);

function load_page(){
    Swal.fire({
        imageUrl: "../img/WilderDuarte.png",
        imageAlt: "A tall image",
        showConfirmButton: false
    });
    document.getElementById("valores").value = array_ejm; 
    document.getElementById("fecha").value = new Date();
    let fecha = new Date();
    document.getElementById("dia").innerText = fecha.getDay();
}

function send_info(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
            title: "Campos Vacíos",
            text: "Alguno de los campos se encuentra vacío",
            icon: "error"
        });
        if(name.length==0){
            document.getElementById("name").style.border = "2px solid red"
        }
        if(last_name.length==0){
            document.getElementById("last_name").style.background = "red"
        }
    }else{
        document.getElementById("print").innerHTML = "<strong>"+name+" "+last_name+"</strong>";
    }
}

//ARRAYS
var dias_sem = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
var array_num= [1,2,3,4,5,6,7,8,9];
var array_mix= [1,2.5,"abc"];
var array_mul= [
    {name:"Wilder",age:32,color:"green"},
    {name:"Anyi",age:33,color:"white"},
    {name:"Celeste",age:3,color:"black"},
    {name:"Antonella",age:2,color:"gray"}
]

var json_ejm = {
    name:"Wilder",
    lastname:"Duarte",
    phone:"3168667751",
    email:"waduarten@ufpso.edu.co"
}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);

for(let i=0;i<dias_sem.length;i++){
    console.log(dias_sem[i]);
}

var j=0;
while(j<array_num.length){
    console.log(array_num[j]);
    j++
}

var acum = 0;
for(let h=0;h<array_num.length;h++){
    acum += array_num[h]
    // acum = acum + array_num[h]
}
console.log(acum);

var suma_age = 0;
for(let a=0;a<array_mul.length;a++){
    suma_age += array_mul[a].age;
}
console.log(suma_age);
document.getElementById("print_age").innerText = "El valor de la suma es: "+suma_age;
document.getElementById("print_age_eti").innerHTML = "<strong>El valor de la suma es: "+suma_age+"</strong>";

function limpiar() {
    document.getElementById("valores").value = "";
    document.getElementById("print_age").innerText = "";
    document.getElementById("print_age_eti").innerHTML = "";
}

var array_ejm = [1,2,3,4,5,6,7,8,9];

function agregar(){
    array_ejm.push(10);
    document.getElementById("valores").value = array_ejm; 
}
function eliminar(){
    array_ejm.pop();
    document.getElementById("valores").value = array_ejm; 
}
function imp_rever(){
    document.getElementById("text_rever").innerText = array_ejm.reverse();
    document.getElementById("valores").disabled = false;
}


// Función para enviar el nombre concatenado
function send_name(){
    let name_one   = document.getElementById("name_one").value;
    let name_two   = document.getElementById("name_two").value;
    let search_var = document.getElementById("search_var").value;
    let name_com = name_one.toUpperCase()+" "+name_two.toUpperCase();
    // let variable = name_com.indexOf("I");
    // let variable = name_com.lastIndexOf("I");
    // let variable = name_com.charAt(3);
    let variable = name_com.charAt(search_var);
    
    if(search_var <= name_com.length && search_var.length != 0){
        // console.log(variable);
        // Swal.fire(variable);
        document.getElementById("print_name").innerText = "La letra correspondiente al #"+search_var+" es: "+variable;
    }
    // else if(isNaN(search_var) != false){
    else if(isNaN(search_var)){
        Swal.fire({
            icon: "error",
            title: "El valor no es un número"
        });
        document.getElementById("print_name").innerText = ""; 
    }
    else{
        Swal.fire({
            icon: "error",
            title: "No tiene valor o el valor supera la cantidad de letras del texto"
        });
        document.getElementById("print_name").innerText = "";
    }
}