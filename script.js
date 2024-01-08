document.addEventListener("keydown", function (event) {
  displayKeyCode(event);
});

document
  .getElementById("keyInput")
  .addEventListener("keydown", function (event) {
    displayKeyCode(event);
  });

function displayKeyCode(event) {
  const keyCode = event.keyCode || event.which;
  const key = event.key;
  const charCode = event.charCode || keyCode;

  document.getElementById("keyCode").textContent = keyCode;
  document.getElementById("key").textContent = key;
  document.getElementById("charCode").textContent = charCode;
}
