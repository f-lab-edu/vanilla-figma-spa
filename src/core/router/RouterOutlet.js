export default class RouterOutlet extends HTMLElement {
  static instance = null;

  constructor() {
    super();

    RouterOutlet.instance = this;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '';
  }

  disconnectedCallback() {
    RouterOutlet.instance = null;
  }

  static getInstance() {
    return RouterOutlet.instance;
  }
}

customElements.define('router-outlet', RouterOutlet);
