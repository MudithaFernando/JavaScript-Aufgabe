// 1. Erstellen Sie ein Set namens buchstabenSet und fügen Sie die Buchstaben 'A', 'B' und 'C' hinzu.
let buchstabenSet = new Set(['A', 'B', 'C']);

// 2. Überprüfen Sie, ob der Buchstabe 'D' im Set existiert.
console.log(`📖 Enthält das Set den Buchstaben 'D'? ${buchstabenSet.has('D') ? '✅ Ja' : '❌ Nein'}`);

// 3. Statische Benutzereingabe (hier kannst du den gewünschten Buchstaben ändern)
let inputBuchstabe = 'D'; // Beispiel: Benutzer gibt 'D' ein

if (inputBuchstabe) {
    if (buchstabenSet.has(inputBuchstabe.toUpperCase())) {
        console.log(`📦 Der Buchstabe '${inputBuchstabe.toUpperCase()}' ist im Set enthalten.`);
    } else {
        console.log(`❌ Der Buchstabe '${inputBuchstabe.toUpperCase()}' ist nicht im Set enthalten.`);
        buchstabenSet.add(inputBuchstabe.toUpperCase());
        console.log(`✅ Der Buchstabe '${inputBuchstabe.toUpperCase()}' wurde hinzugefügt.`);
    }
}

// 4. Fügen Sie den Buchstaben 'A' erneut hinzu und geben Sie die Anzahl der Elemente im Set aus.
buchstabenSet.add('A');  // Das Hinzufügen von 'A' hat keine Auswirkungen.
console.log(`🔢 Anzahl der einzigartigen Buchstaben im Set: ${buchstabenSet.size}`);  // Ausgabe: 3

// Funktion, um die Buchstaben im Set anzuzeigen
function zeigeBuchstaben(set) {
    console.log("Aktuelle Buchstaben im Set:");
    for (let buchstabe of set) {
        console.log(`🔤 ${buchstabe}`);
    }
}

// Zeige die Buchstaben im Set
zeigeBuchstaben(buchstabenSet);