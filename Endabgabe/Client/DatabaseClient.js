var endabgabe;
(function (endabgabe) {
    window.addEventListener("load", init);
    let serverAddress = "https://node-server-sebastian.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        console.log(insertButton);
        let refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&score=" + document.getElementById("results").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function playerDataSort(_a, _b) {
        let returnNumber;
        if (_a.score > _b.score) {
            returnNumber = -1;
        }
        else if (_a.score < _b.score) {
            returnNumber = 1;
        }
        else {
            returnNumber = 0;
        }
        return returnNumber;
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("scores");
            let scores = [];
            let responseAsJson = JSON.parse(xhr.response);
            responseAsJson.sort(playerDataSort);
            for (let i = 0; i < responseAsJson.length; i++) {
                console.log(responseAsJson[i].name);
                output.innerHTML += "<p id='showScores'><strong>Name: </strong>" + responseAsJson[i].name + "<br><strong>Score: </strong>" + responseAsJson[i].score + "</p>";
            }
        }
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=DatabaseClient.js.map