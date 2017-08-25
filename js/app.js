inputEl = document.getElementById("input");
outputEl = document.getElementById("output");

function ioText() {
    inputText = input.value;
    if (inputText != "") {
        if (document.getElementById("trim").checked) {
            inputText = inputText.trim();
            outputEl.value = inputText;
        }
        if (document.getElementById("linebreaks").checked) {
            inputText = inputText.replace(/(\r\n|\n|\r)/gm, " ");
            outputEl.value = inputText;
        }
        if (document.getElementById("double").checked) {
            inputText = inputText.replace(/\s\s+/g, " ");
            outputEl.value = inputText;
        }
    } else {
        alert("The input is sad and empty.");
    }
}