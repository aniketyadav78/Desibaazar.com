function validate() {
    let enter = document.querySelector('#enter').value.trim();
    let msg = document.querySelector('#text');

    msg.style.color = "red";
    msg.style.fontSize = "14px";

    // Empty input check
    if (enter === "") {
        msg.innerText = "Please enter email or mobile number!";
        return false;
    }

    // Mobile number check
    if (!isNaN(enter)) {
        if (enter.length !== 10) {
            msg.innerText = "Enter valid 10-digit mobile number!";
            return false;
        }

        msg.innerText = "";
        goToNextPage();
        return false;
    }

    // Gmail check
    if (!enter.includes('@') || !enter.endsWith('@gmail.com')) {
        msg.innerText = "Enter valid Gmail ID!";
        return false;
    }

    msg.innerText = "";
    goToNextPage();
    return false;
}

// Next Page Redirect
function goToNextPage() {
    window.location.href = "enter.html";
}
