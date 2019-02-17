namespace endabgabe {
    export class Scenery {
        x: number;
        y: number;

        move(): void { };
        draw(): void { };
    }
    export class Move extends Scenery {
        dx: number;
        dy: number;

        move(): void { };
        draw(): void { };
    }
    export class Snowflake extends Move {
        move(): void {
            this.y += this.dy;
            
            if (this.y > 700) {
                this.y = 0;
            }
            this.draw();
        }

        draw(): void {
           crc2.fillStyle = "#FFFFFF";
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
         export class Tree extends Scenery  {

        draw(): void {
            crc2.lineWidth = 1;
            crc2.fillStyle = "#8B5A2B";
            

            crc2.beginPath();
            crc2.moveTo(this.x - 10, this.y);
            crc2.lineTo(this.x - 10, this.y + 40);
            crc2.lineTo(this.x + 10, this.y + 40);
            crc2.lineTo(this.x + 10, this.y);
            crc2.closePath();
            crc2.fill();
            

            crc2.fillStyle = "#9dd56e";
            

            crc2.beginPath();
            crc2.moveTo(this.x - 22.5, this.y);
            crc2.lineTo(this.x, this.y - 40);
            crc2.lineTo(this.x + 22.5, this.y);
            crc2.closePath();
            crc2.fill();
            
        }
    }   
 export class ChildCarriage extends Move {

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
            crc2.fillStyle = "#7eed21";
            crc2.strokeStyle = "#7eed21";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#7eed21";
            crc2.strokeStyle = "#7eed21";
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

            crc2.strokeStyle = "#8a754a";
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
                    this.x = 600;
                    this.y = Math.random() * 400 + 400;
                    this.state = "down";
                }
                else if (this.x < 0) {
                    this.x = 600;
                    this.y = Math.random() * 400 + 400;
                    this.state = "down";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }

            }
        }

        drawHit(): void {
            crc2.strokeStyle = "#7b7343";
            crc2.fillStyle = "#7b7343";
            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y + 35);
            crc2.lineTo(this.x +10, this.y + 25);
            crc2.closePath();
            crc2.moveTo(this.x - 20, this.y + 35);
            crc2.lineTo(this.x - 20, this.y + 20);
            crc2.closePath();
            crc2.moveTo(this.x - 15, this.y + 35);
            crc2.lineTo(this.x - 15, this.y + 50);
            crc2.closePath();
            crc2.moveTo(this.x +5, this.y + 15);
            crc2.lineTo(this.x +5, this.y + 40);
            crc2.closePath();
            crc2.moveTo(this.x -20, this.y + 50);
            crc2.lineTo(this.x +10, this.y + 40);
            crc2.closePath();
           
          
            crc2.stroke();
            
        }

        drawChild(): void {
            crc2.fillStyle = "#9b65c6";
            crc2.strokeStyle = "#9b65c6";
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
            crc2.lineTo(this.x - 15, this.y + 15);
            crc2.closePath();
            crc2.stroke();
            
             crc2.beginPath();
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x - 15, this.y + 25);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "#7b7343";
            crc2.fillStyle = "#7b7343";
            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y + 35);
            crc2.lineTo(this.x +10, this.y + 25);
            crc2.closePath();
            crc2.moveTo(this.x - 20, this.y + 35);
            crc2.lineTo(this.x - 20, this.y + 20);
            crc2.closePath();
            crc2.moveTo(this.x - 15, this.y + 35);
            crc2.lineTo(this.x - 15, this.y + 50);
            crc2.closePath();
            crc2.moveTo(this.x +5, this.y + 15);
            crc2.lineTo(this.x +5, this.y + 40);
            crc2.closePath();
            crc2.moveTo(this.x -20, this.y + 50);
            crc2.lineTo(this.x +10, this.y + 40);
            crc2.closePath();
           
          
            crc2.stroke();
            
        }
    }
 export class Snowball extends Move {
        radius: number = 30;


        move(): void {
            this.radius -= 1;

        }

        draw(): void {
            if (this.radius > 0) {
                crc2.fillStyle = "white";
                crc2.strokeStyle = "black";
                crc2.beginPath();
                crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
        }
            hit1(_x: number, _y: number): boolean {
            crc2.lineWidth = 30;
             crc2.beginPath();
            crc2.moveTo(_x + 20, _y + 20);
            crc2.lineTo(_x - 20, _y + 20);
            crc2.lineTo(_x - 20, _y - 20);
            crc2.lineTo(_x + 20, _y - 20);
            crc2.closePath();

            if (crc2.isPointInPath(this.x, this.y)) {
                return true;

            }
            else {
                return false;
            }
        }

        hit2(_x: number, _y: number): boolean {
            crc2.lineWidth = 30;
            crc2.beginPath();
            crc2.moveTo(_x + 20, _y + 20);
            crc2.lineTo(_x - 20, _y + 20);
            crc2.lineTo(_x - 20, _y - 20);
            crc2.lineTo(_x + 20, _y - 20);
            crc2.closePath();

            if (crc2.isPointInPath(this.x, this.y)) {
                return true;

            }
            else {
                return false;
            }
        }

 
    }
   }