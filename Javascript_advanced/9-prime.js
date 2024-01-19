// Déclaration de la fonction countPrimeNumbers pour compter les nombres premiers
function countPrimeNumbers() {
  let count = 0;  // Initialisation du compteur de nombres premiers à 0
  let prime;  // Variable pour déterminer si un nombre est premier ou non

  // vérifier chaque nombre de 2 à 100
  for (let i = 2; i <= 100; i++) {
    prime = true;  

    // Vérifier si 'i' peut être divisé par un nombre inférieur à lui-même
    for (let j = 2; j < i; j++) {
      // Si 'i' est divisible par 'j', 'i' n'est pas premier
      if (i % j == 0) {
        prime = false;  // 'i' n'est pas un nombre premier
        break;  // Arrêter la vérification pour le nombre actuel 'i' car il n'est pas premier
      }
    }
    
    // Si 'i' est premier (prime est toujours vrai), incrémenter le compteur
    if (prime) {
      count += 1;
    }
  }
  return count;  // Retourner le nombre total de nombres premiers trouvés
}

// Mesurer le temps d'exécution de la fonction countPrimeNumbers
const t0 = performance.now();  // Heure de début
countPrimeNumbers();  // Exécuter la fonction countPrimeNumbers
const t1 = performance.now();  // Heure de fin

console.log(
  `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
