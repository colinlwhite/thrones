import { printToDom } from "../helpers/util.js";
import {detailsBuilder} from "./detail.js"

let characters = [];

const setCharacters = (newArray) => {
    characters = newArray;
};

const getCharacterz = () => {
    return characters;
};

const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find((x) => {
        return x.id === characterId
    })
    detailsBuilder(currentCharacter);
    //console.log('currentCharacter', currentCharacter);
};

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for (let i = 0; i < characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
};

const sortPeople = (e) => {
    const house = e.target.id;
    if (house === 'All') {
        charactersBuilder(characters);
    } else {
        const filteredPeeps = characters.filter(x => x.house === house);
    charactersBuilder(filteredPeeps);
    }
    //console.log('you hit sort', e.target.id);
};

const sortEvents = () => {
    const allButton = document.getElementById('All');
    const starkButton = document.getElementById('Stark');
    allButton.addEventListener('click', sortPeople);
    starkButton.addEventListener('click', sortPeople);
};

const charactersBuilder = (charactersArray) => {
    let domString = '';
    charactersArray.forEach((character) => {
        domString += `<div class="col-2 character-card" id="${character.id}">`
        domString += `<div class="card">`;
        domString += `<img class="card-img-top img" src="${character.imageURL}" alt="${character.name}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${character.name}</h5>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    })
    printToDom(domString);
    createEvents();
};

export {charactersBuilder, setCharacters, getCharacterz, sortEvents};