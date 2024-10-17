// 1. Erstellen Sie ein Set namens farbenSet mit den Farben 'Gelb', 'Grün' und 'Blau'.
let farbenSet = new Set(['Gelb', 'Grün', 'Blau']);

// Ein Dictionary, um Farben mit Emojis zu verknüpfen
const farbenEmojis = {
    'Gelb': '💛',
    'Grün': '💚',
    'Blau': '💙'
};

// 2. Iterieren Sie mit einer for...of-Schleife und geben Sie jede Farbe im Format "Farbe: [Farbe]" aus.
for (let farbe of farbenSet) {
    console.log(`Farbe: ${farbe} ${farbenEmojis[farbe]}`);
}
// Ausgabe: 
// Farbe: Gelb 💛
// Farbe: Grün 💚
// Farbe: Blau 💙