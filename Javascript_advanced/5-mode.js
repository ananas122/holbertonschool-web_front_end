function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = textTransform;
        document.body.style.backgroundColor = color;
        document.body.style.color = color;
        
    };

}

function main() {
    // Configuration des modes
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    // Ajout d'un paragraphe
    let p = document.createElement('p');
    p.textContent = "Welcome Holberton!";
    document.body.appendChild(p);

    // Ajout du bouton Spooky
    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.onclick = spooky;
    document.body.appendChild(spookyButton);

    // Ajout du bouton Dark mode
    let darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.onclick = darkMode;
    document.body.appendChild(darkModeButton);

    // Ajout du bouton Scream mode
    let screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.onclick = screamMode;
    document.body.appendChild(screamModeButton);
}


main();

    
    