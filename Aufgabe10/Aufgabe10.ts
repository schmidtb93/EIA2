namespace Aufgabe10 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let snowflakes: Snow[] = [];
    let child1: ChildCarriage1[] = [];
    let child2: ChildCarriage2[] = [];
    let cloud: Cloud[] = [];
    let imgData: ImageData;


    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        sky();
        hillSide();
        sun();
        trees();

        imgData = crc2.getImageData(0, 0, 600, 800);

        for (let i: number = 0; i < 300; i++) {
            let snow: Snow = new Snow();
            snow.x = Math.random() * crc2.canvas.width;
            snow.y = Math.random() * crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "#FFFFFF";

            snowflakes.push(snow);
        }
        
            for (let i: number = 0; i < 1; i++) {
            let clouds: Cloud = new Cloud();
            clouds.x = Math.random() * crc2.canvas.width;
            clouds.y = Math.random() * crc2.canvas.height;
            clouds.dx = Math.random() * 4 - 2;
            clouds.dy = Math.random() * 4 - 2;
            clouds.color = "#FFFFFF";

            cloud.push(clouds);
        }

        for (let i: number = 0; i < 20; i++) {
            let children1: ChildCarriage1 = new ChildCarriage1();
            children1.x = (Math.random() * crc2.canvas.width);
            children1.y = (Math.random() * crc2.canvas.height);
            children1.dx = Math.random() * 2 - 4;
            children1.dy = Math.random() * 2 + 4;

            child1.push(children1);
        }

        for (let i: number = 0; i < 20; i++) {
            let children2: ChildCarriage2 = new ChildCarriage2();
            children2.x = Math.random() * crc2.canvas.width;
            children2.y = Math.random() * crc2.canvas.height;
         

            child2.push(children2);
        }


        update();
    }




    //Himmel
    function sky(): void {

        crc2.fillStyle = "#00BFFF";
        crc2.fillRect(0, 0, 600, 800);
        crc2.fill();

    }

    //Rodelhang
    function hillSide(): void {

        crc2.beginPath();
        crc2.moveTo(600, 400);
        crc2.lineTo(600, 800);
        crc2.lineTo(0, 800);
        crc2.lineTo(600, 400);
        crc2.closePath();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    //Sonne links oben
    function sun(): void {

        crc2.beginPath();
        crc2.arc(500, 100, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
    }

    //Bäume
    function trees(): void {
        for (let i: number = 0; i < 10; i++) {
            let x: number = 300 + Math.random() * 300;
            let y: number = 500 + Math.random() * 200;
            drawTrees(x, y);

        }
    }

    function drawTrees(_x: number, _y: number): void {


        crc2.fillStyle = "#8B5A2B";
        crc2.fillRect(_x - 5, _y + 50, 10, 15);
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 30, _y + 50);
        crc2.lineTo(_x - 30, _y + 50);
        crc2.closePath();
        crc2.fillStyle = "green";
        crc2.fill();

    }



    function update(): void {

        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < snowflakes.length; i++) {
            let snow: Snow = snowflakes[i];
            snow.move();
            snow.draw();
        }
        
          for (let i: number = 0; i < cloud.length; i++) {
            let cloudss: Cloud = cloud[i];
            cloudss.move();
            cloudss.draw(); 
        }

        for (let i: number = 0; i < 20; i++) {
            let children1: ChildCarriage1 = child1[i];
            children1.move();
            children1.draw();
        }
        for (let i: number = 0; i < 20; i++) {
            let children2: ChildCarriage2 = child2[i];
            children2.move();
            children2.draw();
        }


    }

}