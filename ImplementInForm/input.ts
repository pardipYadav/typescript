function getInfo() {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const name: string = nameInput.value;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const email: string = emailInput.value;
  const addressInput = document.getElementById("address") as HTMLInputElement;
  const address: string = addressInput.value;
  console.log(name, email, address);
}
