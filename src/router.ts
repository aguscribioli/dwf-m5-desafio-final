import { initWelcomePage } from "./pages/welcome/welcome-page";
import { initInstructionsPage } from "./pages/instructions/instructions-page";
import { initPlayPage } from "./pages/play/play-page";
import { initTimeIsUpPage } from "./pages/time-is-up/time-is-up-page";
import { initResultPage } from "./pages/result/result-page";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcomePage,
  },
  {
    path: /\/instructions/,
    component: initInstructionsPage,
  },
  {
    path: /\/play/,
    component: initPlayPage,
  },
  {
    path: /\/time-is-up/,
    component: initTimeIsUpPage,
  },
  {
    path: /\/result/,
    component: initResultPage,
  },
];

const BASE_PATH = "/dwf-m5-desafio-final";

function isGitHubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGitHubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", path);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const elemento: any = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(elemento);
      }
    }
  }

  if (location.pathname == "/" || location.host.includes("github.io")) {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  
  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
}