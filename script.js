function validateForm() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;

    const nameError = document.getElementById(
        "name-error"
    );
    const surnameError = document.getElementById(
        "surname-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const subjectError = document.getElementById(
        "subject-error"
    );

    nameError.textContent = "";
    surnameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Lütfen adınızı doğru giriniz.";
        isValid = false;
    }

    if (surname === "" || /\d/.test(surname)) {
        nameError.textContent =
            "Lütfen soyadınızı doğru giriniz.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Lütfen geçerli bir email adresi girin.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent =
            "Bir mesaj giriniz.";
        isValid = false;
    }

    if (isValid) {
        alert("Form başarıyla gönderildi!");
    }

    return isValid;

}





