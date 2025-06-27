function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        alert("succes");
    } else {
        alert("failed");
        return;
    }
    console.log("User logged in");
}