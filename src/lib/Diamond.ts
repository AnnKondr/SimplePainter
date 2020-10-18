import { Figure } from "./Figure"

export class Diamond extends Figure {
    constructor(x, y, color) {
        super(x, y, color);
        this.type = 'diamond';
    }


    draw(event) {
    let x = event.offsetX - this.positionX;
    let y = event.offsetY - this.positionY;
    let res = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    console.log(`x:${x}`, `y:${y}`, `res:${res}`);

    event.target.innerHTML += `<div class="${this.type} ${this.color}" 
                                     style="position:absolute; 
                                     width: ${res/2}px;
                                     height: ${res/2}px;
                                     top:${this.positionY}px; 
                                     left: ${this.positionX}px">
   </div>`;
    }
}