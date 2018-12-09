"use strict";
//Import die gesamte node.d.ts Datei und greift auf "declare module "http"" zu
const Http = require("http");
const Url = require("url");
var aufgabe7;
(function (aufgabe7) {
    //Konsole gibt "Starting server" aus
    console.log("Starting server");
    //process bezieht sich auf NodeJS.Heroku ist die angegebene Umgebung. Wenn Port nicht angegeben ist, wird Port 8100 benutzt 
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    //leeres Array f�r die Artikel
    let alleArtikel = [];
    //Erlaubt den Transfer Hyper Text Transfer Protocol. 
    let server = Http.createServer(); //Der PC fungiert als Server.
    server.addListener("request", handleRequest); //Kommunikation zwischen Client und Server. Der Server sendet eine Anfrage "handleRequest".
    server.addListener("listening", handleListen); //Listener wartet auf eingehede Daten
    server.listen(port); //H�rt auf den Port 8100 
    function handleListen() {
        console.log("Listening"); //Konsole gibt "Listening" aus
    }
    function handleRequest(_request, _response) {
        console.log(_request.url); //Konsole gibt "I hear voices!" aus //Gibt die Url zur�ck
        console.log("request");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Bestimmt den Zeichencode sowie das folgendes Dokument ein Text ist 
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Sch�tzt Skriptsprachen-zugriff von fremden Quellen und erlaubt nur die eigene Ressource zu laden (Origin w�re das Protokoll, sowie die Dom�ne und der Port z.B https://eia2-nodetest.herokuapp.com mit dem Port 8100)  
        if (_request.url != "/favicon.ico") {
            let urlEncoding = Url.parse(_request.url).search.substr(1); //Die Url wird zergliedert in "Kugel1=2&Kugel2=1" usw. 
            let childHTML = "<p>";
            for (let i = 0; i < urlEncoding.length; i++) {
                if (urlEncoding[i] == "&") {
                    alleArtikel.push(childHTML);
                    childHTML = "<p>";
                }
                else {
                    if (childHTML == "<p>adresse") {
                        childHTML = "<p>Adresse"; //Name vom Text adresse
                    }
                    childHTML += urlEncoding[i];
                }
            }
            alleArtikel.push(childHTML);
            for (let i = 0; i < alleArtikel.length; i++) {
                _response.write(alleArtikel[i]); // Sendet eine Antwort an die angefragte URL
            }
            console.log(alleArtikel);
        }
        _response.end(); //Der Inhalt von Response wird vom Client gesendet und es wird signalisiert das jene Anfrage vollst�ndig gesendet wurde
        //Server wird mit strg+c beendet
    }
})(aufgabe7 || (aufgabe7 = {}));
//# sourceMappingURL=Server.js.map