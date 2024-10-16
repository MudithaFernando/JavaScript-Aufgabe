// Erstelle ein Array mit zufälligen Zahlen zwischen 1 und 100 (mindestens 20 Zahlen)
let zufallsZahlen = Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1);

// Filtern Sie alle geraden Zahlen in einem neuen Array heraus
let geradeZahlen = zufallsZahlen.filter(zahl => zahl % 2 === 0);

// Berechne die Summe aller gefilterten geraden Zahlen
let summeGeradeZahlen = geradeZahlen.reduce((summe, zahl) => summe + zahl, 0);
console.log("Summe der gefilterten geraden Zahlen:", summeGeradeZahlen);
