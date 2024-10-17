// 1. Erstellen Sie eine Map namens stadtMap.
let stadtMap = new Map();

// 2. Fügen Sie folgende Paare hinzu: 'Berlin': 'Deutschland', 'Paris': 'Frankreich'.
stadtMap.set('Berlin', 'Deutschland');
stadtMap.set('Paris', 'Frankreich');





// 3. Greifen Sie auf den Wert des Schlüssels 'Berlin' zu und geben Sie ihn aus.
console.log(stadtMap.get('Berlin'));  // Ausgabe: Deutschland

// 4. Überprüfen Sie, ob der Schlüssel 'Rom' in der Map existiert.
console.log(stadtMap.has('Rom'));  // Ausgabe: false

