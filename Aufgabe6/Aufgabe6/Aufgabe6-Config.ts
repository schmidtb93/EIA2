namespace aufgabe6 {

    window.addEventListener("load", init);
    


    let totalPrice: number = 0;
    let christmasBulbPrice: number;
    let christmasBulbPrice2: number;
    let christmasBulbPrice3: number;
    let candlePrice: number;
    let candlePrice2: number;
    let candlePrice3: number;
    let lamettaPrice: number;
    let lamettaPrice2: number;
    let lamettaPrice3: number;
    let treePrice: number;
    let holderPrice: number;
    let shipmentPrice: number;
    let adress: string = "";

    let christmasBulbNum: number;
    let christmasBulbNum2: number;
    let christmasBulbNum3: number;
    let candleNum: number;
    let candleNum2: number;
    let candleNum3: number;
    let lamettaNum: number;
    let lamettaNum2: number;
    let lamettaNum3: number;

    function init(): void {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
        document.getElementById("verify").addEventListener("click", verify);
    
    }

    function fillFieldset(): void {
        let node: HTMLElement = document.getElementsByTagName("fieldset")[0];
        let childHTML: string = "";
        childHTML += "<h2>Weihnachtskugeln:</h2>";
        childHTML += "<select id=christmasBulb1 name=ChristmasBulbs1>";
        childHTML += "<option value=0 selected></option>";
        for (let i: number = 0; i < christmasBulb.length; i++) {
            childHTML += "<option value=";
            childHTML += "christmasBulb1" + i;
            childHTML += ">";
            childHTML += christmasBulb[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=ChristmasBulbAnzahl1 name=anzahl1>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 30; i += 1) {
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

        for (let i: number = 0; i < christmasBulb.length; i++) {
            childHTML += "<option value=";
            childHTML += "christmasBulb2" + i;
            childHTML += ">";
            childHTML += christmasBulb[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=ChristmasBulbAnzahl2 name=anzahl2>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 30; i += 1) {
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

        for (let i: number = 0; i < christmasBulb.length; i++) {
            childHTML += "<option value=";
            childHTML += "christmasBulb3" + i;
            childHTML += ">";
            childHTML += christmasBulb[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=ChristmasBulbAnzahl3 name=anzahl3>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 30; i += 1) {
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
        for (let i: number = 0; i < candle.length; i++) {
            childHTML += "<option value=";
            childHTML += "candle1" + i;
            childHTML += ">";
            childHTML += candle[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=CandleAnzahl1 name=anzahl1>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 20; i += 1) {
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
        for (let i: number = 0; i < candle.length; i++) {
            childHTML += "<option value=";
            childHTML += "candle2" + i;
            childHTML += ">";
            childHTML += candle[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=CandleAnzahl2 name=anzahl2>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 20; i += 1) {
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
        for (let i: number = 0; i < candle.length; i++) {
            childHTML += "<option value=";
            childHTML += "candle3" + i;
            childHTML += ">";
            childHTML += candle[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=CandleAnzahl3 name=anzahl3>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 20; i += 1) {
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
        for (let i: number = 0; i < lametta.length; i++) {
            childHTML += "<option value=";
            childHTML += "lametta1" + i;
            childHTML += ">";
            childHTML += lametta[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=LamettaAnzahl1 name=anzahl1>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 20; i += 1) {
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
        for (let i: number = 0; i < lametta.length; i++) {
            childHTML += "<option value=";
            childHTML += "lametta2" + i;
            childHTML += ">";
            childHTML += lametta[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=LamettaAnzahl2 name=anzahl2>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 20; i += 1) {
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
        for (let i: number = 0; i < lametta.length; i++) {
            childHTML += "<option value=";
            childHTML += "lametta3" + i;
            childHTML += ">";
            childHTML += lametta[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<select id=LamettaAnzahl3 name=anzahl3>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 20; i += 1) {
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
        for (let i: number = 0; i < treeTyp.length; i++) {
            childHTML += "<option value=";
            childHTML += "tree" + i;
            childHTML += ">";
            childHTML += treeTyp[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Halterung:</h2>";
        childHTML += "<select id=holder name=holders>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < holder.length; i++) {
            childHTML += "<option value=";
            childHTML += "halter" + i;
            childHTML += ">";
            childHTML += holder[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Versand:</h2>";
        childHTML += "<select id=shipment name=Shipments>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < shipment.length; i++) {
            childHTML += "<option value=";
            childHTML += "versand" + i;
            childHTML += ">";
            childHTML += shipment[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Deine Adresse:</h2>";
        childHTML += "<input id=adressID type=text name=Text placeholder=Eingabe>";

        node.innerHTML += childHTML;

    }

    function calculatePrice(): void {

        let christmasBulbCalc: number = 0;
        let christmasBulbCalc2: number = 0;
        let christmasBulbCalc3: number = 0;
        let candleCalc: number = 0;
        let candleCalc2: number = 0;
        let candleCalc3: number = 0;
        let lamettaCalc: number = 0;
        let lamettaCalc2: number = 0;
        let lamettaCalc3: number = 0;

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


        let childHTML: string = "";
        childHTML += totalPrice;

        document.getElementById("price").innerHTML = childHTML;
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.id == "christmasBulb1") {
            let convertedString: string = target.value.substr(14);
            let index: number = Number(convertedString);
            let childHTML: string = christmasBulb[index].name;
            christmasBulbPrice = christmasBulb[index].price;
            let node: HTMLElement = document.getElementById("christmasBulbColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "ChristmasBulbAnzahl1") {
            christmasBulbNum = Number(target.value.substr(10));
            let childHTML: string = "";
            childHTML += target.value.substr(10);
            let node: HTMLElement = document.getElementById("christmasBulbAmount");
            node.innerHTML = childHTML;
        }
        if (target.id == "christmasBulb2") {
            let convertedString: string = target.value.substr(14);
            let index: number = Number(convertedString);
            let childHTML: string = christmasBulb[index].name;
            christmasBulbPrice2 = christmasBulb[index].price;
            let node: HTMLElement = document.getElementById("christmasBulbColor2");
            node.innerHTML = childHTML;
        }
        if (target.id == "ChristmasBulbAnzahl2") {
            christmasBulbNum2 = Number(target.value.substr(10));
            let childHTML: string = "";
            childHTML += target.value.substr(10);
            let node: HTMLElement = document.getElementById("christmasBulbAmount2");
            node.innerHTML = childHTML;
        }
        if (target.id == "christmasBulb3") {
            let convertedString: string = target.value.substr(14);
            let index: number = Number(convertedString);
            let childHTML: string = christmasBulb[index].name;
            christmasBulbPrice3 = christmasBulb[index].price;
            let node: HTMLElement = document.getElementById("christmasBulbColor3");
            node.innerHTML = childHTML;
        }
        if (target.id == "ChristmasBulbAnzahl3") {
            christmasBulbNum3 = Number(target.value.substr(10));
            let childHTML: string = "";
            childHTML += target.value.substr(10);
            let node: HTMLElement = document.getElementById("christmasBulbAmount3");
            node.innerHTML = childHTML;
        }
        if (target.id == "candle1") {
            let convertedString: string = target.value.substr(7);
            let index: number = Number(convertedString);
            let childHTML: string = candle[index].name;
            candlePrice = candle[index].price;
            let node: HTMLElement = document.getElementById("candleColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "CandleAnzahl1") {
            candleNum = Number(target.value.substr(10));
            let childHTML: string = "";
            childHTML += target.value.substr(10);
            let node: HTMLElement = document.getElementById("candleAmount");
            node.innerHTML = childHTML;
        }
        if (target.id == "candle2") {
            let convertedString: string = target.value.substr(7);
            let index: number = Number(convertedString);
            let childHTML: string = candle[index].name;
            candlePrice2 = candle[index].price;
            let node: HTMLElement = document.getElementById("candleColor2");
            node.innerHTML = childHTML;
        }
        if (target.id == "CandleAnzahl2") {
            candleNum2 = Number(target.value.substr(10));
            let childHTML: string = "";
            childHTML += target.value.substr(10);
            let node: HTMLElement = document.getElementById("candleAmount2");
            node.innerHTML = childHTML;
        }
        if (target.id == "candle3") {
            let convertedString: string = target.value.substr(7);
            let index: number = Number(convertedString);
            let childHTML: string = candle[index].name;
            candlePrice3 = candle[index].price;
            let node: HTMLElement = document.getElementById("candleColor3");
            node.innerHTML = childHTML;
        }
        if (target.id == "CandleAnzahl3") {
            candleNum3 = Number(target.value.substr(10));
            let childHTML: string = "";
            childHTML += target.value.substr(10);
            let node: HTMLElement = document.getElementById("candleAmount3");
            node.innerHTML = childHTML;
        }
        if (target.id == "lametta1") {
            let convertedString: string = target.value.substr(8);
            let index: number = Number(convertedString);
            let childHTML: string = lametta[index].name;
            lamettaPrice = lametta[index].price;
            let node: HTMLElement = document.getElementById("lamettaColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "LamettaAnzahl1") {
            lamettaNum = Number(target.value.substr(10));
            let childHTML: string = "";
            childHTML += target.value.substr(10);
            let node: HTMLElement = document.getElementById("lamettaAmount");
            node.innerHTML = childHTML;
        }
        if (target.id == "lametta2") {
            let convertedString: string = target.value.substr(8);
            let index: number = Number(convertedString);
            let childHTML: string = lametta[index].name;
            lamettaPrice2 = lametta[index].price;
            let node: HTMLElement = document.getElementById("lamettaColor2");
            node.innerHTML = childHTML;
        }
        if (target.id == "LamettaAnzahl2") {
            lamettaNum2 = Number(target.value.substr(10));
            let childHTML: string = "";
            childHTML += target.value.substr(10);
            let node: HTMLElement = document.getElementById("lamettaAmount2");
            node.innerHTML = childHTML;
        }
        if (target.id == "lametta3") {
            let convertedString: string = target.value.substr(8);
            let index: number = Number(convertedString);
            let childHTML: string = lametta[index].name;
            lamettaPrice3 = lametta[index].price;
            let node: HTMLElement = document.getElementById("lamettaColor3");
            node.innerHTML = childHTML;
        }
        if (target.id == "LamettaAnzahl3") {
            lamettaNum3 = Number(target.value.substr(10));
            let childHTML: string = "";
            childHTML += target.value.substr(10);
            let node: HTMLElement = document.getElementById("lamettaAmount3");
            node.innerHTML = childHTML;
        }
        if (target.id == "tree") {
            let convertedString: string = target.value.substr(4);
            let index: number = Number(convertedString);
            let childHTML: string = treeTyp[index].name;
            treePrice = treeTyp[index].price;
            let node: HTMLElement = document.getElementById("treeTyp");
            node.innerHTML = childHTML;
        }
        if (target.id == "holder") {
            let convertedString: string = target.value.substr(6);
            let index: number = Number(convertedString);
            let childHTML: string = holder[index].name;
            holderPrice = holder[index].price;
            let node: HTMLElement = document.getElementById("holderSize");
            node.innerHTML = childHTML;
        }
        if (target.id == "shipment") {
            let convertedString: string = target.value.substr(7);
            let index: number = Number(convertedString);
            let childHTML: string = shipment[index].name;
            shipmentPrice = shipment[index].price;
            let node: HTMLElement = document.getElementById("shipmentChoice");
            node.innerHTML = childHTML;
        }
        if (target.id == "adressID") {
            let childHTML: string = "";
            childHTML += target.value;
            adress = target.value;
            let node: HTMLElement = document.getElementById("adress");
            node.innerHTML = childHTML;
        }
        calculatePrice();
    }

    function verify(): void {
        if (christmasBulbPrice == null || christmasBulbPrice2 == null || christmasBulbPrice3 == null || candlePrice == null || candlePrice2 == null || candlePrice3 == null || lamettaPrice == null || lamettaPrice2 == null || lamettaPrice3 == null || treePrice == null || holderPrice == null || shipmentPrice == null || totalPrice == null || adress.length < 1) {
            document.getElementById("incomplete").innerHTML = "Eingabe unvollstaendig";
        }
        else {
            document.getElementById("incomplete").innerHTML = "";
        }
    }
}