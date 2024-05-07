const logButton = document.querySelector(".login");
const signButton = document.querySelector(".sign");
const containerForm = document.querySelector(".container-form");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

logButton.addEventListener("click", function () {
    containerForm.style.left = "0%";
    right.style.right = "-80%";
    left.style.left = "20%";
});

signButton.addEventListener("click", function () {
    containerForm.style.left = "50%";
    left.style.left = "-80%";
    right.style.right = "20%";
});
