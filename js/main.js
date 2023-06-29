const firstName = prompt("Inserisci il nome");
const lastName = prompt("Inserisci il cognome");
const colorFavo = prompt("Colore preferito");
const number=21; 
const age = prompt("Età");


document.getElementById("welcome-title").innerHTML = `Ciao ${firstName}`
document.getElementById("firstName").innerHTML = firstName;
document.getElementById("lastName").innerHTML = lastName;
document.getElementById("colorFavo").innerHTML = colorFavo;
document.getElementById("number").innerHTML = number;
