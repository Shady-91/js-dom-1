
//> Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//>
//Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// **BONUS**

// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...

// Per fare questo bonus potremmo aver bisogno di del metodo [string.includes()](https://www.w3schools.com/jsref/jsref_includes.asp) 😉

// Buon  divertimento e confermate lettura come al solito 

// Selezionare gli elementi
const button = document.getElementById("toggleBtn")
const lampadina = document.getElementById("lampadina")

//Lo stato iniziale deve essere spenta la lampadina
let accesa = false

// gestiamo il click
button.addEventListener('click', function () {
      accesa = !accesa;
      // se è accesa la spegniamo e cambia anche il nome dentro il bottone
      if (accesa) {
            lampadina.src = './yellow_lamp.png';
            button.textContent = 'Spegni'
      }
      // se è spenta cambiando il nome sul bottone e la accendiamo
      else {
            lampadina.src = './white_lamp.png';
            button.textContent = 'Accendi';
      }

});