import {setCharacters, charactersBuilder, getCharacterz} from '../components/characters.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder(getCharacterz());
}

function executeThisCodeIfXhrFails () {
    console.log('it broke');
}

const getCharacters = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
  myRequest.addEventListener('error', executeThisCodeIfXhrFails);
  myRequest.open('GET', './db/characters.json');
  myRequest.send();
};

export {getCharacters};