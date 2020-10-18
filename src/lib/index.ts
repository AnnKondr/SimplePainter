
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

import { Square } from './Square';
import { Circle } from './Circle';
import { Diamond } from './Diamond';
import { Triangle } from './Triangle';
import { Figure } from './Figure';

class App {

    isPaintZone: boolean = true;
    color: Element;
    paintZone: Element;
    figure: Figure;

    init() {
        this.initColors();
        this.initPaintZone();
    }

    initColors() {
        let colors = document.querySelectorAll('.colors div');
        if (!colors.length) {
            return;
        }

        this.color = colors[0];
        this.color.classList.add('active');

        colors.forEach(el => {
            el.addEventListener('click', e => {

                colors.forEach(el => {
                    el.classList.remove('active');
                });

                if (e.target instanceof Element) {
                    this.color = e.target;
                    this.color.classList.add('active');
                }
            });
        });

    }

    initPaintZone() {
        this.paintZone = document.getElementById('paintZone');

        // this.paintZone.addEventListener('click', this.onPaintZoneClick);
        this.paintZone.addEventListener('mousedown', this.onPaintZoneMouseDown, false);
        this.paintZone.addEventListener('mouseup', this.onPaintZoneMouseUp, false);
    }

    onPaintZoneMouseUp = (e) => {
        if (this.figure && this.isPaintZone) {
            this.figure.draw(e);
        }
    }

    onPaintZoneMouseDown = (e) => {
        if (e.target != this.paintZone) {
            this.isPaintZone = false;
            return false;
        }

        this.isPaintZone = true;

        let figureType = document.querySelector('input[name="figureType"]:checked');
        if (!(figureType instanceof HTMLInputElement) || !figureType.value) {
            return;
        }

        if (e.target instanceof HTMLElement) {
            let figure;
            let x = e.offsetX;
            let y = e.offsetY;
            let color = this.color.classList[0];;

            switch (figureType.value) {

                case 'square':
                    figure = new Square(x, y, color);
                    break;

                case 'circle':
                    figure = new Circle(x, y, color);
                    break;

                case 'diamond':
                    figure = new Diamond(x, y, color);
                    break;

                case 'triangle':
                    figure = new Triangle(x, y, color);
                    break;
            }

            this.figure = figure;
            e.cancelBubble = true;
        }
    }
}

let app = new App();
app.init();