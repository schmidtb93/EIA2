var aufgabe4;
(function (aufgabe4) {
    window.addEventListener("load", init);
    let totalPrice = 0;
    let christmasbulbPrice = 0;
    let candlePrice = 0;
    let lamettaPrice = 0;
    let treePrice = 0;
    let holderPrice = 0;
    let shipmentPrice = 0;
    let adress = "";
    function init() {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
        document.getElementById("verify").addEventListener("click", verify);
    }
    //Funktion von Prof. Dell'Oro-Friedl und Aufgabe 13 EIA1
    function fillFieldset() {
        let node = document.getElementsByTagName("fieldset")[0];
        let childHTML = "";
        childHTML += "<h2>Weihnachtskugeln:</h2>";
        childHTML += "<select id=christmasBulb name=ChristmasBulbs>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < aufgabe4.christmasBulb.length; i++) {
            childHTML += "<option value=";
            childHTML += "christmasBulb" + i;
            childHTML += ">";
            childHTML += aufgabe4.christmasBulb[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Kerzen:</h2>";
        childHTML += "<select id=candle name=candles>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < aufgabe4.candle.length; i++) {
            childHTML += "<option value=";
            childHTML += "candle" + i;
            childHTML += ">";
            childHTML += aufgabe4.candle[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Lametta:</h2>";
        childHTML += "<select id=lametta name=lamettas>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < aufgabe4.lametta.length; i++) {
            childHTML += "<option value=";
            childHTML += "lametta" + i;
            childHTML += ">";
            childHTML += aufgabe4.lametta[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Baum:</h2>";
        childHTML += "<select id=tree name=trees>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < aufgabe4.treeTyp.length; i++) {
            childHTML += "<option value=";
            childHTML += "tree" + i;
            childHTML += ">";
            childHTML += aufgabe4.treeTyp[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Halterung:</h2>";
        childHTML += "<select id=holder name=holders>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < aufgabe4.holder.length; i++) {
            childHTML += "<option value=";
            childHTML += "halter" + i;
            childHTML += ">";
            childHTML += aufgabe4.holder[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Versand:</h2>";
        childHTML += "<select id=shipment name=Shipments>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < aufgabe4.shipment.length; i++) {
            childHTML += "<option value=";
            childHTML += "versand" + i;
            childHTML += ">";
            childHTML += aufgabe4.shipment[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Deine Adresse:</h2>";
        childHTML += "<input id=adressID type=text name=Text placeholder=Eingabe>";
        node.innerHTML += childHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        if (target.id == "christmasBulb") {
            let convertedString = target.value.substr(13);
            let index = Number(convertedString);
            let childHTML = aufgabe4.christmasBulb[index].name;
            christmasbulbPrice = aufgabe4.christmasBulb[index].price;
            let node = document.getElementById("christmasBulbColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "candle") {
            let convertedString = target.value.substr(6);
            let index = Number(convertedString);
            let childHTML = aufgabe4.candle[index].name;
            candlePrice = aufgabe4.candle[index].price;
            let node = document.getElementById("candleColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "lametta") {
            let convertedString = target.value.substr(7);
            let index = Number(convertedString);
            let childHTML = aufgabe4.lametta[index].name;
            lamettaPrice = aufgabe4.lametta[index].price;
            let node = document.getElementById("lamettaColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "tree") {
            let convertedString = target.value.substr(4);
            let index = Number(convertedString);
            let childHTML = aufgabe4.treeTyp[index].name;
            treePrice = aufgabe4.treeTyp[index].price;
            let node = document.getElementById("treeTyp");
            node.innerHTML = childHTML;
        }
        if (target.id == "holder") {
            let convertedString = target.value.substr(6);
            let index = Number(convertedString);
            let childHTML = aufgabe4.holder[index].name;
            holderPrice = aufgabe4.holder[index].price;
            let node = document.getElementById("holderSize");
            node.innerHTML = childHTML;
        }
        if (target.id == "shipment") {
            let convertedString = target.value.substr(8);
            let index = Number(convertedString);
            let childHTML = aufgabe4.shipment[index].name;
            holderPrice = aufgabe4.shipment[index].price;
            let node = document.getElementById("shipmentChoice");
            node.innerHTML = childHTML;
        }
        if (target.id == "adressID") {
            let childHTML = "";
            childHTML += target.value;
            adress = target.value;
            let node = document.getElementById("adress");
            node.innerHTML = childHTML;
        }
        let childHTML;
        let node = document.getElementById("price");
        childHTML = " ";
        childHTML += (totalPrice = christmasbulbPrice + candlePrice + lamettaPrice + treePrice + holderPrice + shipmentPrice);
        childHTML += " Euro";
        node.innerHTML = childHTML;
    }
    function verify() {
        if (christmasbulbPrice == null || candlePrice == null || lamettaPrice == null || treePrice == null || holderPrice == null || shipmentPrice == null || totalPrice == null || adress.length < 1) {
            document.getElementById("incomplete").innerHTML = "Eingabe unvollstaendig";
        }
        else {
            document.getElementById("incomplete").innerHTML = "";
        }
    }
})(aufgabe4 || (aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4-Config.js.map