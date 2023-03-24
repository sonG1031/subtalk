function validateEmail(email) {
    var re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

const check_valid = () => {
    let [id, pw] = document.querySelectorAll("#login-form input");
    let form = document.querySelector("#login-form");

    if (!validateEmail(id.value)) {
        window.location.href = "";
        return;
    }

    if (window.localStorage.getItem(id.value) == pw.value) {
        window.localStorage.setItem("currentUser", id.value);
        form.action = "friends.html";
    } else {
        window.location.href = "";
        // let alertText = document.querySelector(".alert span");
        // alertText.innerHTML = "이메일 또는 비밀번호가 올바르지 않습니다.";
        return;
    }
};

const signUp = () => {
    let [id, phone, name, pw] = document.querySelectorAll(".signup input");
    let form = document.querySelector(".signup");

    if (
        !validateEmail(id.value) ||
        window.localStorage.getItem(id.value) != null
    ) {
        window.location.href = "";
        return;
    }
    window.localStorage.setItem(id.value, pw.value);
    form.action = "index.html";
};
