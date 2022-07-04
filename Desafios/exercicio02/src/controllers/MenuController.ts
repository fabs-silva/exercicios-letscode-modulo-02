import { createMusician } from "../views/CreateMusician";
import { findMusician } from "../views/FindMusician";
import { updateMusician } from "../views/UpdateMusician";
import { createBands } from "./../views/CreateBands";

export const menuController = () => {
  const pages = ["", "modificar-musico", "buscar-musicos", "formar-banda"];

  pages.forEach((page) => {
    const element = document.getElementById(page);
    element?.addEventListener("click", (e: Event) => {
      e.preventDefault();

      const appBody = document.getElementById("app-body")!;

      console.log(appBody.childNodes);
      appBody.childNodes.forEach((node) => {
        console.log(node);
        appBody.removeChild(node);
      });

      if (page === "") {
        createMusician();
      }
      if (page === "modificar-musico") {
        updateMusician();
      }
      if (page === "buscar-musicos") {
        findMusician();
      }
      if (page === "formar-banda") {
        createBands();
      }
    });
  });
};
