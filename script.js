let btnCalcola = document.getElementById("calcola");

function valutaRichiestaPrestito() {
  let stipendioMensile = document.getElementById("stipendioMensile").value;
  let importoRichiesto = document.getElementById("importoRichiesto").value;
  let anniRestituzione = document.getElementById("anniRestituzione").value;
  let haGaranti = document.getElementById("haGaranti").value === "true";
  let risultato = document.getElementById("risultato");

  // Dichiarazione variabili Stato iniziale
  let isApprovato = false;
  let rataBase = 0;
  let commissione = 0;
  let rataFinale = 0;
  let messaggio = "";

  // Formula per calcolo Rata Base
  rataBase = importoRichiesto / (anniRestituzione * 12);

  // Se Rata Base <= 1/3 Stipendio Mensile Altrimenti SE ha Garanti E Rata Base <= Metà Stipendio Mensile
  // allora viene APPROVATO Altrimenti NO
  if (rataBase <= stipendioMensile / 3) {
    isApprovato = true;
  } else if (haGaranti == true && rataBase <= stipendioMensile / 2) {
    isApprovato = true;
  } else {
    isApprovato = false;
  }

  // Condizione per applicare la Commissione
  // SE viene APPROVATO e l'Importo Richiesto > €20.000, la Commissione sarà di €50 Altrimenti €20
  if (isApprovato == true) {
    if (importoRichiesto > 20000) {
      commissione = 50;
    } else {
      commissione = 20;
    }
  }

  rataFinale = rataBase + commissione;

  // Scelta del Messaggio da mostrare in base all'Approvazione
  if (isApprovato == true) {
    messaggio = `Esito: APPROVATO. Rata mensile finale: €${rataFinale.toFixed(0)}`;
  } else {
    messaggio = "Esito: RIFIUTATO. Il rischio per la banca è troppo elevato.";
  }

  // Dopo il calcolo della scelta, questo mostrerà il messaggio nell'interfaccia
  risultato.innerText = messaggio;
}

btnCalcola.addEventListener("click", valutaRichiestaPrestito);
