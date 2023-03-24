const check_valid = () => {
    if (window.localStorage.getItem("loginValid")) {
        location.href="friends.html";
    }
    else {
        let [id, pw] = document.querySelectorAll("#login-form input");
        if(validateEmail(id)) {
            window.localStorage.setItem(id, pw);
        }
        else {
            
        }
    }
    
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
};