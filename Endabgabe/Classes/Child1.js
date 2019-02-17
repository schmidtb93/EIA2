var endabgabe;
(function (endabgabe) {
    class Child1 extends endabgabe.Move {
        draw() {
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
        childUp() {
            endabgabe.crc2.fillStyle = "black";
            endabgabe.crc2.strokeStyle = "black";
            endabgabe.crc2.lineWidth = 3;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.fillStyle = "green";
            endabgabe.crc2.strokeStyle = "green";
            endabgabe.crc2.moveTo(this.x, this.y);
            endabgabe.crc2.lineTo(this.x, this.y + 50);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y + 50);
            endabgabe.crc2.lineTo(this.x - 10, this.y + 50);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y + 40);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 50);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y + 15);
            endabgabe.crc2.lineTo(this.x - 10, this.y + 20);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y + 15);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 10);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.strokeStyle = "red";
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 10, this.y + 20);
            endabgabe.crc2.lineTo(this.x - 15, this.y + 30);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.strokeStyle = "#8B5A2B";
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 25, this.y + 30);
            ;
            endabgabe.crc2.lineTo(this.x - 50, this.y + 30);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 25, this.y + 30);
            ;
            endabgabe.crc2.lineTo(this.x + 0, this.y + 30);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 30, this.y + 30);
            ;
            endabgabe.crc2.lineTo(this.x - 30, this.y + 45);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 10, this.y + 30);
            endabgabe.crc2.lineTo(this.x - 10, this.y + 45);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 50, this.y + 45);
            endabgabe.crc2.lineTo(this.x - 25, this.y + 45);
            endabgabe.crc2.closePath();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 50, this.y + 45);
            endabgabe.crc2.lineTo(this.x + 0, this.y + 45);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
        }
        move() {
            if (this.state == "down") {
                if (this.y > endabgabe.crc2.canvas.height) {
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
                if (this.x > endabgabe.crc2.canvas.width) {
                    this.state = "down";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }
            if (this.state == "hit") {
                if (this.y > endabgabe.crc2.canvas.height) {
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
        drawHit() {
            endabgabe.crc2.strokeStyle = "black";
            endabgabe.crc2.fillStyle = "brown";
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 20, this.y + 35);
            endabgabe.crc2.lineTo(this.x - 20, this.y + 40);
            endabgabe.crc2.lineTo(this.x - 20, this.y + 50);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 50);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 30);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
        }
        drawChild() {
            endabgabe.crc2.fillStyle = "black";
            endabgabe.crc2.strokeStyle = "black";
            endabgabe.crc2.lineWidth = 3;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y);
            endabgabe.crc2.lineTo(this.x, this.y + 30);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y + 30);
            endabgabe.crc2.lineTo(this.x - 20, this.y + 35);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y + 10);
            endabgabe.crc2.lineTo(this.x - 15, this.y + 13);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.strokeStyle = "black";
            endabgabe.crc2.fillStyle = "brown";
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 20, this.y + 35);
            endabgabe.crc2.lineTo(this.x - 20, this.y + 40);
            endabgabe.crc2.lineTo(this.x - 20, this.y + 50);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 50);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 30);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
        }
    }
    endabgabe.Child1 = Child1;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Child1.js.map