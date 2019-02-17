var endabgabe;
(function (endabgabe) {
    class Scenery {
        move() { }
        ;
        draw() { }
        ;
    }
    endabgabe.Scenery = Scenery;
    class Move extends Scenery {
        move() { }
        ;
        draw() { }
        ;
    }
    endabgabe.Move = Move;
    class Snow extends Move {
        move() {
            this.y += this.dy;
            if (this.y > 700) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            endabgabe.crc2.fillStyle = "#FFFFFF";
            endabgabe.crc2.strokeStyle = "#000000";
            endabgabe.crc2.lineWidth = .2;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
            endabgabe.crc2.closePath();
            endabgabe.crc2.fill();
            endabgabe.crc2.stroke();
            endabgabe.crc2.lineWidth = 4;
        }
    }
    endabgabe.Snow = Snow;
    class Tree extends Scenery {
        draw() {
            endabgabe.crc2.lineWidth = 1;
            endabgabe.crc2.fillStyle = "#8B5A2B";
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 10, this.y);
            endabgabe.crc2.lineTo(this.x - 10, this.y + 40);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 40);
            endabgabe.crc2.lineTo(this.x + 10, this.y);
            endabgabe.crc2.closePath();
            endabgabe.crc2.fill();
            endabgabe.crc2.fillStyle = "#9dd56e";
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 22.5, this.y);
            endabgabe.crc2.lineTo(this.x, this.y - 40);
            endabgabe.crc2.lineTo(this.x + 22.5, this.y);
            endabgabe.crc2.closePath();
            endabgabe.crc2.fill();
        }
    }
    endabgabe.Tree = Tree;
    class ChildCarriage extends Move {
        draw() {
            if (this.state == "down") {
                this.drawChild1();
            }
            if (this.state == "up") {
                this.drawChild2();
            }
            if (this.state == "hit") {
                this.drawHit();
            }
        }
        drawChild2() {
            endabgabe.crc2.fillStyle = "#7eed21";
            endabgabe.crc2.strokeStyle = "#7eed21";
            endabgabe.crc2.lineWidth = 3;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.fillStyle = "#7eed21";
            endabgabe.crc2.strokeStyle = "#7eed21";
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
            endabgabe.crc2.strokeStyle = "#8a754a";
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
        drawHit() {
            endabgabe.crc2.strokeStyle = "#7b7343";
            endabgabe.crc2.fillStyle = "#7b7343";
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 20, this.y + 35);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 25);
            endabgabe.crc2.closePath();
            endabgabe.crc2.moveTo(this.x - 20, this.y + 35);
            endabgabe.crc2.lineTo(this.x - 20, this.y + 20);
            endabgabe.crc2.closePath();
            endabgabe.crc2.moveTo(this.x - 15, this.y + 35);
            endabgabe.crc2.lineTo(this.x - 15, this.y + 50);
            endabgabe.crc2.closePath();
            endabgabe.crc2.moveTo(this.x + 5, this.y + 15);
            endabgabe.crc2.lineTo(this.x + 5, this.y + 40);
            endabgabe.crc2.closePath();
            endabgabe.crc2.moveTo(this.x - 20, this.y + 50);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 40);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
        }
        drawChild1() {
            endabgabe.crc2.fillStyle = "#9b65c6";
            endabgabe.crc2.strokeStyle = "#9b65c6";
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
            endabgabe.crc2.strokeStyle = "#7b7343";
            endabgabe.crc2.fillStyle = "#7b7343";
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 20, this.y + 35);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 25);
            endabgabe.crc2.closePath();
            endabgabe.crc2.moveTo(this.x - 20, this.y + 35);
            endabgabe.crc2.lineTo(this.x - 20, this.y + 20);
            endabgabe.crc2.closePath();
            endabgabe.crc2.moveTo(this.x - 15, this.y + 35);
            endabgabe.crc2.lineTo(this.x - 15, this.y + 50);
            endabgabe.crc2.closePath();
            endabgabe.crc2.moveTo(this.x + 5, this.y + 15);
            endabgabe.crc2.lineTo(this.x + 5, this.y + 40);
            endabgabe.crc2.closePath();
            endabgabe.crc2.moveTo(this.x - 20, this.y + 50);
            endabgabe.crc2.lineTo(this.x + 10, this.y + 40);
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
        }
    }
    endabgabe.ChildCarriage = ChildCarriage;
    class Snowball extends Move {
        constructor(...args) {
            super(...args);
            this.radius = 50;
        }
        move() {
            this.radius -= 1;
        }
        draw() {
            if (this.radius > 0) {
                endabgabe.crc2.fillStyle = "white";
                endabgabe.crc2.strokeStyle = "black";
                endabgabe.crc2.beginPath();
                endabgabe.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                endabgabe.crc2.closePath();
                endabgabe.crc2.stroke();
                endabgabe.crc2.fill();
            }
        }
        hit1(_x, _y) {
            endabgabe.crc2.lineWidth = 30;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(_x + 20, _y + 20);
            endabgabe.crc2.lineTo(_x - 20, _y + 20);
            endabgabe.crc2.lineTo(_x - 20, _y - 20);
            endabgabe.crc2.lineTo(_x + 20, _y - 20);
            endabgabe.crc2.closePath();
            if (endabgabe.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        hit2(_x, _y) {
            endabgabe.crc2.lineWidth = 30;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(_x + 20, _y + 20);
            endabgabe.crc2.lineTo(_x - 20, _y + 20);
            endabgabe.crc2.lineTo(_x - 20, _y - 20);
            endabgabe.crc2.lineTo(_x + 20, _y - 20);
            endabgabe.crc2.closePath();
            if (endabgabe.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    endabgabe.Snowball = Snowball;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Classes.js.map