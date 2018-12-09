var aufgabe7;
(function (aufgabe7) {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", init);
    let address = "https://node-server-sebastian.herokuapp.com/";
    let treePrice = 0;
    let holderPrice = 0;
    let shipmentPrice = 0;
    let strasse1 = "";
    let hausnummer1 = "";
    function init(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
        document.getElementById("verify").addEventListener("click", verify);
        document.getElementById("async").addEventListener("click", sendRequestWithCustomData);
    }
    function fillFieldset() {
        let node = document.getElementById("fieldset");
        let childNodeHTML;
        childNodeHTML = "<h3>Baum:</h3>";
        childNodeHTML += "<select name='Baum' id='tree'>";
        for (let i = 0; i < aufgabe7.treeTyp.length; i++) {
            childNodeHTML += "<option value='" + i + aufgabe7.treeTyp[i].name + "'>" + aufgabe7.treeTyp[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Halterung:</h3>";
        childNodeHTML += "<select name='Halterung' id='holder'>";
        for (let i = 0; i < aufgabe7.holder.length; i++) {
            childNodeHTML += "<option value='" + i + aufgabe7.holder[i].name + "'>" + aufgabe7.holder[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Versand:</h3>";
        childNodeHTML += "<select name='Versand' id='shipment'>";
        for (let i = 0; i < aufgabe7.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + aufgabe7.shipment[i].name + "'>" + aufgabe7.shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Adresse:</h3>";
        childNodeHTML += "<input id='strasse' type='text' name='Strasse' placeholder='Strasse' required/>";
        childNodeHTML += "<input id='hausnummer' type='text' name='Hausnummer' placeholder='Hausnummer' required/>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Weihnachtskugeln</h3>";
        childNodeHTML += "<h4>Bitte Anzahl der Artikel eingeben:</h4>";
        childNodeHTML += "<br>";
        for (let i = 0; i < aufgabe7.christmasBulb.length; i++) {
            childNodeHTML += aufgabe7.christmasBulb[i].name;
            childNodeHTML += " <input type='text' id='numBulbs" + i + "' name='Weihnachtskugeln' title='" + aufgabe7.christmasBulb[i].name + "' price='" + aufgabe7.christmasBulb[i].price + "'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<h4>Bitte Anzahl der Artikel eingeben:</h4>";
        childNodeHTML += "<br>";
        for (let i = 0; i < aufgabe7.lametta.length; i++) {
            childNodeHTML += aufgabe7.lametta[i].name;
            childNodeHTML += " <input type='text' id='numLametta" + i + "' name='Lametta' title='" + aufgabe7.lametta[i].name + "' price=" + aufgabe7.lametta[i].price + " />";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<h4>Bitte Anzahl der Artikel eingeben:</h4>";
        childNodeHTML += "<br>";
        for (let i = 0; i < aufgabe7.candle.length; i++) {
            childNodeHTML += aufgabe7.candle[i].name;
            childNodeHTML += " <input type='text' id='numrCandles" + i + "' name='Kerzen' title='" + aufgabe7.candle[i].name + "' price='" + aufgabe7.candle[i].price + "' />";
            childNodeHTML += "<br>";
            continue;
        }
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log(target.id);
        let articles = document.getElementsByTagName("input");
        let node = document.getElementById("artikel");
        node.innerHTML = "";
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];
            let value = parseInt(article.value);
            if (article.name == "Weihnachtskugeln" || article.name == "Lametta" || article.name == "Kerzen") {
                let node = document.getElementById("artikel");
                let domValue = target.value;
                target.setAttribute("value", domValue);
                let value = parseInt(article.getAttribute("value"));
                let name = article.getAttribute("title");
                let price = article.getAttribute("price");
                let childNodeHTML;
                if (value > 0) {
                    childNodeHTML = "";
                    childNodeHTML += "<a name=" + target.name + " value=" + value + " price=" + (Number(price) * value) + " hiddenName=" + name + ">";
                    childNodeHTML += " " + value + name + " " + (Number(price) * value) + " Euro";
                    childNodeHTML += "</a>";
                    node.innerHTML += childNodeHTML;
                }
            }
        }
        if (target.id == "tree") {
            let node = document.getElementById("baum");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            treePrice = aufgabe7.treeTyp[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "holder") {
            let node = document.getElementById("halterung");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            holderPrice = aufgabe7.holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "shipment") {
            let node = document.getElementById("versand");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            shipmentPrice = aufgabe7.shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "strasse") {
            let node = document.getElementById("strasse1");
            let strasse1 = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + strasse1.substr(0) + ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "hausnummer") {
            let node = document.getElementById("hausnummer1");
            let hausnummer1 = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + hausnummer1.substr(0) + ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        calculatePrice();
    }
    function calculatePrice() {
        let checkout = document.getElementById("artikel");
        let price = 0;
        console.log(checkout.childNodes);
        for (let i = 0; i < checkout.childNodes.length; i++) {
            let article = checkout.childNodes[i];
            let articlePrice = Number(article.getAttribute("price"));
            price += articlePrice;
            console.log(articlePrice);
        }
        let HTML;
        let node = document.getElementById("preis");
        HTML = " ";
        HTML += (treePrice + holderPrice + shipmentPrice + price);
        HTML += " Euro";
        node.innerHTML = HTML;
    }
    function verify() {
        if (treePrice == null || holderPrice == null || shipmentPrice == null || strasse1.length < 1 || hausnummer1.length < 1) {
            document.getElementById("incomplete").innerHTML = "Leider fehlt etwas...";
        }
        else {
            document.getElementById("incomplete").innerHTML = "";
        }
    }
    function sendRequestWithCustomData() {
        let sendRequest = document.getElementsByClassName("checkout").length;
        let strings = "";
        for (let i = 0; i < sendRequest; i++) {
            let article = document.getElementsByClassName("checkout")[i];
            if (article.childElementCount > 0) {
                for (let i = 0; i < article.childElementCount; i++) {
                    strings += article.children[i].getAttribute("name") + ":";
                    if (article.children[i].getAttribute("name") == "Weihnachtskugeln" || article.children[i].getAttribute("name") == "Lametta" || article.children[i].getAttribute("name") == "Kerzen") {
                        strings += article.children[i].getAttribute("hiddenName");
                    }
                    strings += article.children[i].getAttribute("value");
                    strings += "&";
                }
            }
            else {
                continue;
            }
        }
        console.log("HTMLString:" + strings);
        let xhr = new XMLHttpRequest();
        alert(strings);
        xhr.open("GET", address + "?" + strings, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(aufgabe7 || (aufgabe7 = {}));
//# sourceMappingURL=Aufgabe7-Config.js.map