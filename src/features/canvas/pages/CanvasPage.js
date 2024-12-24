import '../components/CanvasLayerSidebar.js';
import '../components/CanvasToolsSidebar.js';

export default class CanvasPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <canvas-layer-sidebar></canvas-layer-sidebar>
        <div class="main-canvas">
          <div class="canvas-area">
          </div>
        </div>
        <canvas-tools-sidebar></canvas-tools-sidebar>
      </div>
    `;
  }
}

customElements.define('canvas-page', CanvasPage);
