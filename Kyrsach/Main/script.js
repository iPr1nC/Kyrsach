document.addEventListener('DOMContentLoaded', function() 
{
    // Кнопка "Поиска"
    const icon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');

    icon.onclick = function() {
        searchBar.classList.toggle('active');
    };
    /////////////////////////////////////////////////////

    //Работа крестика в поиске
    const clear = document.querySelector('.clear');

    clear.onclick = function() {
        document.getElementById('input-skript').value = '';
    };

/////////////////////////////////////////////////////////////////////////////////////////////
    // Выдвижные панельки
    const feature__info1 = document.getElementById('feature__info1');
    
    feature__info1.onclick = function() {
        feature__info1.classList.toggle('active');
    };

    const feature__inf2 = document.getElementById('feature__info2');
    
    feature__info2.onclick = function() {
        feature__info2.classList.toggle('active');
    };

    const feature__info3 = document.getElementById('feature__info3');
    
    feature__info3.onclick = function() {
        feature__info3.classList.toggle('active');
    };

////////////////////////////////////////////////////////////////////////////////////////
    // Кнопка "Просмотреть статистику"
    const viewStatsButton = document.getElementById('view-stats');
    if (viewStatsButton) {
        viewStatsButton.addEventListener('click', function() {
            // Переход на страницу со статистикой
            window.location.href = './Public Stats/Stats.html'; // Замените 'stats.html' на URL вашей страницы
        });
    }

    // Кнопка "Начать тренировку"
    const startTrainingButton = document.getElementById('start-training');
    if (startTrainingButton) {
        startTrainingButton.addEventListener('click', function() {
            // Переход на страницу с тренировкой
            window.location.href = './Training/Training.html'; // Замените 'training.html' на URL вашей страницы
        });
    }

    // Ссылка "Авторизация"
    const authLink = document.getElementById('auth-link');
    if (authLink) {
        authLink.addEventListener('click', function(event) {
            // Предотвращение перехода по умолчанию (если вы хотите обрабатывать авторизацию на этой же странице)
            event.preventDefault();
            // Ваш код для обработки авторизации
            window.location.href = './Login and Password/LogPass.html';
            //alert('Авторизация будет реализована позже.'); // Замените на ваш код
        });
    }

    //Вывод таблички в инфо:

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const tableBody = document.getElementById('table-body');
    data.forEach(player => {
      const row = tableBody.insertRow();
      const nameCell = row.insertCell();
      const killsCell = row.insertCell();
      const deathsCell = row.insertCell();
      const assistsCell = row.insertCell();

      nameCell.textContent = player.name;
      killsCell.textContent = player.kills;
      deathsCell.textContent = player.deaths;
      assistsCell.textContent = player.assists;
    });
  })
  .catch(error => console.error('Ошибка при загрузке данных:', error));
        
});

