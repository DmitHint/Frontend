let username = prompt("Введите логин:");

if (username === "admin") {
    let password = prompt("Введите пароль:");

    if (password === "admin") {
        alert("Здравствуйте!");
    } else if (password === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }

} else if (username === null || username === "") {
    alert("Отменено");
} else {
    alert("Пользователь не найден");
}

function checkRegistration() {
    var answer = prompt("Желаете пройти регистрацию на сайте? (Да/Нет)");

    if (answer !== null) {
        if (answer.toLowerCase() === "да") {
            alert("Круто!");
        } else {
            alert("Попробуй ещё раз");
        }
    }
}