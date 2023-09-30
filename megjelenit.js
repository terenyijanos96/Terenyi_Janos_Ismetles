export function htmlOsszeallit(lista) {
    let txt = "<ul>";
    for (let index = 0; index < lista.length; index++) {
      const element = lista[index];
      txt += `<li>${element}</li>`;
    }
  
    txt += "</ul>";
    return txt;
  }