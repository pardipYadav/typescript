"use strict";
function getInfo() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const addressInput = document.getElementById("address");
    const address = addressInput.value;
    console.log(name, email, address);
}
