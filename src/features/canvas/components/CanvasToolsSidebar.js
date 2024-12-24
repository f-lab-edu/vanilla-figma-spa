import './ToolButton.js';
import './PropertyInput.js';

export default class CanvasToolsSidebar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="tools-sidebar">
      <div class="property-group">
        <h2 class="section-title">도형</h2>
        <tool-button 
          icon-path="<rect x='3' y='3' width='18' height='18' fill='none' stroke='currentColor' stroke-width='2'/>"
          label="사각형">
        </tool-button>
        <tool-button 
          icon-path="<circle cx='12' cy='12' r='9' fill='none' stroke='currentColor' stroke-width='2'/>"
          label="원형">
        </tool-button>
        <tool-button 
          icon-path="<line x1='3' y1='12' x2='21' y2='12' stroke='currentColor' stroke-width='2'/>"
          label="직선">
        </tool-button>
        <tool-button 
          icon-path="<text x='6' y='16' font-size='14'>T</text>"
          label="텍스트">
        </tool-button>
      </div>

      <div class="property-group">
        <h2 class="section-title">설정</h2>
        <property-input
          type="number"
          label="가로"
          placeholder="Width">
        </property-input>

        <property-input
          type="number"
          label="세로"
          placeholder="Height">
        </property-input>

        <property-input
          type="range"
          label="투명도"
          min="0"
          max="100"
          value="100">
        </property-input>
      </div>

      <button class="reset-button">초기화</button>
    </div>
    `;
  }
}

customElements.define('canvas-tools-sidebar', CanvasToolsSidebar);
