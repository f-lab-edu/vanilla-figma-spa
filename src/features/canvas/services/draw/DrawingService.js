import Preview from './Preview.js';
import DrawShape from './DrawShape.js';

export default class DrawingService {
  constructor(context) {
    this.context = context;
    this.canvas = context.canvas;
    this.preview = new Preview(context);
    this.drawShape = new DrawShape(context);
    this.startPoint = null;
    this.currentType = null;
    this.currentId = 0;
  }

  startDrawing(type, x, y) {
    this.startPoint = { x, y };
    this.currentType = type;
  }

  createCanvas(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;

    this.context.fillStyle = '#fff';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  generateId() {
    return ++this.currentId;
  }

  previewShape(x, y) {
    if (!this.startPoint || !this.currentType) return;
    this.preview.previewShape(this.currentType, this.startPoint, { x, y });
  }

  finishDrawing(x, y) {
    if (!this.startPoint || !this.currentType) return;

    const result = this.drawShape.draw(
      this.currentType,
      this.startPoint,
      { x, y },
      this.generateId()
    );
    this.preview.clear();

    this.startPoint = null;
    this.currentType = null;
    return result;
  }

  reDrawing(layer) {
    const startPoint = {
      x: layer.x,
      y: layer.y,
    };

    const endPoint = {
      x: layer.x + layer.width,
      y: layer.y + layer.height,
    };

    if (layer.type === '원형' && layer.radius) {
      endPoint.x = layer.x + layer.radius * 2;
      endPoint.y = layer.y + layer.radius * 2;
    }

    this.drawShape.draw(layer.type, startPoint, endPoint, layer.id);
  }

  redrawShapes(layers) {
    this.createCanvas(this.canvas.width, this.canvas.height);
    [...layers].reverse().forEach((layer) => {
      this.reDrawing(layer);
    });
  }
}
