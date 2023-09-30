import { TERVEKLISTA as LISTA } from "./adatok.js";
import { htmlOsszeallit } from "./megjelenit.js"

$(function () {
  const szuloElem = $(".tartalom");
  let txt = htmlOsszeallit(LISTA);
  szuloElem.html(txt);
});



