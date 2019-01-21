var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflakes = [];
    let child1 = [];
    let child2 = [];
    let cloud = [];
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        sky();
        hillSide();
        sun();
        trees();
        imgData = Aufgabe11.crc2.getImageData(0, 0, 600, 800);
        for (let i = 0; i < 300; i++) {
            let snow = new Aufgabe11.Snow();
            snow.x = Math.random() * Aufgabe11.crc2.canvas.width;
            snow.y = Math.random() * Aufgabe11.crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "#FFFFFF";
            snowflakes.push(snow);
        }
        for (let i = 0; i < 1; i++) {
            let clouds = new Aufgabe11.Cloud();
            clouds.x = Math.random() * Aufgabe11.crc2.canvas.width;
            clouds.y = Math.random() * Aufgabe11.crc2.canvas.height;
            clouds.dx = Math.random() * 4 - 2;
            clouds.dy = Math.random() * 4 - 2;
            clouds.color = "#FFFFFF";
            cloud.push(clouds);
        }
        for (let i = 0; i < 20; i++) {
            let children1 = new Aufgabe11.ChildCarriage1();
            children1.x = (Math.random() * Aufgabe11.crc2.canvas.width);
            children1.y = (Math.random() * Aufgabe11.crc2.canvas.height);
            children1.dx = Math.random() * 2 - 4;
            children1.dy = Math.random() * 2 + 4;
            child1.push(children1);
        }
        for (let i = 0; i < 20; i++) {
            let children2 = new Aufgabe11.ChildCarriage2();
            children2.x = Math.random() * Aufgabe11.crc2.canvas.width;
            children2.y = Math.random() * Aufgabe11.crc2.canvas.height;
            child2.push(children2);
        }
        update();
    }
    //Himmel
    function sky() {
        Aufgabe11.crc2.fillStyle = "#00BFFF";
        Aufgabe11.crc2.fillRect(0, 0, 600, 800);
        Aufgabe11.crc2.fill();
    }
    //Rodelhang
    function hillSide() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(600, 400);
        Aufgabe11.crc2.lineTo(600, 800);
        Aufgabe11.crc2.lineTo(0, 800);
        Aufgabe11.crc2.lineTo(600, 400);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "#FFFFFF";
        Aufgabe11.crc2.fill();
    }
    //Sonne links oben
    function sun() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.arc(500, 100, 60, 0, 2 * Math.PI);
        Aufgabe11.crc2.fillStyle = "#FFFF00";
        Aufgabe11.crc2.fill();
    }
    //Bäume
    function trees() {
        for (let i = 0; i < 10; i++) {
            let x = 300 + Math.random() * 300;
            let y = 500 + Math.random() * 200;
            drawTrees(x, y);
        }
    }
    function drawTrees(_x, _y) {
        Aufgabe11.crc2.fillStyle = "#8B5A2B";
        Aufgabe11.crc2.fillRect(_x - 5, _y + 50, 10, 15);
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 30, _y + 50);
        Aufgabe11.crc2.lineTo(_x - 30, _y + 50);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "green";
        Aufgabe11.crc2.fill();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < snowflakes.length; i++) {
            let snow = snowflakes[i];
            snow.move();
            snow.draw();
        }
        for (let i = 0; i < cloud.length; i++) {
            let cloudss = cloud[i];
            cloudss.move();
            cloudss.draw();
        }
        for (let i = 0; i < 20; i++) {
            let children1 = child1[i];
            children1.move();
            children1.draw();
        }
        for (let i = 0; i < 20; i++) {
            let children2 = child2[i];
            children2.move();
            children2.draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Aufgabe11.js.map