const form = document.querySelector("#form");
const stringInputs = document.querySelectorAll(".string-input");
const pInputs = document.querySelectorAll(".p-integer");
const wInputs = document.querySelectorAll(".w-integer");


form.addEventListener("submit", evt => {
    if (!validateInputs()) evt.preventDefault();
});

const setError = (element, message) => {
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector(".error");

    errorDisplay.innerText = message;
    element.classList.add("error-border");
    element.classList.remove("success-border");
}

const setSuccess = (element) => {
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector(".error");

    errorDisplay.innerText = "";
    element.classList.remove("error-border");
    element.classList.add("success-border");
}

const validateInputs = () => {
    let isValid = true;

    stringInputs.forEach(element => {
        if (element.value.trim() === "") {
            setError(element, "This field is required!");
            isValid = false;
        } else {
            setSuccess(element);
        }
    });

    pInputs.forEach(element => {
        if (element.value.trim() === "") {
            setError(element, "This field is required!");
            isValid = false;
        } else if (element.value <= 0){
            setError(element, "Invalid Value");
            isValid = false;
        } else {
            setSuccess(element);
        }
    });

    wInputs.forEach(element => {
        if (element.value.trim() === "") {
            setError(element, "This field is required!");
            isValid = false;
        } else {
            setSuccess(element);
        }
    });

    return isValid;
}