// Définition de la fonction countPrimeNumbers pour compter les nombres premiers entre 2 et 100.
function countPrimeNumbers() {
  let count = 0; // Initialise le compteur de nombres premiers.
  let prime; // Variable pour déterminer si un nombre est premier.

  //  parcourt chaque nombre de 2 à 100.
  for (let i = 2; i <= 100; i++) {
    prime = true; // Suppose initialement que le nombre est premier.

    // Boucle secondaire : vérifie si 'i' est divisible par un nombre inférieur à lui.
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false; // Si 'i' est divisible par 'j', alors 'i' n'est pas premier.
        break; // Sort de la boucle car 'i' n'est pas premier.
      }
    }
    if (prime) {
      count += 1;
    }
  }
  return count; // Retourne le nombre total de nombres premiers trouvés.
}

//  fonction count100 pour appeler countPrimeNumbers 100 fois.
function count100() {
  for (let index = 0; index < 100; index++) { // Boucle 100 fois.
    countPrimeNumbers(); // Appelle countPrimeNumbers à chaque itération.
  }
}

const t0 = performance.now(); // Enregistre le temps de départ.

setTimeout(count100, 0); // Exécute count100 après un délai de 0 ms (pratiquement immédiatement).

const t1 = performance.now(); // Enregistre le temps de fin.

// Affiche le temps d'exécution de count100.
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
