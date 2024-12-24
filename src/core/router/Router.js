import Layout from '../../components/layout/Layout.js';
import RouterOutlet from './RouterOutlet.js';
import { routes } from './RouterConfig.js';

class Router {
  static instance = null;

  constructor() {
    if (Router.instance) {
      return Router.instance;
    }
    Router.instance = this;

    this.routes = new Map(Object.entries(routes));

    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname);
    });

    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        this.navigate(link.getAttribute('href'));
      }
    });
  }

  handleRoute(pathname) {
    const route = this.routes.get(pathname) || this.routes.get('*');
    if (route) {
      const app = document.querySelector('#app');
      if (route.layout) {
        app.innerHTML = '';
        const layout = new Layout();
        layout.setAttribute('header', route.layout.header);
        layout.setAttribute('footer', route.layout.footer);
        app.appendChild(layout);
      }

      const outlet = RouterOutlet.getInstance();
      if (outlet) {
        outlet.innerHTML = '';
        outlet.appendChild(new route.component());
      }
    }
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute(path);
  }

  init() {
    this.handleRoute(window.location.pathname);
    return this;
  }
}

export const router = new Router();
