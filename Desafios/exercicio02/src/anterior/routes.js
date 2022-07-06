export const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/404.html",
  "/": "/index.html",
  "/buscar-musicos": "/buscar-musicos.html",
  "/modificar-musico": "/modificar-musico.html",
  "/formar-bandas": "/formar-bandas.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("app-body").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
