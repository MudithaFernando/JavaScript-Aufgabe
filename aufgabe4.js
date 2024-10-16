// Erstelle ein 2D-Array, das eine 3x3-Matrix repräsentiert, die mit den Zahlen 1 bis 9 gefüllt ist
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Schreibe eine Funktion, die die Diagonalsumme der Matrix (von oben links nach unten rechts) berechnet
  function diagonaleSumme(matrix) {
    let summe = 0;
    for (let i = 0; i < matrix.length; i++) {
      summe += matrix[i][i];
    }
    return summe;
  }
  console.log("Diagonalsumme der Matrix:", diagonaleSumme(matrix));
  
  // Verwandle die Matrix in eine 3x3 Matrix mit Nullen in den Ecken
  matrix[0][0] = 0;
  matrix[0][2] = 0;
  matrix[2][0] = 0;
  matrix[2][2] = 0;
  console.log("Matrix mit Nullen in den Ecken:", matrix);