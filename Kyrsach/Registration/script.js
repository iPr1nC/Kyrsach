let nameInput = document.querySelector("#name");
let loginInput = document.querySelector("#login");
let passwordInput = document.querySelector("#password");
let submitButton = document.querySelector("#register-click");
let users = [];
let nextUserId = 0;

function User(name, login, password) {
  this.name = name;
  this.login = login;
  this.password = password;
  this.id = 0;
}

submitButton.addEventListener('click', () => {
  const nameUser = nameInput.value.trim();
  const loginUser = loginInput.value.trim();
  const passwordUser = passwordInput.value.trim();

  if (!nameUser || !loginUser || !passwordUser) {
    alert("Заполните все поля!");
    return;
  }

  const user = new User(nameUser, loginUser, passwordUser);
  user.id = nextUserId++;
  users.push(user);

  users.forEach(user => console.log(user));

  localStorage.setItem('users', JSON.stringify(users));

  window.location.href = "../Main/index.html"; // Перенаправление на главную страницу
});

// Загрузка данных из localStorage при загрузке страницы
window.addEventListener('load', () => {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    users = JSON.parse(storedUsers);
    nextUserId = users.length;
  }
});
