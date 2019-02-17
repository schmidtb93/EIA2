namespace endabgabe {
    export class Child1 extends Move {

        state: string;

        draw(): void {
            if (this.state == "down") {
                this.drawChild();
            }
               if (this.state == "up") {
                this.childUp();
            }
            if (this.state == "hit") {
                this.drawHit();
            }
         


        }

        childUp(): void {
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "green";
            crc2.strokeStyle = "green";
            crc2.moveTo(this.x, this.y);
           
            crc2.lineTo(this.x, this.y + 50);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 50);
            crc2.lineTo(this.x - 10, this.y + 50);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 40);
            crc2.lineTo(this.x + 10, this.y + 50);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 15);
            crc2.lineTo(this.x - 10, this.y + 20);
            crc2.closePath();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 15);
            crc2.lineTo(this.x + 10, this.y + 10);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "red";
            crc2.beginPath();
            crc2.moveTo(this.x - 10, this.y + 20);
            
            crc2.lineTo(this.x - 15,this.y + 30);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "#8B5A2B";
            crc2.beginPath();
            crc2.moveTo(this.x - 25,this.y + 30);;
            crc2.lineTo(this.x - 50, this.y + 30);
            crc2.closePath();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.moveTo(this.x - 25,this.y + 30);;
            crc2.lineTo(this.x + 0, this.y + 30);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 30, this.y + 30);;
            crc2.lineTo(this.x - 30, this.y + 45);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 10, this.y + 30);
            crc2.lineTo(this.x - 10, this.y + 45);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 50, this.y + 45);
            crc2.lineTo(this.x - 25, this.y + 45);
            crc2.closePath();
            
             crc2.beginPath();
            crc2.moveTo(this.x - 50, this.y + 45);
            crc2.lineTo(this.x + 0, this.y + 45);
            crc2.closePath();

            crc2.stroke();
        }
       move(): void {
            if (this.state == "down") {

                if (this.y > crc2.canvas.height) {
                    this.state = "up";
                }
                else if (this.x < 0) {
                    this.state = "up";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }

            if (this.state == "up") {
                if (this.x > crc2.canvas.width) {
                    this.state = "down";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }

            if (this.state == "hit") {
                if (this.y > crc2.canvas.height) {
                    this.x = 360;
                    this.y = Math.random() * 330 + 400;
                    this.state = "down";
                }
                else if (this.x < 0) {
                    this.x = 360;
                    this.y = Math.random() * 330 + 400;
                    this.state = "down";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }

            }
        }

        drawHit(): void {
            crc2.strokeStyle = "black";
            crc2.fillStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y + 35);
            crc2.lineTo(this.x - 20, this.y + 40);

            crc2.lineTo(this.x - 20, this.y + 50);

            crc2.lineTo(this.x + 10, this.y + 50);
            crc2.lineTo(this.x + 10, this.y + 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        drawChild(): void {
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 30);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x - 20, this.y + 35);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x - 15, this.y + 13);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "black";
            crc2.fillStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y + 35);
            crc2.lineTo(this.x - 20, this.y + 40);

            crc2.lineTo(this.x - 20, this.y + 50);

            crc2.lineTo(this.x + 10, this.y + 50);
            crc2.lineTo(this.x + 10, this.y + 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}