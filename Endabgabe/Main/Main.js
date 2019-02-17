var endabgabe;
(function (endabgabe) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflakes = [];
    let children1 = [];
    let trees = [];
    let snowballs = [];
    let score = 0;
    let imgData;
    function init() {
        document.getElementById("start").addEventListener("click", canvasDraw);
        document.getElementById("FinalResults").style.display = "none";
        document.getElementById("Highscores").addEventListener("click", highScores);
    }
    function highScores() {
        document.getElementById("div").style.display = "none";
        document.getElementById("FinalResults").style.display = "initial";
        document.getElementById("h3").style.display = "none";
        document.getElementById("restart").style.display = "none";
        document.getElementById("input").style.display = "none";
    }
    function mouseClick(_event) {
        let ball = new endabgabe.Snowball;
        ball.x = _event.clientX;
        ball.y = _event.clientY;
        snowballs.push(ball);
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseClick);
    }
    //function startCountdown(_seconds: number) {
    // var counter: number = _seconds;
    //var interval = setInterval(() => {
    //  counter--;
    //document.getElementById("timer").innerHTML = "Timer: " + counter.toString() + "</br>";
    //if (counter < 0) {
    //  clearInterval(interval);
    // end()
    // counter--;
    //};
    //}, 1000);
    //};
    function canvasDraw(_event) {
        let seconds = 60;
        //startCountdown(seconds);
        let button = document.getElementById("div");
        button.parentNode.removeChild(button);
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseClick);
        endabgabe.crc2 = canvas.getContext("2d");
        hillSide();
        drawSky();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        drawCloud4();
        imgData = endabgabe.crc2.getImageData(0, 0, 600, 800);
        for (let i = 0; i < 300; i++) {
            let flake = new endabgabe.Snowflake();
            flake.x = Math.random() * endabgabe.crc2.canvas.width;
            flake.y = Math.random() * endabgabe.crc2.canvas.height;
            flake.dy = Math.random() * 4;
            snowflakes.push(flake);
        }
        for (let i = 0; i < 7; i++) {
            let child1 = new endabgabe.ChildCarriage();
            child1.state = "down";
            child1.x = 600;
            child1.y = Math.random() * 330 + 300;
            child1.dx = Math.random() * 3 - 5;
            child1.dy = -child1.dx;
            children1.push(child1);
        }
        for (let i = 0; i < 8; i++) {
            let tree = new endabgabe.Tree();
            tree.x = Math.random() * endabgabe.crc2.canvas.width;
            tree.y = Math.random() * endabgabe.crc2.canvas.height;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(0, 600);
            endabgabe.crc2.lineTo(600, 800);
            endabgabe.crc2.lineTo(600, 350);
            endabgabe.crc2.lineTo(0, 600);
            endabgabe.crc2.closePath();
            if (endabgabe.crc2.isPointInPath(tree.x, tree.y)) {
                trees.push(tree);
            }
            else {
                i--;
            }
        }
        update();
    }
    function update() {
        let snowballCount = snowballs.length;
        document.getElementById("Baelle").innerHTML = "Alle Schnebaelle geworfen";
        window.setTimeout(update, 1000 / fps);
        endabgabe.crc2.putImageData(imgData, 0, 0);
        document.getElementById("score").innerHTML = "Treffer:" + score.toString() + "</br>";
        for (let i = 0; i < 300; i++) {
            let flake = snowflakes[i];
            flake.move();
            flake.draw();
        }
        for (let i = 0; i < 7; i++) {
            let child1 = children1[i];
            child1.move();
            child1.draw();
        }
        for (let i = 0; i < 7; i++) {
            let tree = trees[i];
            tree.draw();
        }
        for (let i = 0; i < snowballs.length; i++) {
            if (snowballs[i].radius > 0) {
                snowballs[i].move();
                snowballs[i].draw();
            }
            else {
                if (snowballs[i].radius == 0) {
                    snowballs[i].move();
                    snowballs[i].draw();
                    for (let i2 = 0; i2 < children1.length; i2++) {
                        if (snowballs[i].hit1(children1[i2].x, children1[i2].y) == true && children1[i2].state == "down") {
                            children1[i2].state = "hit";
                            score += (children1[i2].dx * children1[i2].dy) * -10;
                            score = Math.floor(score);
                        }
                        else if (snowballs[i].hit2(children1[i2].x, children1[i2].y) == true && children1[i2].state == "up") {
                            children1[i2].state = "hit";
                            score += (children1[i2].dx * children1[i2].dy) * -10;
                            score = Math.floor(score);
                        }
                    }
                }
            }
        }
        if (snowballs.length < 30) {
            document.getElementById("Baelle").innerHTML = "Schneebaelle:" + snowballCount.toString() + "";
        }
        if (snowballs.length > 30) {
            end();
        }
    }
    function draw() {
        hillSide();
        drawSky();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        drawCloud4();
    }
    function drawSun() {
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(500, 100, 60, 0, 2 * Math.PI);
        endabgabe.crc2.fillStyle = "#FFFF00";
        endabgabe.crc2.fill();
    }
    function hillSide() {
        endabgabe.crc2.fillStyle = "white";
        endabgabe.crc2.strokeStyle = "white";
        endabgabe.crc2.lineWidth = 3;
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(0, 800);
        endabgabe.crc2.lineTo(600, 800);
        endabgabe.crc2.lineTo(600, 350);
        endabgabe.crc2.lineTo(0, 600);
        endabgabe.crc2.closePath();
        endabgabe.crc2.fill();
        endabgabe.crc2.stroke();
    }
    function drawSky() {
        endabgabe.crc2.fillStyle = "#2ECCFA";
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(0, 600);
        endabgabe.crc2.lineTo(0, 0);
        endabgabe.crc2.lineTo(600, 0);
        endabgabe.crc2.lineTo(600, 350);
        endabgabe.crc2.closePath();
        endabgabe.crc2.fill();
        endabgabe.crc2.stroke();
    }
    function drawCloud1() {
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(100, 100, 45, 0, 2 * Math.PI);
        endabgabe.crc2.arc(150, 100, 50, 0, 2 * Math.PI);
        endabgabe.crc2.arc(190, 100, 40, 0, 2 * Math.PI);
        endabgabe.crc2.fillStyle = "#FFFFFF";
        endabgabe.crc2.fill();
    }
    function drawCloud2() {
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(450, 150, 45, 0, 2 * Math.PI);
        endabgabe.crc2.arc(490, 150, 50, 0, 2 * Math.PI);
        endabgabe.crc2.fillStyle = "#FFFFFF";
        endabgabe.crc2.fill();
    }
    function drawCloud3() {
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(150, 250, 45, 0, 2 * Math.PI);
        endabgabe.crc2.arc(190, 250, 50, 0, 2 * Math.PI);
        endabgabe.crc2.arc(240, 250, 50, 0, 2 * Math.PI);
        endabgabe.crc2.fillStyle = "#FFFFFF";
        endabgabe.crc2.fill();
    }
    function drawCloud4() {
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(250, 150, 45, 0, 2 * Math.PI);
        endabgabe.crc2.arc(290, 150, 50, 0, 2 * Math.PI);
        endabgabe.crc2.arc(340, 150, 50, 0, 2 * Math.PI);
        endabgabe.crc2.fillStyle = "#FFFFFF";
        endabgabe.crc2.fill();
    }
    function end() {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("timer").style.display = "none";
        document.getElementById("Baelle").style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("FinalResults").style.display = "initial";
        document.getElementById("results").innerHTML = "Score:" + score.toString();
        document.getElementById("results").setAttribute("value", score.toString());
        document.getElementById("restart").addEventListener("click", refresh);
        return;
    }
    function refresh() {
        window.location.reload();
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Main.js.map