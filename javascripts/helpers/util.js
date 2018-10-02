const printToDom = (stringToPrint) => {
    const printHere = document.getElementById('characters');
    printHere.innerHTML = stringToPrint;
}

export {printToDom};