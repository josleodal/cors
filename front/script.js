async function searchCharacter() {
    const characterName = document.getElementById('characterName').value;

    try {
        const response = await fetch(`http://localhost:3014/characters/${characterName}`);
        const character = await response.json();
        
       FCharacterInfo(character);
    } catch (error) {
        console.error('Error :', error);
        // Manejar el error en el frontend si es necesario
        document.getElementById('characterInfo').innerHTML = `<p>Error : ${error.message}</p>`;
    }
}

function FCharacterInfo(character) {
    const characterInfoElement = document.getElementById('characterInfo');
    
    characterInfoElement.innerHTML = `
        <h2>${character.name}</h2>
        <p>Estadp: ${character.status}</p>
        <p>Especie: ${character.species}</p>
        <p>Género: ${character.gender}</p>
        <p>Origen: ${character.origin.name}</p>
        <img src="${character.image}" alt="${character.name}">
    `;
}
