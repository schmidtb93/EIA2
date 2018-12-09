namespace Aufgabe7 {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);



    //let address: string = "localhost:8100/";
    let treePrice: number = 0;
    let ballPrice: number = 0;
    let candlePrice: number = 0;
    let lamettaPrice: number = 0;
    let holderPrice: number = 0;
    let shipmentPrice: number = 0;
    let strasse1: string = "";
    let hausnummer1: string = "";

    function writeHTML() {

        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;

        childNodeHTML = "<h3>Baum</h3>";
        childNodeHTML += "<select name='Baum' id='tree'>";
        for (let i: number = 0; i < treeTyp.length; i++) {
            childNodeHTML += "<option value='" + i + treeTyp[i].name + "'>" + treeTyp[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Halterung</h3>";
        childNodeHTML += "<select name='Halterung' id='holder'>";
        for (let i: number = 0; i < holder.length; i++) {
            childNodeHTML += "<option value='" + i + holder[i].name + "'>" + holder[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Lieferant' id='shipment'>";
        for (let i: number = 0; i < shipment.length; i++) {
            childNodeHTML += "<option value='" + i + shipment[i].name + "'>" + shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='strasse' type='text' name='Text' placeholder='Strasse' required/>"
        childNodeHTML += "<input id='hausnummer' type='text' name='Text' placeholder='Hausnummer' required/>"
        childNodeHTML += "<br>";












        childNodeHTML += "<h3>Weihnachtskugeln</h3>";

        childNodeHTML += "<h4>Bitte Anzahl der Artikel eingeben:</h4>";
        childNodeHTML += "<br>";
        for (let i: number = 0; i < christmasBulb.length; i++) {
            childNodeHTML += christmasBulb[i].name;
            childNodeHTML += " <input type='text' id='numBulbs" + i + "' name='Weihnachtskugeln' title='" + christmasBulb[i].name + "' price='" + christmasBulb[i].price + "'/>";
            childNodeHTML += "<br>";
            continue
        }
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<h4>Bitte Anzahl der Artikel eingeben:</h4>";
        childNodeHTML += "<br>";
        for (let i: number = 0; i < lametta.length; i++) {
            childNodeHTML += lametta[i].name;
            childNodeHTML += " <input type='text' id='numLametta" + i + "' name='Lametta' title='" + lametta[i].name + "' price=" + lametta[i].price + " />";
            childNodeHTML += "<br>";
            continue
        }
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<h4>Bitte Anzahl der Artikel eingeben:</h4>";
        childNodeHTML += "<br>";
        for (let i: number = 0; i < candle.length; i++) {
            childNodeHTML += candle[i].name;
            childNodeHTML += " <input type='text' id='numrCandles" + i + "' name='Kerzen' title='" + candle[i].name + "' price='" + candle[i].price + "' />";
            childNodeHTML += "<br>";
            continue
        }



        node.innerHTML += childNodeHTML
    }

    function init(_event: Event) {
        let fieldset: HTMLElement = document.getElementById("fieldset")
        fieldset.addEventListener("change", handleChange);

        document.getElementById("verify").addEventListener("click", verify);
        document.getElementById("lul").addEventListener("click", sendRequestWithCustomData);
    }

    function handleChange(_event: Event) {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log(target.id);
        let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input")
        let node: HTMLElement = document.getElementById("artikel");
        node.innerHTML = "";

        for (let i: number = 0; i < articles.length; i++) {
            let article: HTMLInputElement = articles[i];
            let value: number = parseInt(article.value)
            if (article.name == "Weihnachtskugeln" || article.name == "Lametta" || article.name == "Kerzen") {
                let node: HTMLElement = document.getElementById("artikel");
                let DOMValue: string = target.value;
                target.setAttribute("value", DOMValue)
                let value: number = parseInt(article.getAttribute("value"))
                let name: string = article.getAttribute("title");
                let price: string = article.getAttribute("price");
                let childNodeHTML: string;
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
            let node: HTMLElement = document.getElementById("baum");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            treePrice = treeTyp[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "holder") {
            let node: HTMLElement = document.getElementById("halterung");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            holderPrice = holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "shipment") {
            let node: HTMLElement = document.getElementById("lieferant");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            shipmentPrice = shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + value.substr(1) + ">";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "strasse") {
            let node: HTMLElement = document.getElementById("strasse1");
            let strasse1 = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + strasse1.substr(1) + ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "hausnummer") {
            let node: HTMLElement = document.getElementById("hausnummer1");
            let hausnummer1 = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a name=" + target.name + " value=" + hausnummer1.substr(1) + ">";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }





        price()
    }

    function price() {
        let checkout: HTMLElement = document.getElementById("artikel");
        let price: number = 0;
        console.log(checkout.childNodes);
        for (let i: number = 0; i < checkout.childNodes.length; i++) {
            let article: any = checkout.childNodes[i];
            let articlePrice: number = Number(article.getAttribute("price"));
            price += articlePrice;
            console.log(articlePrice);
        }
        let HTML: string;
        let node: HTMLElement = document.getElementById("preis");
        HTML = " ";
        HTML += (treePrice + holderPrice + shipmentPrice + price);
        HTML += " Euro";
        node.innerHTML = HTML
    }
    function verify() : void {
        if (treePrice == null || holderPrice == null || shipmentPrice == null || strasse1.length < 1  || hausnummer1.length < 1)
        { document.getElementById("incomplete").innerHTML = "Fehlende Angaben!"; }
        else {
            document.getElementById("incomplete").innerHTML = "";
        }
    }
    function sendRequestWithCustomData(): void {
        let num: number = document.getElementsByClassName("checkout").length;
        let HTMLString: string = "";
        //console.log(num);
        for (let i: number = 0; i < num; i++) {

            let article: HTMLElement = <HTMLElement>document.getElementsByClassName("checkout")[i];
            //console.log(article.childElementCount);
            if (article.childElementCount > 0) {
                for (let i: number = 0; i < article.childElementCount; i++) {
                    HTMLString += article.children[i].getAttribute("name") + ":";
                    if (article.children[i].getAttribute("name") == "Weihnachtskugeln" || article.children[i].getAttribute("name") == "Kerzen" || article.children[i].getAttribute("name") == "Lametta") {
                        HTMLString += article.children[i].getAttribute("hiddenName");
                    }
                    HTMLString += article.children[i].getAttribute("value");
                    HTMLString += "&";
                }
            }
            else {
                continue;
            }
        }
        console.log("HTMLString:" + HTMLString);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        alert(HTMLString);

        xhr.open("GET", address + "?" + HTMLString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
}