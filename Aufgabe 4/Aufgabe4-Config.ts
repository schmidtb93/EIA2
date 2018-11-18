namespace aufgabe4 {

    window.addEventListener("load", init);

    let totalPrice: number = 0;
    let christmasbulbPrice: number = 0;
    let candlePrice: number = 0;
    let lamettaPrice: number = 0;
    let treePrice: number = 0;
    let holderPrice: number = 0;
    let shipmentPrice: number = 0;
    let adress: string = "";

    function init(): void {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
        document.getElementById("verify").addEventListener("click", verify);
    }
    //Funktion von Prof. Dell'Oro-Friedl und Aufgabe 13 EIA1

    function fillFieldset(): void {
        let node: HTMLElement = document.getElementsByTagName("fieldset")[0];
        let childHTML: string = "";
        childHTML += "<h2>Weihnachtskugeln:</h2>";
        childHTML += "<select id=christmasBulb name=ChristmasBulbs>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < christmasBulb.length; i++) {
            childHTML += "<option value=";
            childHTML += "christmasBulb" + i;
            childHTML += ">";
            childHTML += christmasBulb[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Kerzen:</h2>";
        childHTML += "<select id=candle name=candles>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < candle.length; i++) {
            childHTML += "<option value=";
            childHTML += "candle" + i;
            childHTML += ">";
            childHTML += candle[i].name;
            childHTML += "</option>";
        }
        childHTML += "</select>";
        childHTML += "<h2>Lametta:</h2>";
        childHTML += "<select id=lametta name=lamettas>";
        childHTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < lametta.length; i++) {
            childHTML += "<option value=";
            childHTML += "lametta" + i;
            childHTML += ">";
            childHTML += lametta[i].name;
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
        childHTML += "<h2>halterung:</h2>";
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
        childHTML += "<select id=shipment name=Shipment>";
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
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.id == "christmasBulb") {
            let convertedString: string = target.value.substr(13);
            let index: number = Number(convertedString);
            let childHTML: string = christmasBulb[index].name;
            christmasbulbPrice = christmasBulb[index].price;
            let node: HTMLElement = document.getElementById("christmasBulbColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "candle") {
            let convertedString: string = target.value.substr(6);
            let index: number = Number(convertedString);
            let childHTML: string = candle[index].name;
            candlePrice = candle[index].price;
            let node: HTMLElement = document.getElementById("candleColor");
            node.innerHTML = childHTML;
        }
        if (target.id == "lametta") {
            let convertedString: string = target.value.substr(7);
            let index: number = Number(convertedString);
            let childHTML: string = lametta[index].name;
            lamettaPrice = lametta[index].price;
            let node: HTMLElement = document.getElementById("lamettaColor");
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
            let convertedString: string = target.value.substr(8);
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
        let childHTML: string;
        let node: HTMLElement = document.getElementById("price");
        childHTML = " ";
        childHTML += (totalPrice = christmasbulbPrice + candlePrice + lamettaPrice + treePrice + holderPrice + shipmentPrice);
        childHTML += " Euro";
        node.innerHTML = childHTML;
    }
    function verify(): void {
        if (christmasbulbPrice == null || candlePrice == null || lamettaPrice == null || treePrice == null || holderPrice == null || shipmentPrice == null || totalPrice == null || adress.length < 1) {
            document.getElementById("incomplete").innerHTML = "Eingabe unvollstaendig";
        }
        else {
            document.getElementById("incomplete").innerHTML = "";
        }
    }
}


