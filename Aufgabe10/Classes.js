var Aufgabe10;
(function (Aufgabe10) {
    //Schnee
    class Snow {
        move() {
            this.dy = 2;
            this.dx = Math.random() * 4 - 2;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 800) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.lineWidth = .2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.lineWidth = 4;
        }
    }
    Aufgabe10.Snow = Snow;
    //Wolken
    class Cloud {
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 100, 100, 45, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x + 150, 100, 50, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x + 190, 100, 40, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "#FFFFFF";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 450, 150, 45, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x + 490, 150, 50, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "#FFFFFF";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 150, 250, 45, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x + 190, 250, 50, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x + 240, 250, 50, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "#FFFFFF";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 250, 150, 45, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x + 290, 150, 50, 0, 2 * Math.PI);
            Aufgabe10.crc2.arc(this.x + 340, 150, 50, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "#FFFFFF";
            Aufgabe10.crc2.fill();
        }
        move() {
            if (this.y > 100) {
                this.y = 0;
                this.x = -100;
            }
            this.x += Math.random() * 1;
            this.y += 0.1;
            this.draw();
        }
    }
    Aufgabe10.Cloud = Cloud;
    //Kind
    class ChildCarriage1 {
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#54FF9F";
            Aufgabe10.crc2.fillRect(this.x + 500, this.y + 520, 5, 20);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#54FF9F";
            Aufgabe10.crc2.fillRect(this.x + 493, this.y + 525, 20, 5);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.arc(this.x + 503, this.y + 515, 7, 0, 2 * Math.PI);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 510, this.y + 535);
            Aufgabe10.crc2.lineTo(this.x + 490, this.y + 548);
            Aufgabe10.crc2.moveTo(this.x + 505, this.y + 550);
            Aufgabe10.crc2.lineTo(this.x + 505, this.y + 540);
            Aufgabe10.crc2.moveTo(this.x + 500, this.y + 555);
            Aufgabe10.crc2.lineTo(this.x + 500, this.y + 544);
            Aufgabe10.crc2.moveTo(this.x + 510, this.y + 547);
            Aufgabe10.crc2.lineTo(this.x + 490, this.y + 560);
            Aufgabe10.crc2.moveTo(this.x + 490, this.y + 560);
            Aufgabe10.crc2.lineTo(this.x + 480, this.y + 550);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
                this.x = 0;
            }
            this.x += -4;
            this.y += 2;
            this.draw();
        }
    }
    Aufgabe10.ChildCarriage1 = ChildCarriage1;
    //Kind 2
    class ChildCarriage2 {
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#FF3030";
            Aufgabe10.crc2.fillRect(this.x + 250, 750, 10, 20);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#FF3030";
            Aufgabe10.crc2.fillRect(this.x + 245, 750, 20, 5);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.arc(this.x + 255, +745, 7, 0, 2 * Math.PI);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 240, 760);
            Aufgabe10.crc2.lineTo(this.x + 220, 760);
            Aufgabe10.crc2.moveTo(this.x + 235, 760);
            Aufgabe10.crc2.lineTo(this.x + 235, 770);
            Aufgabe10.crc2.moveTo(this.x + 225, 760);
            Aufgabe10.crc2.lineTo(this.x + 225, 770);
            Aufgabe10.crc2.moveTo(this.x + 220, 770);
            Aufgabe10.crc2.lineTo(this.x + 240, 770);
            Aufgabe10.crc2.moveTo(this.x + 240, 760);
            Aufgabe10.crc2.lineTo(this.x + 250, 750);
            Aufgabe10.crc2.moveTo(this.x + 220, 770);
            Aufgabe10.crc2.lineTo(this.x + 215, 760);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "#8B5A2B";
            Aufgabe10.crc2.strokeStyle = "#8B5A2B";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
                this.x = -100;
            }
            this.x += +1;
            this.y += 0.5;
            this.draw();
        }
    }
    Aufgabe10.ChildCarriage2 = ChildCarriage2;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Classes.js.map