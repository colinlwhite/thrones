import {printToDom} from '../helpers/util.js'

const detailsBuilder = (character) => {
    console.log('character details inside', character);
    let domString = '';
    domString += `<div class="col-6 offset-md-3">`;
    domString += `<div class="row">`;
    domString += `<div class="col">`;
    domString += `<img src="${character.imageURL}" alt="${character.name}"/>`;
    domString += `</div>`;
    domString += `<div class="col">`;
    domString += `<h1>${character.name}</h1>`;
    domString += `<h3>${character.house}</h3>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;

    printToDom(domString);
};

 export {detailsBuilder};