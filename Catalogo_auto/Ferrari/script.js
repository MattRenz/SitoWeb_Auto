// ordina per potenza
function sortCV() {
    var table = document.querySelector('.table');
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.querySelectorAll('tr'));
  
    // Ordina le righe in base alla colonna Horsepower in ordine decrescente
    rows.sort(function(rowA, rowB) {
      var potenzaA = parseInt(rowA.cells[1].textContent);
      var potenzaB = parseInt(rowB.cells[1].textContent);
      return potenzaB - potenzaA;
    });
  
    // Rimuovi le righe esistenti dalla tabella
    rows.forEach(function(row) {
      tbody.removeChild(row);
    });
  
    // Aggiungi le righe ordinate alla tabella
    rows.forEach(function(row) {
      tbody.appendChild(row);
    });
};

// ordina per anno dal più piccolo
function sortAnno_min(){
    var table = document.querySelector('.table');
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.querySelectorAll('tr'));


    // Oridna le auto in base all'anno di uscita
    rows.sort(function(rowA, rowB) {
        var annoA =  parseInt(rowA.cells[3].textContent);
        var annoB = parseInt(rowB.cells[3].textContent);
        return annoA - annoB;
    });

    // rimuovi le righe esistenti nella tabella
    rows.forEach(function (row){
        tbody.removeChild(row);
    });

    // una volta rimosse inseriamo quelle ordinate secondo l'anno d'uscita
    rows.forEach(function (row) {
        tbody.appendChild(row);
    });

};

// ordina per anno dal più grande
function sortAnno_magg(){
  var table = document.querySelector('.table');
  var tbody = table.querySelector('tbody');
  var rows = Array.from(tbody.querySelectorAll('tr'));

  // Oridna le auto in base all'anno di uscita
  rows.sort(function(rowA, rowB) {
      var annoA =  parseInt(rowA.cells[3].textContent);
      var annoB = parseInt(rowB.cells[3].textContent);
      return annoB - annoA;
  });

  // rimuovi le righe esistenti nella tabella
  rows.forEach(function (row){
      tbody.removeChild(row);
  });

  // una volta rimosse inseriamo quelle ordinate secondo l'anno d'uscita
  rows.forEach(function (row) {
      tbody.appendChild(row);
  });

};

// ordina per prezzo
function sortPrezzo(){
  var table = document.querySelector('.table');
  var tbody = table.querySelector('tbody');
  var rows = Array.from(tbody.querySelectorAll('tr'));

  // Oridna le auto in base all'anno di uscita
  rows.sort(function(rowA, rowB) {
      var annoA =  parseInt(rowA.cells[2].textContent.split('€')[0]);
      var annoB = parseInt(rowB.cells[2].textContent.split('€')[0]);
      return annoA - annoB;
  });

  // rimuovi le righe esistenti nella tabella
  rows.forEach(function (row){
      tbody.removeChild(row);
  });

  // una volta rimosse inseriamo quelle ordinate secondo l'anno d'uscita
  rows.forEach(function (row) {
      tbody.appendChild(row);
  });

};

  // Salva l'ordine originale della tabella
var originalOrder = Array.from(document.querySelectorAll('.table tbody tr'));
  
  // Funzione per ripristinare l'ordine originale della tabella
function resetTable() {
    var table = document.querySelector('.table');
    var tbody = table.querySelector('tbody');
  
    // Rimuovi le righe esistenti dalla tabella
    Array.from(tbody.querySelectorAll('tr')).forEach(function(row) {
      tbody.removeChild(row);
    });
  
    // Aggiungi le righe nell'ordine originale alla tabella
    originalOrder.forEach(function(row) {
      tbody.appendChild(row);
    });
};
  
  // Funzione per gestire l'evento change del bottone a tendina
function handleDropdownChange() {
    var dropdown = document.getElementById('sort-dropdown');
var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  
    if (selectedOption === 'cavalli') {
        sortCV();
    } else if (selectedOption === 'anno<') {
        sortAnno_min();
    } else if (selectedOption === 'anno>') {
        sortAnno_magg();
    } else if (selectedOption === 'prezzo') {
      sortPrezzo();
  } 
};
  
  // Aggiungi l'evento change al bottone a tendina
  var dropdown = document.getElementById('sort-dropdown');
  dropdown.addEventListener('change', handleDropdownChange);
  