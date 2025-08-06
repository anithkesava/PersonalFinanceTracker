class ButtonAccessible{
    constructor(user, pass, loginbtn) {
        this.username = user;
        this.password = pass;
        this.login = loginbtn;
    }

    inputfieldHavefilled() {
        if (this.username.value.trim() === "" || this.password.value.trim() === "") {
            this.login.disabled = true;
        } else {
            this.login.disabled = false;
        }
    }
    accessBtn() {
        this.username.addEventListener('input', () => this.inputfieldHavefilled());
        this.password.addEventListener('input', () => this.inputfieldHavefilled());
    }
}

const username = document.getElementById('username');
const password = document.getElementById('password');
const loginbutton = document.getElementById('loginbtn');
const accessiblebutton = new ButtonAccessible(username, password, loginbutton);
accessiblebutton.accessBtn();