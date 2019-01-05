var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let crc;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        drawCloud4();
        drawChild();
        drawCarriage();
        for (let i = 0; i < 8; i++) {
            let x = 300 + Math.random() * 300;
            let y = 500 + Math.random() * 200;
            drawTree(x, y, "#228B22");
        }
        for (let i = 0; i <= 246; i++) {
            let x = Math.random() * 600;
            let y = Math.random() * 800;
            drawSnow(x, y);
        }
    }
    function drawSky() {
        crc.fillStyle = "#00BFFF";
        crc.fillRect(0, 0, 600, 800);
        crc.fill();
    }
    function drawHill() {
        crc.beginPath();
        crc.moveTo(600, 400);
        crc.lineTo(600, 800);
        crc.lineTo(0, 800);
        crc.lineTo(600, 400);
        crc.closePath();
        crc.fillStyle = "#FFFFFF";
        crc.fill();
    }
    function drawSun() {
        crc.beginPath();
        crc.arc(500, 100, 60, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFF00";
        crc.fill();
    }
    function drawCloud1() {
        crc.beginPath();
        crc.arc(100, 100, 45, 0, 2 * Math.PI);
        crc.arc(150, 100, 50, 0, 2 * Math.PI);
        crc.arc(190, 100, 40, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
    }
    function drawCloud2() {
        crc.beginPath();
        crc.arc(450, 150, 45, 0, 2 * Math.PI);
        crc.arc(490, 150, 50, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
    }
    function drawCloud3() {
        crc.beginPath();
        crc.arc(150, 250, 45, 0, 2 * Math.PI);
        crc.arc(190, 250, 50, 0, 2 * Math.PI);
        crc.arc(240, 250, 50, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
    }
    function drawCloud4() {
        crc.beginPath();
        crc.arc(250, 150, 45, 0, 2 * Math.PI);
        crc.arc(290, 150, 50, 0, 2 * Math.PI);
        crc.arc(340, 150, 50, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
    }
    function drawTree(_x, _y, _color) {
        crc.fillStyle = "#8B5A2B";
        crc.fillRect(_x - 5, _y + 50, 10, 15);
        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.lineTo(_x + 30, _y + 50);
        crc.lineTo(_x - 30, _y + 50);
        crc.closePath();
        crc.fillStyle = _color;
        crc.fill();
    }
    function drawSnow(_x, _y) {
        crc.beginPath();
        crc.arc(_x, _y, 4, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFAFA";
        crc.fill();
        crc.lineWidth = .3;
        crc.strokeStyle = "#FFFAFA";
        crc.stroke();
    }
    function drawChild() {
        crc.beginPath();
        crc.fillStyle = "#FF3030";
        crc.fillRect(250, 750, 10, 20);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#FF3030";
        crc.fillRect(245, 750, 20, 5);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(255, 745, 7, 0, 2 * Math.PI);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#54FF9F";
        crc.fillRect(500, 520, 5, 20);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#54FF9F";
        crc.fillRect(493, 525, 20, 5);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(503, 515, 7, 0, 2 * Math.PI);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#E066FF";
        crc.fillRect(435, 720, 5, 25);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#E066FF";
        crc.fillRect(425, 725, 25, 5);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(437, 715, 6, 0, 2 * Math.PI);
        crc.fill();
    }
    function drawCarriage() {
        crc.beginPath();
        crc.moveTo(510, 535);
        crc.lineTo(490, 548);
        crc.moveTo(505, 550);
        crc.lineTo(505, 540);
        crc.moveTo(500, 555);
        crc.lineTo(500, 544);
        crc.moveTo(510, 547);
        crc.lineTo(490, 560);
        crc.moveTo(490, 560);
        crc.lineTo(480, 550);
        crc.closePath();
        crc.fillStyle = "#8B4513";
        crc.strokeStyle = "#8B4513";
        crc.stroke();
        crc.fill();
        crc.beginPath();
        crc.moveTo(240, 760);
        crc.lineTo(220, 760);
        crc.moveTo(235, 760);
        crc.lineTo(235, 770);
        crc.moveTo(225, 760);
        crc.lineTo(225, 770);
        crc.moveTo(220, 770);
        crc.lineTo(240, 770);
        crc.moveTo(240, 760);
        crc.lineTo(250, 750);
        crc.moveTo(220, 770);
        crc.lineTo(215, 760);
        crc.closePath();
        crc.fillStyle = "#8B5A2B";
        crc.strokeStyle = "#8B5A2B";
        crc.stroke();
        crc.fill();
        crc.beginPath();
        crc.moveTo(450, 735);
        crc.lineTo(430, 748);
        crc.moveTo(445, 750);
        crc.lineTo(445, 740);
        crc.moveTo(440, 755);
        crc.lineTo(440, 744);
        crc.moveTo(450, 747);
        crc.lineTo(430, 760);
        crc.moveTo(430, 760);
        crc.lineTo(420, 750);
        crc.closePath();
        crc.fillStyle = "#000000";
        crc.strokeStyle = "#000000";
        crc.stroke();
        crc.fill();
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Aufgabe9.js.map