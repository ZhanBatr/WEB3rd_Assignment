
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let hasErrors = false;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        hasErrors = true;
    }

    const email = emailInput.value.trim();
    if (email === "") {
        emailError.textContent = "Email is required.";
        hasErrors = true;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format.";
        hasErrors = true;
    }

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        hasErrors = true;
    }

    if (!hasErrors) {
        alert("Form submitted successfully!");
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}