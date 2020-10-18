export class Figure{

    width: number = 50;
    height: number = 50;
    positionX: number;
    positionY: number;
    color: string;
    type: string;

    constructor(x, y, color) {
        this.positionX = x - 10;
        this.positionY = y;
        this.color = color;
        this.type = '';
    }

    draw(event) {

        let x = event.offsetX - this.positionX;
        let y = event.offsetY - this.positionY;
     
        event.target.innerHTML += `<div class="${this.type} ${this.color}" 
                                     style="position:absolute; 
                                     width: ${x}px;
                                     height: ${y}px;
                                     top:${this.positionY}px; 
                                     left: ${this.positionX}px">
                                </div>`;
    }
}