namespace aufgabe5extended {
    export interface Decoration {
        name: string;
        price: number;
    }
    export let christmasBulb: Decoration[] = [{ name: "Rot (2 Euro)", price: 2 }, { name: "Gold (3 Euro)", price: 3 }, { name: "Lila (2 Euro)", price: 2 }];
    export let candle: Decoration[] = [{ name: "Kerzen rot (1 Euro)", price: 1 }, { name: "Kerzen gold (3 Euro)", price: 3 }, { name: "Kerzen silber (2 Euro)", price: 2 }];
    export let lametta: Decoration[] = [{ name: "Gold Packung (5 Euro)", price: 5 }, { name: "Silber (3 Euro)", price: 3 }, { name: "Lila (3 Euro)", price: 3 }];
    export let treeTyp: Decoration[] = [{ name: "Nordmannstanne (100 Euro)", price: 100 }, { name: "Plastiktanne (20 Euro)", price: 20 }, { name: "Fichte (50 Euro)", price: 50 }];
    export let holder: Decoration[] = [{ name: "Mittel (Viereckig, 20 Euro)", price: 20 }, { name: "Klein (Rund, 10 Euro)", price: 10 }, { name: "Mittel (Viereckig, 15 Euro)", price: 15 }];
    export let shipment: Decoration[] = [{ name: "DHL (15 Euro)", price: 15 }, { name: "UPS (20 Euro)", price: 20 }, { name: "Hermes (13 Euro)", price: 13 }];
}

