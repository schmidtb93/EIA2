namespace aufgabe4 {

    export interface Decoration {
        name: string;
        price: number;
    }
    export let christmasBulb: Decoration[] = [{ name: "Rot 4 Stueck (5 Euro)", price: 5 }, { name: "Gold 6 Stueck (10 Euro)", price: 10 }, { name: "Lila 4 Stueck(5 Euro)", price: 5 }];
    export let candle: Decoration[] = [{ name: "Kerzen rot 10 Stueck (15 Euro)", price: 15 }, { name: "Kerzen gold 12 Stueck (20 Euro)", price: 20 }, { name: "Kerzen silber 12 Stueck (20 Euro)", price: 20 }];
    export let lametta: Decoration[] = [{ name: "Gold 2 Packungen (5 Euro)", price: 5 }, { name: "Silber 1 Packung (3 Euro)", price: 3 }, { name: "Lila 3 Packung (9 Euro)", price: 9}];
    export let treeTyp: Decoration[] = [{ name: "Nordmannstanne (100 Euro)", price: 100 }, { name: "Plastiktanne (20 Euro)", price: 20 }, { name: "Fichte (50 Euro)", price: 50 }];
    export let holder: Decoration[] = [{ name: "Keine", price: 0 }, { name: "Klein (Rund, 10 Euro)", price: 10 }, { name: "Mittel (Viereckig, 15 Euro)", price: 15 }];
    export let shipment: Decoration[] = [{ name: "DHL (15 Euro)", price: 15 }, { name: "UPS (20 Euro)", price: 20 }, { name: "Hermes (13 Euro)", price: 13 }];
}