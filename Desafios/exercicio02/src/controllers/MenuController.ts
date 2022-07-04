import { createBands } from '../views/CreateBands';
import { createMusician } from '../views/CreateMusician';
import { findMusician } from '../views/FindMusician';
import { updateMusician } from '../views/UpdateMusician';

const routes = {
  '/': `${createMusician().innerHTML}`,
  '/modificar-musico': `${updateMusician().innerHTML}`,
  '/buscar-musicos': `${findMusician().innerHTML}`,
  '/formar-bandas': `${createBands().innerHTML}`,
};

export const menuController = () => {
  /* window.addEventListener('popstate', (e: Event) =>
    render(new URL(window.location.href).pathname)
  );
  render('/'); */
};
/* 
const render = (path: string) => {
  const app = document.querySelector('#app-body')!;
  app.innerHTML = routes[path] || `<h1>404</h1>`;

  document.querySelectorAll('[href^="/"]').forEach((el: Element) =>
    el.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const { pathname: path } = new URL(target.href);
      window.history.pushState({ path }, path, path);
      render(path);
    })
  );
};
 */
