function mockify(text) {
    //make everything lowercase
    text = document.getElementById('mockIn').value.toLowerCase();

    //splitting up the textarea value into elements in an array
    let arr = text.split('');

    //array of symbols
    const notLetters = [];

    //array of symbols indexes
    const notLettersIndex = [];

    //checking the textarea value for symbols and pushing them to their associated arrays
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].match(/[a-zA-Z]/)) {
            notLettersIndex.push(i);
            notLetters.push(arr[i]);
        }
    }

    //putting all the letters into a new array in order
    let newText = arr.filter((val) => {
        return val.match(/[a-zA-Z]/)
    });

    //uppercasing every other element in newText array
    for (let i = 0; i<newText.length; i+=2) {
        let string = newText[i];
        newText.splice(i, 1, string.toUpperCase());
    }

    //adding the symbols back into the string in their exact order
    for (let i = 0; i < notLettersIndex.length; i++) {
        newText.splice(notLettersIndex[i], 0, notLetters[i]);
    }

    //outputting the string back into textarea value
    document.getElementById('mockIn').value = newText.join('');

    //copying the string to clipboard
    let copyText = document.getElementById('mockIn');
    navigator.clipboard.writeText(copyText.value);
    copyText.blur();
}

//clear the textarea on focus
function clearText() {
    document.getElementById('mockIn').value = '';
}