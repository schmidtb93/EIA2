namespace Aufgabe10 {
    //Schnee
    export class Snow {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        move(): void {

            this.dy = 2;
            this.dx = Math.random() * 4 - 2;

            this.x += this.dx;
            this.y += this.dy;

            if (this.y > 800) {
                this.y = 0;
            }
            this.draw();
        }


        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = .2;

            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);

            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.lineWidth = 4;

        }
    }
    //Wolken
    export class Cloud {
        x: number;
        y: number;
        dx: number;
        dy: number;
        _x: number;
        _y: number;
        color: string;

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x + 100, 100, 45, 0, 2 * Math.PI);
            crc2.arc(this.x + 150, 100, 50, 0, 2 * Math.PI);
            crc2.arc(this.x + 190, 100, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 450, 150, 45, 0, 2 * Math.PI);
            crc2.arc(this.x + 490, 150, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 150, 250, 45, 0, 2 * Math.PI);
            crc2.arc(this.x + 190, 250, 50, 0, 2 * Math.PI);
            crc2.arc(this.x + 240, 250, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 250, 150, 45, 0, 2 * Math.PI);
            crc2.arc(this.x + 290, 150, 50, 0, 2 * Math.PI);
            crc2.arc(this.x + 340, 150, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }
        move(): void {

            if (this.y > 100) {
                this.y = 0;
                this.x = -100;
            }

            this.x += Math.random() * 1;
            this.y += 0.1;
            this.draw();


        }

    }
    //Kind
    export class ChildCarriage1 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;



        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = "#54FF9F";
            crc2.fillRect(this.x + 500, this.y + 520, 5, 20);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#54FF9F";
            crc2.fillRect(this.x + 493, this.y + 525, 20, 5);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 503, this.y + 515, 7, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 510, this.y + 535);
            crc2.lineTo(this.x + 490, this.y + 548);
            crc2.moveTo(this.x + 505, this.y + 550);
            crc2.lineTo(this.x + 505, this.y + 540);
            crc2.moveTo(this.x + 500, this.y + 555);
            crc2.lineTo(this.x + 500, this.y + 544);
            crc2.moveTo(this.x + 510, this.y + 547);
            crc2.lineTo(this.x + 490, this.y + 560);
            crc2.moveTo(this.x + 490, this.y + 560);
            crc2.lineTo(this.x + 480, this.y + 550);
            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();






        }

        move(): void {

            if (this.y > 600) {
                this.y = 0;
                this.x = 0;
            }

            this.x += - 4;
            this.y += 2;
            this.draw();

        }



    }
    //Kind 2
    export class ChildCarriage2 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;


        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = "#FF3030";
            crc2.fillRect(this.x + 250, 750, 10, 20);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#FF3030";
            crc2.fillRect(this.x + 245, 750, 20, 5);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 255, + 745, 7, 0, 2 * Math.PI);
            crc2.fill();


            crc2.beginPath();
            crc2.moveTo(this.x + 240, 760);
            crc2.lineTo(this.x + 220, 760);
            crc2.moveTo(this.x + 235, 760);
            crc2.lineTo(this.x + 235, 770);
            crc2.moveTo(this.x + 225, 760);
            crc2.lineTo(this.x + 225, 770);
            crc2.moveTo(this.x + 220, 770);
            crc2.lineTo(this.x + 240, 770);
            crc2.moveTo(this.x + 240, 760);
            crc2.lineTo(this.x + 250, 750);
            crc2.moveTo(this.x + 220, 770);
            crc2.lineTo(this.x + 215, 760);
            crc2.closePath();
            crc2.fillStyle = "#8B5A2B";
            crc2.strokeStyle = "#8B5A2B";
            crc2.stroke();
            crc2.fill();


        }



        move(): void {

            if (this.y > 600) {
                this.y = 0;
                this.x = -100;
            }

            this.x += + 1;
            this.y += 0.5;
            this.draw();


        }


    }

}