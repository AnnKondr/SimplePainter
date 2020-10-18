import { Figure } from "./Figure"

export class Triangle extends Figure {
    constructor(x, y, color) {
        super(x, y, color);
        this.type = 'triangle';
    }
    draw(event) {
        let x = event.offsetX - this.positionX;
        let y = event.offsetY - this.positionY;
        let res = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        event.target.innerHTML += `<div class="triangle" 
                                     style="position:absolute; 
                                            border-bottom: ${res}px solid ${this.color}; 
                                            border-right : ${res}px solid transparent;
                                            top:${this.positionY}px; 
                                            left: ${this.positionX}px">
                                </div>`;
    }
}