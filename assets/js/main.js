/*
Lista della spesa con ciclo while

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

// CREATE THE SHOPPING LIST ARRAY
const shoppingList = ["Acqua", "Pane", "Farina", "Birra", "Mozzarella", "Pasta", "Bresaola", "Petto di pollo", "Pesce spada", "Uova", "Cioccolato fondente", "Frollini al cacao"];

// SELECT THE CONTAINER FROM THE DOM
const container = document.querySelector(".container");

// CREATE THE UL AND INSERT IT INTO THE CONTAINER
const ulElement = document.createElement("ul");
container.append(ulElement);

// CYCLE THROUGH THE SHOPPING LIST TO PRINT ITS ELEMENTS ON THE PAGE

// CREATE THE COUNTER VARIABLE
let i = 0;

// CYCLE UNTIL THE COUNTER IS LESS THAN THE SHOPPING LIST LENGTH
while (i < shoppingList.length) {

  // CREATE THE LI
  const liElement = document.createElement("li");

  // SET IT'S CONTENT
  liElement.innerText = shoppingList[i];

  // INSERT AT THE END OF THE UL
  ulElement.append(liElement);
  
  // INCREASE THE COUNTER
  i++;
}