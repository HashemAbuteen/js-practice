function validatePassword(password) {
    if (password.length > 7) {
        return "Strong";
    } else {
        return "Weak";
    }
}

function validatePassword2(password) {
    return password.length > 7 ? "Strong" : "Weak";
}

function validatePassword3(password) {
    return (password.length > 7) && "Strong" || "Weak";
}

function validatePassword4(password) {
    var hasUpperCase = false;
    for (var i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase() && password[i] !== password[i].toLowerCase()) {
            hasUpperCase = true;
            break;
        }
    }

    if (password.length > 7 && hasUpperCase) {
        return "Very Strong";
    } else if (password.length >= 7) {
        return "Strong";
    } else {
        return "Weak";
    }
}

