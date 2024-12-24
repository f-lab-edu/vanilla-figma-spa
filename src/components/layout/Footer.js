export default class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class='footer'>
        <p>2024. lionleeee</p>
      </footer>
    `;
  }
}

customElements.define('app-footer', Footer);
