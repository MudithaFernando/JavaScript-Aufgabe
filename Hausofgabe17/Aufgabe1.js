// Aufgabe 1: Benutzerverwaltung mit Map
const benutzerVerwaltung = new Map();

// Benutzer zur Map hinzufügen
benutzerVerwaltung.set('Hase1', {
  email: 'Hausofgabe12@Tech.com',
  rolle: 'Admin',
});
benutzerVerwaltung.set('vögel2', {
  email: 'vielaufgabe@zuhause.com',
  rolle: 'User',
});
benutzerVerwaltung.set('Katze1', {
  email: 'aufgabe12@Tech.com',
  rolle: 'Gast',
});

// Funktion zum Anzeigen der Benutzer
function zeigeBenutzer() {
  benutzerVerwaltung.forEach((details, benutzername) => {
    console.log(`Benutzername: ${benutzername}, E-Mail: ${details.email}, Rolle: ${details.rolle}`);
  });
}

// Aufruf der Funktion
zeigeBenutzer();