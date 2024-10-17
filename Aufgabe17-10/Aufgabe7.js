// 1. Erstellen des Sets sportartenSet
let sportartenSet = new Set(['Fußball', 'Basketball', 'Tennis']);

// 2. Überprüfen der Anzahl der einzigartigen Sportarten im Set
console.log(`Anzahl der einzigartigen Sportarten: ${sportartenSet.size}`);  // Ausgabe: 3

// 3. Entfernen von 'Basketball'
sportartenSet.delete('Basketball');

// 4. Informationen zu den Sportarten
let sportartenInfo = {
    'Fußball': { spieler: 22, beliebtheit: 'hoch' },
    'Tennis': { spieler: 2, beliebtheit: 'mittel' }
};

// 5. Ausgabe der Sportarten mit Informationen
sportartenSet.forEach(sport => {
    console.log(`${sport}: ${sportartenInfo[sport].spieler} Spieler, Beliebtheit: ${sportartenInfo[sport].beliebtheit}`);
});

// 6. Ausgabe der aktualisierten Größe des Sets
console.log(`Aktualisierte Anzahl der Sportarten: ${sportartenSet.size}`);  // Ausgabe: 2
