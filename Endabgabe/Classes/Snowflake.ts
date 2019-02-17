namespace endabgabe {
    
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
}