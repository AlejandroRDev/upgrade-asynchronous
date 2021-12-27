/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input. */

const baseUrl = "https://api.nationalize.io";
const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

const inputSearch = () => {
  fetch(baseUrl + "?name=" + input$$.value)
    .then((response) => {
      return response.json();
    })
    .then((responseParsed) => {
      console.log(responseParsed);

      for (const country of responseParsed.country) {
        const p$$ = document.createElement("p");
        const buttonToRemove = document.createElement('button');
        buttonToRemove.textContent = 'X';
        buttonToRemove.addEventListener("click", () => {
            p$$.innerHTML = ``
        })

        p$$.innerHTML = `
          El nombre ${responseParsed.name} tiene un ${country.probability} de ser de ${country.country_id}`;
        p$$.appendChild(buttonToRemove);
        document.body.appendChild(p$$);
      }
    });
};

button$$.addEventListener("click", inputSearch);

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */