var aufgabe6;
(function (aufgabe6) {
    window.addEventListener("load", init);
    let totalPrice = 0;
    let christmasBulbPrice;
    let christmasBulbPrice2;
    let christmasBulbPrice3;
    let candlePrice;
    let candlePrice2;
    let candlePrice3;
    let lamettaPrice;
    let lamettaPrice2;
    let lamettaPrice3;
    let treePrice;
    let holderPrice;
    let shipmentPrice;
    let adress = "";
    let christmasBulbNum;
    let christmasBulbNum2;
    let christmasBulbNum3;
    let candleNum;
    let candleNum2;
    let candleNum3;
    let lamettaNum;
    let lamettaNum2;
    let lamettaNum3;
    function init() {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
        document.getElementById("verify").addEventListener("click", verify);
    }
    function fillFieldset() {
        let node = document.getElementsByTagName("fieldset")[0];
        let childHTML = "";
        childHTML += "<h2>Weihnachtskugeln:</h2>";
        childHTML += "<select id=christmasBulb1 name=ChristmasBulbs1>";
        childHTML += "<option value=0 selected></option>";
        for (let i = 0; i < aufgabe6.christmasBulb.length; i++) {
            childHTML += "<option value=";
            childHTML += "christmasBulb1" + i;
            childHTML += ">";
            childHTML += aufgabe6.christmasBulb[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=ChristmasBulbAnzahl1 name=anzahl1>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < 30; i += 1) {
            childHTML += "<option value=cmbamount1";
            childHTML += i;
            childHTML += " id=cmbamount1";
            childHTML += i;
            childHTML += ">";
            childHTML += i;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h3>Weihnachtskugeln 2:</h3>";
        childHTML += "<select id=christmasBulb2 name=ChristmasBulbs2>";
        childHTML += "<option value=0 selected></option>";
        for (let i = 0; i < aufgabe6.christmasBulb.length; i++) {
            childHTML += "<option value=";
            childHTML += "christmasBulb2" + i;
            childHTML += ">";
            childHTML += aufgabe6.christmasBulb[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=ChristmasBulbAnzahl2 name=anzahl2>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < 30; i += 1) {
            childHTML += "<option value=cmbamount2";
            childHTML += i;
            childHTML += " id=cmbamount2";
            childHTML += i;
            childHTML += ">";
            childHTML += i;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h3>Weihnachtskugeln 3:</h3>";
        childHTML += "<select id=christmasBulb3 name=ChristmasBulbs3>";
        childHTML += "<option value=0 selected></option>";
        for (let i = 0; i < aufgabe6.christmasBulb.length; i++) {
            childHTML += "<option value=";
            childHTML += "christmasBulb3" + i;
            childHTML += ">";
            childHTML += aufgabe6.christmasBulb[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=ChristmasBulbAnzahl3 name=anzahl3>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < 30; i += 1) {
            childHTML += "<option value=cmbamount3";
            childHTML += i;
            childHTML += " id=cmbamount3";
            childHTML += i;
            childHTML += ">";
            childHTML += i;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Kerzen:</h2>";
        childHTML += "<select id=candle1 name=Candles1>";
        childHTML += "<option value=0 selected></option>";
        for (let i = 0; i < aufgabe6.candle.length; i++) {
            childHTML += "<option value=";
            childHTML += "candle1" + i;
            childHTML += ">";
            childHTML += aufgabe6.candle[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=CandleAnzahl1 name=anzahl1>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < 20; i += 1) {
            childHTML += "<option value=cndamount1";
            childHTML += i;
            childHTML += " id=cndamount1";
            childHTML += i;
            childHTML += ">";
            childHTML += i;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h3>Kerzen 2:</h3>";
        childHTML += "<select id=candle2 name=Candles2>";
        childHTML += "<option value=0 selected></option>";
        for (let i = 0; i < aufgabe6.candle.length; i++) {
            childHTML += "<option value=";
            childHTML += "candle2" + i;
            childHTML += ">";
            childHTML += aufgabe6.candle[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=CandleAnzahl2 name=anzahl2>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < 20; i += 1) {
            childHTML += "<option value=cndamount2";
            childHTML += i;
            childHTML += " id=cndamount2";
            childHTML += i;
            childHTML += ">";
            childHTML += i;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h3>Kerzen 3:</h3>";
        childHTML += "<select id=candle3 name=Candles3>";
        childHTML += "<option value=0 selected></option>";
        for (let i = 0; i < aufgabe6.candle.length; i++) {
            childHTML += "<option value=";
            childHTML += "candle3" + i;
            childHTML += ">";
            childHTML += aufgabe6.candle[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=CandleAnzahl3 name=anzahl3>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < 20; i += 1) {
            childHTML += "<option value=cndamount3";
            childHTML += i;
            childHTML += " id=cndamount3";
            childHTML += i;
            childHTML += ">";
            childHTML += i;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Lametta:</h2>";
        childHTML += "<select id=lametta1 name=Lamettas1>";
        childHTML += "<option value=0 selected></option>";
        for (let i = 0; i < aufgabe6.lametta.length; i++) {
            childHTML += "<option value=";
            childHTML += "lametta1" + i;
            childHTML += ">";
            childHTML += aufgabe6.lametta[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=LamettaAnzahl1 name=anzahl1>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < 20; i += 1) {
            childHTML += "<option value=lamamount1";
            childHTML += i;
            childHTML += " id=lamamount1";
            childHTML += i;
            childHTML += ">";
            childHTML += i;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h3>Lametta 2:</h3>";
        childHTML += "<select id=lametta2 name=Lamettas2>";
        childHTML += "<option value=0 selected></option>";
        for (let i = 0; i < aufgabe6.lametta.length; i++) {
            childHTML += "<option value=";
            childHTML += "lametta2" + i;
            childHTML += ">";
            childHTML += aufgabe6.lametta[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=LamettaAnzahl2 name=anzahl2>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < 20; i += 1) {
            childHTML += "<option value=lamamount2";
            childHTML += i;
            childHTML += " id=lamamount2";
            childHTML += i;
            childHTML += ">";
            childHTML += i;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h3>Lametta 3:</h3>";
        childHTML += "<select id=lametta3 name=Lamettas3>";
        childHTML += "<option value=0 selected></option>";
        for (let i = 0; i < aufgabe6.lametta.length; i++) {
            childHTML += "<option value=";
            childHTML += "lametta3" + i;
            childHTML += ">";
            childHTML += aufgabe6.lametta[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=LamettaAnzahl3 name=anzahl3>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < 20; i += 1) {
            childHTML += "<option value=lamamount3";
            childHTML += i;
            childHTML += " id=lamamount3";
            childHTML += i;
            childHTML += ">";
            childHTML += i;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Baum:</h2>";
        childHTML += "<select id=tree name=trees>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < aufgabe6.treeTyp.length; i++) {
            childHTML += "<option value=";
            childHTML += "tree" + i;
            childHTML += ">";
            childHTML += aufgabe6.treeTyp[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Halterung:</h2>";
        childHTML += "<select id=holder name=holders>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < aufgabe6.holder.length; i++) {
            childHTML += "<option value=";
            childHTML += "halter" + i;
            childHTML += ">";
            childHTML += aufgabe6.holder[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Versand:</h2>";
        childHTML += "<select id=shipment name=Shipments>";
        childHTML += "<option value=clear selected></option>";
        for (let i = 0; i < aufgabe6.shipment.length; i++) {
            childHTML += "<option value=";
            childHTML += "versand" + i;
            childHTML += ">";
            childHTML += aufgabe6.shipment[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Deine Adresse:</h2>";
        childHTML += "<input id=adressID type=text name=Text placeholder=Eingabe>";
        node.innerHTML += childHTML;
    }
    function calculatePrice() {
        let christmasBulbCalc = 0;
        let christmasBulbCalc2 = 0;
        let christmasBulbCalc3 = 0;
        let candleCalc = 0;
        let candleCalc2 = 0;
        let candleCalc3 = 0;
        let lamettaCalc = 0;
        let lamettaCalc2 = 0;
        let lamettaCalc3 = 0;
        if (christmasBulbPrice > 0 && christmasBulbNum > 0) {
            christmasBulbCalc = christmasBulbPrice * christmasBulbNum;
        }
        if (christmasBulbPrice2 > 0 && christmasBulbNum2 > 0) {
            christmasBulbCalc2 = christmasBulbPrice2 * christmasBulbNum2;
        }
        if (christmasBulbPrice3 > 0 && christmasBulbNum3 > 0) {
            christmasBulbCalc3 = christmasBulbPrice3 * christmasBulbNum3;
        }
        if (candlePrice > 0 && candleNum > 0) {
            candleCalc = candlePrice * candleNum;
        }
        if (candlePrice2 > 0 && candleNum2 > 0) {
            candleCalc2 = candlePrice2 * candleNum2;
        }
        if (candlePrice3 > 0 && candleNum3 > 0) {
            candleCalc3 = candlePrice3 * candleNum3;
        }
        if (lamettaPrice > 0 && lamettaNum > 0) {
            lamettaCalc = lamettaPrice * lamettaNum;
        }
        if (lamettaPrice2 > 0 && lamettaNum2 > 0) {
            lamettaCalc2 = lamettaPrice2 * lamettaNum2;
        }
        if (lamettaPrice3 > 0 && lamettaNum3 > 0) {
            lamettaCalc3 = lamettaPrice3 * lamettaNum3;
        }
        totalPrice = 0;
        if (christmasBulbCalc > 0) {
            totalPrice += christmasBulbCalc;
        }
        if (christmasBulbCalc2 > 0) {
            totalPrice += christmasBulbCalc2;
        }
        if (christmasBulbCalc3 > 0) {
            totalPrice += christmasBulbCalc3;
        }
        if (candleCalc > 0) {
            totalPrice += candleCalc;
        }
        if (candleCalc2 > 0) {
            totalPrice += candleCalc2;
        }
        if (candleCalc3 > 0) {
            totalPrice += candleCalc3;
        }
        if (lamettaCalc > 0) {
            totalPrice += lamettaCalc;
        }
        if (lamettaCalc2 > 0) {
            totalPrice += lamettaCalc2;
        }
        if (lamettaCalc3 > 0) {
            totalPrice += lamettaCalc3;
        }
        if (treePrice > 0) {
            totalPrice += treePrice;
        }
        if (holderPrice > 0) {
            totalPrice += holderPrice;
        }
        if (shipmentPrice > 0) {
            totalPrice += shipmentPrice;
        }
        let childHTML = "";
        childHTML += totalPrice;
        document.getElementById("price").innerHTML = childHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        if (target.id == "christmasBulb1") {
            let convertedString = target.value.substr(14);
            let index = Number(convertedString);
            let childHTML = aufgabe6.christmasBulb[index].name;
            christmasBulbPrice = aufgabe6.christmasBulb[index].price;
            let node = document.getElementById("christmasBulbColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "ChristmasBulbAnzahl1") {
            christmasBulbNum = Number(target.value.substr(10));
            let childHTML = "";
            childHTML += target.value.substr(10);
            let node = document.getElementById("christmasBulbAmount");
            node.innerHTML = childHTML;
        }
        if (target.id == "christmasBulb2") {
            let convertedString = target.value.substr(14);
            let index = Number(convertedString);
            let childHTML = aufgabe6.christmasBulb[index].name;
            christmasBulbPrice2 = aufgabe6.christmasBulb[index].price;
            let node = document.getElementById("christmasBulbColor2");
            node.innerHTML = childHTML;
        }
        if (target.id == "ChristmasBulbAnzahl2") {
            christmasBulbNum2 = Number(target.value.substr(10));
            let childHTML = "";
            childHTML += target.value.substr(10);
            let node = document.getElementById("christmasBulbAmount2");
            node.innerHTML = childHTML;
        }
        if (target.id == "christmasBulb3") {
            let convertedString = target.value.substr(14);
            let index = Number(convertedString);
            let childHTML = aufgabe6.christmasBulb[index].name;
            christmasBulbPrice3 = aufgabe6.christmasBulb[index].price;
            let node = document.getElementById("christmasBulbColor3");
            node.innerHTML = childHTML;
        }
        if (target.id == "ChristmasBulbAnzahl3") {
            christmasBulbNum3 = Number(target.value.substr(10));
            let childHTML = "";
            childHTML += target.value.substr(10);
            let node = document.getElementById("christmasBulbAmount3");
            node.innerHTML = childHTML;
        }
        if (target.id == "candle1") {
            let convertedString = target.value.substr(7);
            let index = Number(convertedString);
            let childHTML = aufgabe6.candle[index].name;
            candlePrice = aufgabe6.candle[index].price;
            let node = document.getElementById("candleColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "CandleAnzahl1") {
            candleNum = Number(target.value.substr(10));
            let childHTML = "";
            childHTML += target.value.substr(10);
            let node = document.getElementById("candleAmount");
            node.innerHTML = childHTML;
        }
        if (target.id == "candle2") {
            let convertedString = target.value.substr(7);
            let index = Number(convertedString);
            let childHTML = aufgabe6.candle[index].name;
            candlePrice2 = aufgabe6.candle[index].price;
            let node = document.getElementById("candleColor2");
            node.innerHTML = childHTML;
        }
        if (target.id == "CandleAnzahl2") {
            candleNum2 = Number(target.value.substr(10));
            let childHTML = "";
            childHTML += target.value.substr(10);
            let node = document.getElementById("candleAmount2");
            node.innerHTML = childHTML;
        }
        if (target.id == "candle3") {
            let convertedString = target.value.substr(7);
            let index = Number(convertedString);
            let childHTML = aufgabe6.candle[index].name;
            candlePrice3 = aufgabe6.candle[index].price;
            let node = document.getElementById("candleColor3");
            node.innerHTML = childHTML;
        }
        if (target.id == "CandleAnzahl3") {
            candleNum3 = Number(target.value.substr(10));
            let childHTML = "";
            childHTML += target.value.substr(10);
            let node = document.getElementById("candleAmount3");
            node.innerHTML = childHTML;
        }
        if (target.id == "lametta1") {
            let convertedString = target.value.substr(8);
            let index = Number(convertedString);
            let childHTML = aufgabe6.lametta[index].name;
            lamettaPrice = aufgabe6.lametta[index].price;
            let node = document.getElementById("lamettaColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "LamettaAnzahl1") {
            lamettaNum = Number(target.value.substr(10));
            let childHTML = "";
            childHTML += target.value.substr(10);
            let node = document.getElementById("lamettaAmount");
            node.innerHTML = childHTML;
        }
        if (target.id == "lametta2") {
            let convertedString = target.value.substr(8);
            let index = Number(convertedString);
            let childHTML = aufgabe6.lametta[index].name;
            lamettaPrice2 = aufgabe6.lametta[index].price;
            let node = document.getElementById("lamettaColor2");
            node.innerHTML = childHTML;
        }
        if (target.id == "LamettaAnzahl2") {
            lamettaNum2 = Number(target.value.substr(10));
            let childHTML = "";
            childHTML += target.value.substr(10);
            let node = document.getElementById("lamettaAmount2");
            node.innerHTML = childHTML;
        }
        if (target.id == "lametta3") {
            let convertedString = target.value.substr(8);
            let index = Number(convertedString);
            let childHTML = aufgabe6.lametta[index].name;
            lamettaPrice3 = aufgabe6.lametta[index].price;
            let node = document.getElementById("lamettaColor3");
            node.innerHTML = childHTML;
        }
        if (target.id == "LamettaAnzahl3") {
            lamettaNum3 = Number(target.value.substr(10));
            let childHTML = "";
            childHTML += target.value.substr(10);
            let node = document.getElementById("lamettaAmount3");
            node.innerHTML = childHTML;
        }
        if (target.id == "tree") {
            let convertedString = target.value.substr(4);
            let index = Number(convertedString);
            let childHTML = aufgabe6.treeTyp[index].name;
            treePrice = aufgabe6.treeTyp[index].price;
            let node = document.getElementById("treeTyp");
            node.innerHTML = childHTML;
        }
        if (target.id == "holder") {
            let convertedString = target.value.substr(6);
            let index = Number(convertedString);
            let childHTML = aufgabe6.holder[index].name;
            holderPrice = aufgabe6.holder[index].price;
            let node = document.getElementById("holderSize");
            node.innerHTML = childHTML;
        }
        if (target.id == "shipment") {
            let convertedString = target.value.substr(7);
            let index = Number(convertedString);
            let childHTML = aufgabe6.shipment[index].name;
            shipmentPrice = aufgabe6.shipment[index].price;
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
        calculatePrice();
    }
    function verify() {
        if (christmasBulbPrice == null || christmasBulbPrice2 == null || christmasBulbPrice3 == null || candlePrice == null || candlePrice2 == null || candlePrice3 == null || lamettaPrice == null || lamettaPrice2 == null || lamettaPrice3 == null || treePrice == null || holderPrice == null || shipmentPrice == null || totalPrice == null || adress.length < 1) {
            document.getElementById("incomplete").innerHTML = "Eingabe unvollstaendig";
        }
        else {
            document.getElementById("incomplete").innerHTML = "";
        }
    }
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Aufgabe6-Config.js.map