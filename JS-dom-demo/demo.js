let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameInputElement);

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters <= 10) {
        productNameInputElement.classList.add("warning");
    }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
