// 1. Erstellen der buecherMap (Das sollte vor dem Funktionsaufruf passieren)
let buecherMap = new Map([
    ['Der Alchemist', { autor: 'Paulo Coelho', seiten: 198 }],
    ['1984', { autor: 'George Orwell', seiten: 328 }],
    ['Die Verwandlung', { autor: 'Franz Kafka', seiten: 74 }]
]);


// 2. Definition der Funktion 'zeigeBuecher'
function zeigeBuecher(buecher) {
    let gesamtSeiten = 0;
    console.log("Buchübersicht:");
    buecher.forEach((details, titel) => {
        console.log(`📖 ${titel}: ✍️ ${details.autor}, 📄 ${details.seiten} Seiten`);
        gesamtSeiten += details.seiten; // Summiere die Seiten
    });
    console.log(`Gesamtanzahl der Bücher: ${buecher.size}`);
    console.log(`Gesamtseitenzahl: ${gesamtSeiten} Seiten`);
}



// 3. Aufruf der Funktion 'zeigeBuecher' mit der 'buecherMap'
zeigeBuecher(buecherMap);
