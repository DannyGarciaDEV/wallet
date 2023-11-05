const cardWidget = document.querySelector("#cardWidget");
const walletIcon = document.querySelector("#walletIcon");

// Function to open the widget
walletIcon.addEventListener('click', () => {
    cardWidget.style.display = "block";
});

// Function to close the widget
function closeWidget() {
    cardWidget.style.display = "none";
}

function addCard() {
    // Get the card number, cardholder name, and expiration date input values
    var cardNumber = document.getElementById("cardNumber").value;
    var cardHolderName = document.getElementById("cardHolderName").value;
    var expirationDate = document.getElementById("expirationDate").value;
    var cardInfo = document.querySelector(".credit-card");
    var cardLogo = document.querySelector(".card-logo img");
    var cardNumberElement = document.querySelector(".card-number");
    var cardHolderElement = document.querySelector(".card-holder");
    var cardExpiryElement = document.querySelector(".card-expiry");

    var mastercardPattern = /^(5[1-5]\d{14})$/;
    var visaPattern = /^(4\d{15})$/;
    var amexPattern = /^(3[47]\d{13})$/;
    var boaPattern = /^(4[5]\d{15})$/;
    var tdPattern = /^(4[6]\d{15})$/;

    if (mastercardPattern.test(cardNumber)) {
        cardLogo.src = "mastercard.png"; // Replace with the actual MasterCard logo
        cardInfo.style.background = "linear-gradient(135deg, #4e54c8, #8f94fb)";
        cardNumberElement.textContent = "**** **** **** " + cardNumber.substr(-4);
        cardHolderElement.textContent = "Cardholder: " + cardHolderName;
        cardExpiryElement.textContent = "Expires: " + expirationDate;
        alert("Mastercard detected!");
    } else if (visaPattern.test(cardNumber)) {
        cardLogo.src = "visa.png"; // Replace with the actual Visa logo
        cardInfo.style.background = "linear-gradient(135deg, #1a4cf5, #00b5ff)";
        cardNumberElement.textContent = "**** **** **** " + cardNumber.substr(-4);
        cardHolderElement.textContent = "Cardholder: " + cardHolderName;
        cardExpiryElement.textContent = "Expires: " + expirationDate;
        alert("Visa detected!");
    } else if (amexPattern.test(cardNumber)) {
        cardLogo.src = "amex.png"; // Replace with the actual American Express logo
        cardInfo.style.background = "linear-gradient(135deg, #0099cc, #00ccff)";
        cardNumberElement.textContent = "**** **** **** " + cardNumber.substr(-4);
        cardHolderElement.textContent = "Cardholder: " + cardHolderName;
        cardExpiryElement.textContent = "Expires: " + expirationDate;
        alert("American Express detected!");
    } else if (boaPattern.test(cardNumber)) {
        cardLogo.src = "boa.png"; // Replace with the actual Bank of America logo
        cardInfo.style.background = "linear-gradient(135deg, #f56d00, #ffb800)";
        cardNumberElement.textContent = "**** **** **** " + cardNumber.substr(-4);
        cardHolderElement.textContent = "Cardholder: " + cardHolderName;
        cardExpiryElement.textContent = "Expires: " + expirationDate;
        alert("Bank of America card detected!");
    } else if (tdPattern.test(cardNumber)) {
        cardLogo.src = "td.png"; // Replace with the actual TD Bank logo
        cardInfo.style.background = "linear-gradient(135deg, #00cc66, #00ff99)";
        cardNumberElement.textContent = "**** **** **** " + cardNumber.substr(-4);
        cardHolderElement.textContent = "Cardholder: " + cardHolderName;
        cardExpiryElement.textContent = "Expires: " + expirationDate;
        alert("TD Bank card detected!");
    } else {
        alert("Card type not recognized.");
    }
}