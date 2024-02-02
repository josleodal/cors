async function searchCharacter() {
    const characterName = document.getElementById('characterName').value;

    try {
        const response = await fetch(`http://localhost:3014/characters/${characterName}`);
        const character = await response.json();
        
        displayCharacterInfo(character);
    } catch (error) {
        console.error('Error fetching character:', error);
        // Manejar el error en el frontend si es necesario
        document.getElementById('characterInfo').innerHTML = `<p>Error fetching character: ${error.message}</p>`;
    }
}

function displayCharacterInfo(character) {
    const characterInfoElement = document.getElementById('characterInfo');
    
    characterInfoElement.innerHTML = `
        <h2>${character.name}</h2>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <p>Origin: ${character.origin.name}</p>
        <img src="${character.image}" alt="${character.name}">
    `;
}
