function begruessung() {
    var person : string = prompt("Wie ist dein Name?");
    if (person != null) {
document.getElementById("content").innerHTML =
"Hallo " + person + "! Wie geht es dir?"
console.log("Hallo " + person + "! Wie geht es dir?");
    }
}