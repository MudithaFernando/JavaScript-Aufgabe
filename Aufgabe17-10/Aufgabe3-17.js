// 1. Zuerst die Map stadtMap erstellen
let stadtMap = new Map();

// 2. Füge die Städte 'Berlin', 'Paris' und 'Rom' zur Map hinzu
stadtMap.set('Berlin', { land: 'Deutschland', emoji: '🇩🇪' });
stadtMap.set('Paris', { land: 'Frankreich', emoji: '🇫🇷' });
stadtMap.set('Rom', { land: 'Italien', emoji: '🇮🇹' });

// 3. Iteriere über die Map und gib jedes Paar im Format "Stadt: Land" aus
stadtMap.forEach((details, stadt) => {
    console.log(`🏙️ Stadt: ${stadt}, 🌍 Land: ${details.land} ${details.emoji}`);
});

// Wenn du Rom erneut hinzufügen oder aktualisieren möchtest, kannst du das hier tun
// Dies ist jedoch nicht erforderlich, da Rom bereits in der Map ist
// stadtMap.set('Rom', { land: 'Italien', emoji: '🇮🇹' });


