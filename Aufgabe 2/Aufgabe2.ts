// Aufgabe: Aufgabe 2
//Name: Sebastian Schmidt
//Matrikel: 259526
//Datum:19.10.2018
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
//In Zusamenarbeit mit Nico Herrmann, Jan Dangschat, Marius Kugler, Sarah Lönnqvist, Anastasia Geibel
namespace uno { //Interface für Karten
    interface Karten{
        name: string;
        red: number;
        blue: number;
        green: number;
        yellow: number;
        
        }
    //var wurden nachträglich zu let geändert
    let karte0:Karten = {
        name: "0",
        red: 1,
        blue: 1,
        green: 1,
        yellow: 1,
       }
      let karte1:Karten = {
        name: "1",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
        
        }
       let karte2:Karten = {
        name: "2",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
       }
     let karte3:Karten = {
        name: "3",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
       }
    let karte4:Karten = {
        name: "4",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
      }
     let karte5:Karten = {
        name: "5",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
      }
     let karte6:Karten = {
        name: "6",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
      }
     let karte7:Karten = {
        name: "7",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
      }
     let karte8:Karten = {
        name: "8",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
      }
     let karte9:Karten = {
        name: "9",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
      }
     let karte10:Karten = {
        name: "Aussetzen",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
      }
      let karte11:Karten = {
        name: "Umkehren",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
      }
        let karte12:Karten = {
        name: "+2",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2,
      }
  

    let AlleKarten = [karte0,karte1,karte2,karte3,karte4,karte5,karte6,karte7,karte8,karte9,karte10,karte11,karte12]

    let schwarz1: number = 4; // Anzahl der schwarzen +4 Karten
    let schwarz2: number = 4; // Anzahl der Karten die den Farbwechsel beinhalten

    let c: string = ""; //Farbcode als hexadezimalzahl


  
    function random(_math: number): number { //Random wert von 0 bis _math
        return Math.floor(Math.random() * Math.floor(_math));
    }
    function placeDiv(_color: string, _x: string, _n: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _n); //div bekommt eine ID
        document.getElementById("a" + _n).innerHTML += _x; //Funktion placeDiv wird ein div im HTMl erstellen
        //console.log(_color, _n, _x);
        let s: CSSStyleDeclaration = div.style; //CSS Werte werden definiert, somit wird ein externes Stylesheet obsolete
        s.border = "thin solid white";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 100 + "px";
        s.height = 170 + "px";
        s.left = (_n + 1) * 100 + "px";
        s.right = (_n + 1) * 100 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 5 + "px";
        s.color = "white";
    }
function main(): void {
let z: number;
let i: string = prompt("Bitte die Anzahl der Karten eingeben:"); //Eingabefenster öffnet sich
z = Number(i); //eingegebner string wird zu einer number gewechselt

    for (let k: number = 0; k < z; k++) { 
            let l: number = random(15); 
            if (l == 13 && schwarz1 > 0) { //Bei zufälliger Zahl 13 wird s1, also eine +4 Karte gewählt 
                c = "#000000"; //Hexadezimalsting für die Farbe schwarz (variable c wurde weiter ober deklariert)
                schwarz1--; //Die Anzahl der restlichen +4 Karten wird 1 erniedrigt 
                placeDiv(c, "+4", k);
                continue;
            }
            else if (l == 13 && schwarz1 <= 0) { //Sollte s1 0 sein wird die Schleife von vorne begonnen
                k--;
                continue;
            }
            else {
                if (l == 14 && schwarz2 > 0) { 
                    c = "#000000";
                    schwarz2--;
                    placeDiv(c, "Farbwechsel", k);
                    continue;
                }
                else if (l == 14 && schwarz2 <= 0) { 
                    k--;
                    continue;
                }
                else { 
                    let r: number = random(4); //Zugriff auf die Funktion Math.random welche weiter oben deklariert wurde
                    switch (r) {
                        case 0: //Bei Case 0 rote Farbe
                            c = "#ff0000"; //rot
                            if (AlleKarten[l].red > 0) {
                                placeDiv(c, AlleKarten[l].name, k);
                                AlleKarten[l].red--;
                                continue;
                            }
                            else { 
                                k--;
                                continue;
                            }
                        case 1: //Bei Case 1 blaue Farbe
                            c = "#0000ff"; 
                            if (AlleKarten[l].blue > 0) {
                                placeDiv(c, AlleKarten[l].name, k);
                                AlleKarten[l].blue--;
                                continue;
                            }
                            else { 
                                k--;
                                continue;
                            }
                        case 2: //Bei Case 2 gelbe Farbe
                            c = "#ffff00"; //gelb
                            if (AlleKarten[l].yellow > 0) {
                                placeDiv(c, AlleKarten[l].name, k);
                                AlleKarten[l].yellow--;
                                continue;
                            }
                            else { 
                                k--;
                                continue;
                            }
                        case 3: //Bei Case 3 grüne farbe
                            c = "#00ff00"; //grün
                            if (AlleKarten[l].green > 0) {
                                placeDiv(c, AlleKarten[l].name, k);
                                AlleKarten[l].green--;
                                continue;
                            }
                            else { 
                                k--;
                                continue;
                }
            }
        }
}       
    } 
        function Nachziehstapel(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Nachziehstapel");
            document.getElementById("Nachziehstapel").innerHTML += "Nachziehstapel";
            let s: CSSStyleDeclaration = div.style;
            s.border = "thin dotted white";
            s.position = "absolute";
            s.textAlign = "center";
            s.marginTop = 50 + "px";
            s.backgroundColor = "#000000";
            s.color = "#ffffff";
            s.width = 100 + "px";
            s.height = 170 + "px";
            s.left = 50 + "px";
            s.borderRadius = 5 + "px";
        }

        function Ablagestapel(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablagestapel")
            document.getElementById("Ablagestapel").innerHTML += "Ablagestapel";
            let s: CSSStyleDeclaration = div.style;
            s.border = "thin dotted white";
            s.textAlign = "center";
            s.position = "absolute";
            s.marginTop = 50 + "px";
            s.backgroundColor = "#000000";
            s.color = "#ffffff";
            s.width = 100 + "px";
            s.height = 170 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
            s.borderRadius = 5 + "px";
        }
        Nachziehstapel();
        Ablagestapel();
    }
    document.addEventListener('DOMContentLoaded',main);
}