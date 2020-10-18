import { Figure } from "./Figure"

export class Circle extends Figure {
    constructor(x, y, color) {
        super(x, y, color);
        this.type = 'circle';
    }
}