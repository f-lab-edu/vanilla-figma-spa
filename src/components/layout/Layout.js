import './Header.js';
import './Footer.js';
import '../../core/router/RouterOutlet.js';

export default class Layout extends HTMLElement {
  static observedAttributes = ['header', 'footer'];

  connectedCallback() {
    this.render();
  }

  render() {
    const headerTag = this.getAttribute('header') || '';
    const footerTag = this.getAttribute('footer') || '';
    this.innerHTML = `
      ${headerTag ? `<${headerTag}></${headerTag}>` : ''}
      <router-outlet></router-outlet>
      ${footerTag ? `<${footerTag}></${footerTag}>` : ''}
    `;
  }
}

customElements.define('app-layout', Layout);
