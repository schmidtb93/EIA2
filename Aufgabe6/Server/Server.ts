import * as Http from "http";
import * as Url from "url";
namespace L06_SendData {
    console.log("Starting server"); 
    let port: number = process.env.PORT; 
    if (port == undefined) 
         port = 8100;   

    let server: Http.Server = Http.createServer(); 
    server.addListener("request", handleRequest); 
    server.addListener("listening", handleListen); 
    server.listen(port); 
    

    function handleListen(): void {
        console.log("Listening"); 
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { 
        console.log(_request.url); 
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 
        let articles: string[] = [];
        let url: string = _request.url;
        if (url != "/favicon.ico") {
            let urlSection: string = Url.parse(url).search.substr(1);
            let childHTML: string = "<br>";
            for (let i: number = 0; i < urlSection.length; i++) {
                if (urlSection[i] == "&") {
                    articles.push(childHTML);
                    childHTML = "<br>";
                }
                else {
                    childHTML += urlSection[i];
                }
            }
            articles.push(childHTML);

            for (let i: number = 0; i < articles.length; i++) {
                _response.write(articles[i]);
            }
            console.log(articles);
        }
        _response.write(_request.url); 
        _response.end(); 
    }
}