const username = document.getElementById("username");
const password = document.getElementById("password");
const resp = document.getElementById("resp");
const submit = document.getElementById("login");

const testLogin = (e) => {
    if(username.value === 'test' && password.value === '12345678'){
        // resp.innerHTML = "LOGIN SUCCESSFUL";
        location.href = "./index.html";
    } else {
        resp.innerHTML = "LOGIN FAILED";
    }
}

submit.addEventListener("click", testLogin);