import { TERVEKLISTA as LISTA } from "./adatok.js";
import ListaMegjelenit from "./Megjelenit.js";

$(function () {
  const szuloElem = $(".tartalom");
  new ListaMegjelenit(LISTA, szuloElem)
});



