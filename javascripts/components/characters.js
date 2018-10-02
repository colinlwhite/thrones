import { printToDom } from "../helpers/util.js";

const characters = [
    {id:'character1', name: 'Robin', house: 'Arryn', imageURL: 'https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2017%2F07%2FScreen-Shot-2017-07-11-at-12.36.25-PM.jpg&c=sc&w=736&h=485'},
    {id:'character2', name: 'Edmure', house: 'Tully', imageURL: 'http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s3/blackfish-tully-1024.jpg'},
    {id:'character3', name: 'Rickard', house: 'Stark', imageURL: 'https://media1.popsugar-assets.com/files/thumbor/sUpIi0hjSKVgYeaE74-4g7AHiJ8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/07/24/805/n/1922283/49869b39593b8e77_736624c75976302c2ebe73.51642632_edit_img_facebook_post_image_file_15913477_1500917045.jpg'},
    {id:'character4', name: 'Doran', house: 'Martell', imageURL: 'https://vignette.wikia.nocookie.net/gameofthrones/images/f/f9/Profile-DoranMartell.png/revision/latest?cb=20170728221257'}
];

const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find((x) => {
        return x.id === characterId
    })
    console.log('currentCharacter', currentCharacter);
}

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for (let i = 0; i < characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
};

const charactersBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
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

export {charactersBuilder};