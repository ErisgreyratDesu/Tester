addEventListener("keydown", (e) => {
    if(e.key === "Enter" ) {
        submit();
    }
});
function change_model() {
    const halfForm = document.querySelector('.half_form');
    const particleOne = document.querySelector('.particle');
    halfForm.classList.toggle('active');
    particleOne.classList.toggle('active');
}
function submit() {
    const userInputedName = document.getElementById('userInput_login');
    const labelSay = document.getElementById('label_login');
    const userPassInputed =document.getElementById('userPass');

    function showMessage(message) {
        labelSay.style.color = 'red';
        labelSay.innerHTML = message;
        setTimeout(() => {
            labelSay.style.color = 'grey';
            labelSay.innerHTML = 'Email or phone number';
        }, 4000);
    }

    if (userInputedName.value === "") {
        showMessage('Please do not let blank');
    } else if (!userInputedName.value.includes('@')) {
        showMessage('Email must contain @');
    } else {
        userPassInputed.style.display = 'block';
    }
}

