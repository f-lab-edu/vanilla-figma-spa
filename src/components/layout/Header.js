export default class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header">
      <h1 class="header-title">Canvas</h1>
      <button class="download-button">
        <svg
          width="16"height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
        다운로드
      </button>
    </header>
    `;
  }
}

customElements.define('app-header', Header);
