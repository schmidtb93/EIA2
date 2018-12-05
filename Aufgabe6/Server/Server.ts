//Import die gesamte node.d.ts Datei und greift auf "declare module "http"" zu
import * as Http from "http";

namespace L06_SendData { //Funktionen werden abgegrenzt um Konflikte mit �hnlichen definierten Variablen im Progrmmcode zu vermeiden
//Konsole gibt "Starting server" aus
    console.log("Starting server");
//process bezieht sich auf NodeJS.Heroku ist die angegebene Umgebung. Wenn Port nicht angegeben ist, wird Port 8100 benutzt 
    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;
//Erlaubt den Transfer Hyper Text Transfer Protocol. 
    let server: Http.Server = Http.createServer(); //Der PC fungiert als Server.
    server.addListener("request", handleRequest); //Kommunikation zwischen Client und Server. Der Server sendet eine Anfrage "handleRequest".
    server.addListener("listening", handleListen); //Listener wartet auf eingehede Daten
    server.listen(port); //H�rt auf den Port 8100 

    function handleListen(): void {
        console.log("Listening"); //Konsole gibt "Listening" aus
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Parameter Http.IncomingMessage bezieht sich auf Node.d.ts
        console.log(_request.url); //Konsole gibt "I hear voices!" aus //Gibt die Url zur�ck
 //Ver�ndert die Werte von setHeader
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Bestimmt den Zeichencode sowie das folgendes Dokument ein Text ist 
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Sch�tzt Skriptsprachen-zugriff von fremden Quellen und erlaubt nur die eigene Ressource zu laden (Origin w�re das Protokoll, sowie die Dom�ne und der Port z.B https://eia2-nodetest.herokuapp.com mit dem Port 8100)  

        _response.write(_request.url); // Sendet eine Antwort an die angefragte URL  (
       
        _response.end();  //Der Inhalt von Response wird vom Client gesendet und es wird signalisiert das jene Anfrage vollst�ndig gesendet wurde
    //Server wird mit strg+c beendet
    }
    
}