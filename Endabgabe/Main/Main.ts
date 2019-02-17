namespace endabgabe {

    window.addEventListener("load", init);

    function init(): void {
        document.getElementById("start").addEventListener("click", canvasDraw);
        document.getElementById("FinalResults").style.display = "none";
        document.getElementById("Highscores").addEventListener("click", lowScores);
    }
    
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let snowflakes: Scenery[] = [];
    let children1: ChildCarriage[] = [];
    let trees: Scenery[] = [];
    let snowballs: Snowball[] = [];
    let score: number = 0;
    let imgData: ImageData;


    function lowScores(): void {
        document.getElementById("div").style.display = "none";
        document.getElementById("FinalResults").style.display = "initial";
        document.getElementById("h3").style.display = "none";
        document.getElementById("restart").style.display = "none";
        document.getElementById("input").style.display = "none";
    }
    function mouseClick(_event: MouseEvent): void {
        let ball: Snowball = new Snowball;
        ball.x = _event.clientX;
        ball.y = _event.clientY;
        snowballs.push(ball);
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseClick);
    }


    function Countdown(_seconds: number) {
        var counter: number = _seconds;
        var interval = setInterval(() => {
            counter--;
            document.getElementById("Counter").innerHTML = "Verbleibende Zeit: " + counter.toString() + "";
            if (counter < 0) {
                clearInterval(interval);
                endscreen()
                counter--;
            };
        }, 1000);
    };


    function canvasDraw(_event: Event): void {
        let seconds: number = 60;
        Countdown(seconds);
        let button: HTMLElement = document.getElementById("div");
        button.parentNode.removeChild(button);
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseClick);
        crc2 = canvas.getContext("2d");

        hillSide();
        drawSky();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        drawCloud4();

        imgData = crc2.getImageData(0, 0, 600, 800);

        for (let i: number = 0; i < 300; i++) {
            let flake: Move = new Snow();
            flake.x = Math.random() * crc2.canvas.width;
            flake.y = Math.random() * crc2.canvas.height;
            flake.dy = Math.random() * 4;
            snowflakes.push(flake);
        }

        for (let i: number = 0; i < 7; i++) {
            let child1: ChildCarriage = new ChildCarriage();
            child1.state = "down"
            child1.x = 600;
            child1.y = Math.random() * 330 + 300;
            child1.dx = Math.random() * 3 - 5;
            child1.dy = - child1.dx;
            children1.push(child1);
        }

        for (let i: number = 0; i < 8; i++) {
            let tree: Scenery = new Tree();
            tree.x = Math.random() * crc2.canvas.width;
            tree.y = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(0, 600);
            crc2.lineTo(600, 800);
            crc2.lineTo(600, 350);
            crc2.lineTo(0, 600);
            crc2.closePath()

            if (crc2.isPointInPath(tree.x, tree.y)) {
                trees.push(tree);
            }
            else {
                i--;
            }
        }
        update();
    }

    function update(): void {

        let snowballCount: number = snowballs.length;
        document.getElementById("Baelle").innerHTML = "Alle Schnebaelle geworfen";

        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);
        document.getElementById("score").innerHTML = "Maluspunkte:" + score.toString() + "";


        for (let i: number = 0; i < 300; i++) {
            let flake: Scenery = snowflakes[i];
            flake.move();
            flake.draw();
        }

        for (let i: number = 0; i < 7; i++) {
            let child1: Scenery = children1[i];
            child1.move();
            child1.draw();
        }

        for (let i: number = 0; i < 7; i++) {
            let tree: Tree = trees[i];
            tree.draw();
        }
        for (let i: number = 0; i < snowballs.length; i++) {
            if (snowballs[i].radius > 0) {
                snowballs[i].move();
                snowballs[i].draw();
            }
            else {
                if (snowballs[i].radius == 0) {
                    snowballs[i].move();
                    snowballs[i].draw();
                    for (let i2: number = 0; i2 < children1.length; i2++) {

                        if (snowballs[i].hit1(children1[i2].x, children1[i2].y) == true && children1[i2].state == "down") {
                            children1[i2].state = "hit";
                            score += (children1[i2].dx * children1[i2].dy);
                            score = Math.floor(score);

                        }
                        else if (snowballs[i].hit2(children1[i2].x, children1[i2].y) == true && children1[i2].state == "up") {
                            children1[i2].state = "hit";
                            score += (children1[i2].dx * children1[i2].dy);
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
            endscreen();

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

        crc2.beginPath();
        crc2.arc(500, 100, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
    }

    function hillSide() {
        crc2.fillStyle = "white";
        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;

        crc2.beginPath();
        crc2.moveTo(0, 800);
        crc2.lineTo(600, 800);
        crc2.lineTo(600, 350);
        crc2.lineTo(0, 600);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawSky() {
        crc2.fillStyle = "#2ECCFA";

        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(0, 0);
        crc2.lineTo(600, 0);
        crc2.lineTo(600, 350);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawCloud1(): void {

        crc2.beginPath();
        crc2.arc(100, 100, 45, 0, 2 * Math.PI);
        crc2.arc(150, 100, 50, 0, 2 * Math.PI);
        crc2.arc(190, 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function drawCloud2(): void {

        crc2.beginPath();
        crc2.arc(450, 150, 45, 0, 2 * Math.PI);
        crc2.arc(490, 150, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function drawCloud3(): void {

        crc2.beginPath();
        crc2.arc(150, 250, 45, 0, 2 * Math.PI);
        crc2.arc(190, 250, 50, 0, 2 * Math.PI);
        crc2.arc(240, 250, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function drawCloud4(): void {

        crc2.beginPath();
        crc2.arc(250, 150, 45, 0, 2 * Math.PI);
        crc2.arc(290, 150, 50, 0, 2 * Math.PI);
        crc2.arc(340, 150, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function endscreen(): void {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("Counter").style.display = "none";
        document.getElementById("Baelle").style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("FinalResults").style.display = "initial";
        document.getElementById("results").innerHTML = "Score:" + score.toString();
        document.getElementById("results").setAttribute("value", score.toString());
        document.getElementById("restart").addEventListener("click", refresh);
        return;
    }

    function refresh(): void {
        window.location.reload();
    }
}