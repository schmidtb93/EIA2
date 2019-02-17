namespace endabgabe {
    export class Snowball extends Move {
        radius: number = 15;


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

        hitDetection2(_x: number, _y: number): boolean {
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

        hitDetection(_x: number, _y: number): boolean {
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