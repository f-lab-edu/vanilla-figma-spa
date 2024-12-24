import CanvasPage from '../../features/canvas/pages/CanvasPage';

export const routes = {
  '*': {
    component: CanvasPage,
    layout: {
      header: 'app-header',
      footer: 'app-footer',
    },
  },
};
