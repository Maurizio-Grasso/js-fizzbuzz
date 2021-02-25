var fizzValue , buzzValue , iterazioni; // variabili che saranno inserite dall'utente
var idLista = document.getElementById("populate-list"); // variabile che fa riferimento alla <ul> contenente la lista

// Cliccando sul Pulsante...
document.getElementById("refresh-button").addEventListener("click" , function() {
    
    idLista.innerHTML = ""; // Resetta la lista (potrebbe contenere elementi generati da eventuali cicli precedenti)

    fizzValue  = document.getElementById("input-fizz").value;         // Recupera valore fizz
    buzzValue  = document.getElementById("input-buzz").value;         // Recupera valore buzz
    iterazioni = document.getElementById("input-iterations").value;   // Recupera valore iterazioni

    for (i = 0; i< iterazioni; i++) {
        if ( ( (i + 1) % fizzValue == 0 ) && ( (i + 1) % buzzValue == 0 ) ) {
            // Se il valore di 'i + 1' è sia multiplo di 'fuzz' che multiplo di 'buzz'
            idLista.innerHTML += "<li class=\"text-secondary\">FizzBuzz</li>";
        }
        else if ((i+1) % fizzValue == 0) {
            // Se il valore di 'i + 1' è multiplo di 'fizz'
            idLista.innerHTML += "<li>Fizz</li>";
        }
        else if ((i+1) % buzzValue == 0) {
            // Se il valore di 'i + 1' è multiplo di 'buzz'
            idLista.innerHTML += "<li>Buzz</li>";
        }
        else {
            // Qualsiasi altra condizione (ergo: se il valore di 'i + 1' non è né multplo di 'fizz' né multiplo di 'buzz')
            idLista.innerHTML += "<li>"+(i+1)+"</li>";
        }
    }   //  Chiusura ciclo for
}   //  Chiusura Funzione Anonima
)   //  Chiusura parametri Event Listener