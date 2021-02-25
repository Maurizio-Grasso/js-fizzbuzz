for (i = 0; i< 100; i++) {   
    if ( ( (i + 1) % 3 == 0 ) && ( (i + 1) % 5 == 0 ) ) {
        // Se il valore di 'i + 1' è sia multiplo di 3 che multiplo di 5
        console.log("FizzBuzz");
        document.getElementById("populate-list").innerHTML += "<li>FizzBuzz</li>";
    }
    else if ((i+1) % 3 == 0) {
        // Se il valore di 'i + 1' è multiplo di 3
        console.log("Fizz");
        document.getElementById("populate-list").innerHTML += "<li>Fizz</li>";
    }
    else if ((i+1) % 5 == 0) {
        // Se il valore di 'i + 1' è multiplo di 5
        console.log("Buzz");
        document.getElementById("populate-list").innerHTML += "<li>Buzz</li>";
    }
    else {
        // Qualsiasi altra condizione (ergo: se il valore di 'i + 1' non è né multplo di 3 né multiplo di 5)
        console.log(i+1);
        document.getElementById("populate-list").innerHTML += "<li>"+(i+1)+"</li>";
    }
}