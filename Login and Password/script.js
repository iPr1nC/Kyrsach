document.addEventListener('DOMContentLoaded', function() 
{
	const authLink = document.getElementById('remember-link');
    if (authLink) {
        authLink.addEventListener('click', function(event) {
            // Предотвращение перехода по умолчанию (если вы хотите обрабатывать авторизацию на этой же странице)
            event.preventDefault();
            // Ваш код для обработки авторизации
            alert('Ну блин, абидна :('); // Замените на ваш код
        });
    }

    const registerClick = document.getElementById('register-click');
    if (registerClick) {
        registerClick.addEventListener('click', function(event) {
            // Предотвращение перехода по умолчанию (если вы хотите обрабатывать авторизацию на этой же странице)
            event.preventDefault();
            // Ваш код для обработки авторизации
            window.location.href = '../Registration/Registration.html' // Замените на ваш код
        });
    }
});