// 1. Erstellen Sie eine Map namens buecherMap, die Informationen über drei Bücher speichert.
let buecherMap = new Map([
    ['Der Alchemist', { autor: 'Paulo Coelho', seiten: 198 }],
    ['1984', { autor: 'George Orwell', seiten: 328 }],
    ['Moby Dick', { autor: 'Herman Melville', seiten: 635 }]
  ]);
  
  // 2. Greifen Sie auf die Seitenanzahl des Buches 'Der Alchemist' zu und geben Sie sie aus.
  console.log(buecherMap.get('Der Alchemist').seiten);  // Ausgabe: 198
  
  // 3. Iterieren Sie über die buecherMap und geben Sie jedes Buch und seine Eigenschaften aus.
  buecherMap.forEach((details, titel) => {
    console.log(`${titel}: Autor: ${details.autor}, Seiten: ${details.seiten}`);
  });
  // Ausgabe:
  // Der Alchemist: Autor: Paulo Coelho, Seiten: 198
  // 1984: Autor: George Orwell, Seiten: 328
  // Moby Dick: Autor: Herman Melville, Seiten: 635