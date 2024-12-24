export default class CanvasLayerSidebar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="layer-sidebar">
        <h2 class="section-title">레이어</h2>
        <!-- 레이어 목록이 들어갈 자리 -->
      </div>
    `;
  }
}

customElements.define('canvas-layer-sidebar', CanvasLayerSidebar);
