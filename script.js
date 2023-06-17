// Below is the function mockify before checking for numbers in the string
function mockifyNoNums(text) {
    console.log(text);
    let arr = text.split('');
    const spaces = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            spaces.push(i);
        }
    }
    console.log(arr);
    let filter = arr.filter(checkSpace);
    function checkSpace(val) {
        return val != ' ';
    }
    console.log(filter.join(''));
    for (let i = 0; i<filter.length; i+=2) {
        let string = filter[i];
        filter.splice(i, 1, string.toUpperCase());
    }
    console.log(filter.join(''));
    for (let i = 0; i < spaces.length; i++) {
        filter.splice(spaces[i], 0, ' ');
    }
    console.log(filter.join(''));
    console.log(spaces);

    return filter.join('');
}

function mockify(text) {
    text = document.getElementById('mockIn').value.toLowerCase();
    let arr = text.split('');
    const notLetters = [];
    const notLettersIndex = [];

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].match(/[a-zA-Z]/)) {
            notLettersIndex.push(i);
            notLetters.push(arr[i]);
        }
    }

    let newText = arr.filter((val) => {
        return val.match(/[a-zA-Z]/)
    });

    for (let i = 0; i<newText.length; i+=2) {
        let string = newText[i];
        newText.splice(i, 1, string.toUpperCase());
    }

    for (let i = 0; i < notLettersIndex.length; i++) {
        newText.splice(notLettersIndex[i], 0, notLetters[i]);
    }

    document.getElementById('mockIn').value = newText.join('');

    let copyText = document.getElementById('mockIn');
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copyText.value);
    copyText.blur();
}

document.getElementById('mockIn').addEventListener('click', () => {
    document.getElementById('mockIn').value = '';
});
