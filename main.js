inputEl = document.getElementById('input');
outputEl = document.getElementById('output');

function ioText(x) {
    inputText = input.value;
    if (inputText != '') {
        if (x == 'clean') {
            inputText = inputText.trim();
            inputText = inputText.replace(/(\r\n|\n|\r)/gm, ' ');
            inputText = inputText.replace(/\s\s+/g, ' ');
            outputEl.value = inputText;
        } else if (x == 'encode') {
            inputText = encodeURIComponent(inputText);
            outputEl.value = inputText;
        } else if (x == 'decode') {
            inputText = decodeURIComponent(inputText);
            outputEl.value = inputText;
        } else if (x == 'swap') {
            inputText = inputText.replace(/'/g, '---');
            inputText = inputText.replace(/"/g, '\'');
            inputText = inputText.replace(/---/g, '"');
            outputEl.value = inputText;
        } else {
            outputEl.value = 'The input field is empty.';
        }
    }
}