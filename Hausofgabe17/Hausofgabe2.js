// 1. Erstellen Sie ein Set namens besuchteSeiten, um die Namen von Seiten zu speichern, die ein Benutzer besucht hat.
let besuchteSeiten = new Set();

// 2. Fügen Sie mindestens fünf Seitennamen zum Set hinzu, wobei zwei Namen dupliziert sein sollten.
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Startseite');  // Duplikat
besuchteSeiten.add('Dashboard');
besuchteSeiten.add('Einstellungen');  // Duplikat

// 3. Geben Sie die Anzahl der eindeutigen Seiten aus.
console.log('Anzahl der eindeutigen Seiten:', besuchteSeiten.size);  // Ausgabe: 4

// 4. Schreiben Sie eine Funktion zeigeSeiten, die alle Seitennamen im Format "Besuchte Seite: [Name]" ausgibt.
function zeigeSeiten(set) {
  set.forEach(seite => {
    console.log(`Besuchte Seite: ${seite}`);
  });
}

