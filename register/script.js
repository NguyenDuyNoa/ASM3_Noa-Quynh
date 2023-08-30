function validateEmail(email) {
    // Sử dụng biểu thức chính quy để kiểm tra địa chỉ email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateForm() {
    var studentId = document.getElementById("student-id").value;
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;

    var note = document.querySelector(".note").value;

    var studentIdError = document.getElementById("student-id-error");
    var fullNameError = document.getElementById("full-name-error");
    var emailError = document.getElementById("email-error");
    var genderError = document.getElementById("gender-error");
    var hobbyError = document.getElementById("hobby-error");
    var countryError = document.getElementById("country-error");
    var noteError = document.getElementById("note-error");

    // Reset all error messages
    studentIdError.innerText = "";
    fullNameError.innerText = "";
    emailError.innerText = "";
    genderError.innerText = "";
    hobbyError.innerText = "";
    countryError.innerText = "";
    // Clear any previous error styles
    studentIdError.style.display = "none";
    fullNameError.style.display = "none";
    emailError.style.display = "none";
    genderError.style.display = "none";
    hobbyError.style.display = "none";
    countryError.style.display = "none";

    var hasErrors = false;

    if (studentId.trim() === '') {
        studentIdError.innerText = "Vui lòng nhập mã sinh viên!";
        studentIdError.style.display = "block";
        hasErrors = true;
    }

    if (fullName.trim() === '') {
        fullNameError.innerText = "Vui lòng nhập họ và tên!";
        fullNameError.style.display = "block";
        hasErrors = true;
    }

    if (email.trim() === '') {
        emailError.innerText = "Vui lòng nhập địa chỉ email!";
        emailError.style.display = "block";
        hasErrors = true;
    } else if (!validateEmail(email)) {
        emailError.innerText = "Địa chỉ email không hợp lệ!";
        emailError.style.display = "block";
        hasErrors = true;
    }

    var selectedGender = document.querySelector('input[name="gender"]:checked');
    if (!selectedGender) {
        genderError.innerText = "Vui lòng chọn giới tính!";
        genderError.style.display = "block";
        hasErrors = true;
    }

    var selectedHobbies = document.querySelectorAll('input[name="hobby"]:checked');
    if (selectedHobbies.length === 0) {
        hobbyError.innerText = "Vui lòng chọn ít nhất một sở thích!";
        hobbyError.style.display = "block";
        hasErrors = true;
    }

    var selectedCountry = document.getElementById("country").value;
    if (selectedCountry === '') {
        countryError.innerText = "Vui lòng chọn quốc tịch!";
        countryError.style.display = "block";
        hasErrors = true;
    }

    if (note.length > 200) {
        noteError.innerText = "Ghi chú không được vượt quá 200 ký tự!";
        noteError.style.display = "block";
        hasErrors = true;
    }
}