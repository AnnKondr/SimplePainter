import {Figure} from "./Figure"

export class Square extends Figure {
    constructor(x, y, color) {
        super(x, y, color); 
        this.type = 'square';
    }
}