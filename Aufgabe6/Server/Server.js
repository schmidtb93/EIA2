"use strict";
const Http = require("http");
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let articles = [];
        let url = _request.url;
        if (url != "/favicon.ico") {
            let urlSection = Url.parse(url).search.substr(1);
            let childHTML = "<br>";
            for (let i = 0; i < urlSection.length; i++) {
                if (urlSection[i] == "&") {
                    articles.push(childHTML);
                    childHTML = "<br>";
                }
                else {
                    childHTML += urlSection[i];
                }
            }
            articles.push(childHTML);
            for (let i = 0; i < articles.length; i++) {
                _response.write(articles[i]);
            }
            console.log(articles);
        }
        _response.write(_request.url);
        _response.end();
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map