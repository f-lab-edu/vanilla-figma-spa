import DragAndDropService from '../services/dragAndDrop/DragAndDropService.js';
import { layerService } from '../services/LayerService.js';

export default class CanvasLayerSidebar extends HTMLElement {
  constructor() {
    super();
    this.layers = [];
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
    this.initDragAndDrop();
  }

  initDragAndDrop() {
    this.dragAndDropManager = new DragAndDropService(this);

    this.addEventListener('layer-dropped', this.handleDrop.bind(this));
  }

  handleDrop(e) {
    const { target, data, isAbove } = e.detail;

    if (target) {
      layerService.changeLayerZIndex(data, target, isAbove);
    }
  }

  addEventListeners() {
    document.addEventListener('layers-updated', (e) => {
      this.layers = e.detail.layers;
      this.renderLayers();
    });

    this.addEventListener('click', (e) => {
      const layerName = e.target.closest('.layer-name');
      if (layerName) {
        const layerItem = layerName.closest('.layer-item');
        const id = Number(layerItem.dataset.id);
        this.startEditing(layerName, id);
      }
    });
  }

  startEditing(nameElement, layerId) {
    const currentName = nameElement.textContent;
    const input = document.createElement('input');
    input.value = currentName;
    input.className = 'layer-name-input';

    const finishEditing = () => {
      const newName = input.value.trim();
      if (newName && newName !== currentName) {
        layerService.updateLayerName(layerId, newName);
      } else {
        this.renderLayers();
      }
    };

    input.addEventListener('blur', finishEditing);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        finishEditing();
      } else if (e.key === 'Escape') {
        this.renderLayers();
      }
    });

    nameElement.replaceWith(input);
    input.focus();
    input.select();
  }

  render() {
    this.innerHTML = `
      <div class="layer-sidebar">
        <h2 class="section-title">레이어</h2>
        <div class="layer-list"></div>
      </div>
    `;
    this.renderLayers();
  }

  renderLayers() {
    const layerList = this.querySelector('.layer-list');
    if (!layerList) return;

    layerList.innerHTML = this.layers
      .map(
        (layer) => `
        <div class="layer-item" draggable="true" data-id="${layer.id}">
          <span class="layer-name">${layer.name}</span>
          <span class="layer-coords">(${Math.round(layer.x)}, ${Math.round(layer.y)})</span>
        </div>
      `
      )
      .join('');
  }
}

customElements.define('canvas-layer-sidebar', CanvasLayerSidebar);
