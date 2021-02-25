// recupera le variabili dall'input dell'utente

var fizzValue  = document.getElementById("input-fizz").value;
var buzzValue  = document.getElementById("input-buzz").value;
var iterazioni = document.getElementById("input-iterations").value;

for (i = 0; i< iterazioni; i++) {   
    if ( ( (i + 1) % fizzValue == 0 ) && ( (i + 1) % buzzValue == 0 ) ) {
        // Se il valore di 'i + 1' è sia multiplo di 'fuzz' che multiplo di 'buzz'
        document.getElementById("populate-list").innerHTML += "<li class=\"text-secondary\">FizzBuzz</li>";
    }
    else if ((i+1) % fizzValue == 0) {
        // Se il valore di 'i + 1' è multiplo di 'fizz'
        document.getElementById("populate-list").innerHTML += "<li>Fizz</li>";
    }
    else if ((i+1) % buzzValue == 0) {
        // Se il valore di 'i + 1' è multiplo di 'buzz'
        document.getElementById("populate-list").innerHTML += "<li>Buzz</li>";
    }
    else {
        // Qualsiasi altra condizione (ergo: se il valore di 'i + 1' non è né multplo di 'fizz' né multiplo di 'buzz')
        document.getElementById("populate-list").innerHTML += "<li>"+(i+1)+"</li>";
    }
}

// Pulsante 'Aggiorna'
document.getElementById("refresh-button").addEventListener("click" , function() {
    location.reload();
}
)

