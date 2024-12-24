export default class PropertyInput extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'type', 'placeholder', 'min', 'max', 'value'];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute('label') || '';
    const type = this.getAttribute('type') || 'text';
    const placeholder = this.getAttribute('placeholder') || '';
    const min = this.getAttribute('min') || 0;
    const max = this.getAttribute('max') || 100;
    const value = this.getAttribute('value') || 100;

    let inputElement = ``;

    if (type === 'range') {
      inputElement = `
        <input 
          type="range" 
          class="range-slider" 
          min="${min}" 
          max="${max}" 
          value="${value}"
        />
      `;
    } else {
      inputElement = `
        <input 
          type="${type}" 
          class="input-field" 
          placeholder="${placeholder}"
        />
      `;
    }

    this.innerHTML = `
      <div class="property-input">
        <label class="input-label">${label}</label>
        ${inputElement}
      </div>
    `;
  }
}

customElements.define('property-input', PropertyInput);
