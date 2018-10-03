
import {getCharacters} from './data/charactersData.js';
import {sortEvents} from './components/characters.js'

const initializeApp = () => {
    getCharacters();
    sortEvents();
};

initializeApp();