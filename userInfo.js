(() => {
    let currentUser = window.localStorage.getItem("currentUser");

    let username = document.querySelector(".username");
    if (username != null) {
        username.innerHTML = currentUser.split("@")[0];
    }

    let email = document.querySelector(".email");
    if (email != null) {
        email.innerHTML = currentUser;
    }
})();
