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
    console.log(text);
    let arr = text.split('');
    const notLetters = [];
    const notLettersIndex = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/[a-zA-Z]/)) {
        } else {
            notLettersIndex.push(i);
            notLetters.push(arr[i]);
        }
    }
    console.log(arr);
    console.log(notLetters);
    console.log(notLettersIndex);
    let filter = arr.filter(checkSpace);
    function checkSpace(val) {
        return val.match(/[a-zA-Z]/)
    }
    console.log('checking for characters ' + filter.join(''));
    for (let i = 0; i<filter.length; i+=2) {
        let string = filter[i];
        filter.splice(i, 1, string.toUpperCase());
    }
    console.log(filter.join(''));
    for (let i = 0; i < notLettersIndex.length; i++) {
        filter.splice(notLettersIndex[i], 0, notLetters[i]);
    }
    console.log(filter.join(''));
    console.log(notLettersIndex);

    document.getElementById('mockIn').value = filter.join('');

    let copyText = document.getElementById('mockIn');
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copyText.value);
    copyText.blur();
}

function test() {
    console.log(document.getElementById('mockIn').value);
}

document.getElementById('mockIn').addEventListener('click', function() {
    document.getElementById('mockIn').value = '';
});