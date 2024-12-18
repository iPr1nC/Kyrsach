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
    const Arrow_1 = document.getElementById('Arrow_1');
    const feature__info1 = document.getElementById('feature__info1');
    
    Arrow_1.onclick = function() {
        feature__info1.classList.toggle('active');
        Arrow_1.classList.toggle('active')
    };

    const Arrow_2 = document.getElementById('Arrow_2');
    const feature__info2 = document.getElementById('feature__info2');
    
    Arrow_2.onclick = function() {
        feature__info2.classList.toggle('active');
        Arrow_2.classList.toggle('active')
    };

    const Arrow_3 = document.getElementById('Arrow_3');
    const feature__info3 = document.getElementById('feature__info3');
    
    Arrow_3.onclick = function() {
        feature__info3.classList.toggle('active');
        Arrow_3.classList.toggle('active')
    };

/////////////////////////////////////////////////////////////////////////////////////////
    //Смена таблиц
    const Arrow_KDA = document.getElementById('Arrow_KDA');
    const Arrow_Stats = document.getElementById('Arrow_Stats');
    const Info__KDA = document.getElementById('Info__KDA');
    const Info__Stats = document.getElementById('Info__Stats');
    
    Arrow_KDA.onclick = function() {
        Info__KDA.classList.toggle('active');
        Info__Stats.classList.toggle('active');
    };

    Arrow_Stats.onclick = function() {
        Info__Stats.classList.toggle('active');
        Info__KDA.classList.toggle('active');
    };

////////////////////////////////////////////////////////////////////////////////////////
    // Кнопка "Просмотреть статистику"
    const viewStatsButton = document.getElementById('view-stats');
    if (viewStatsButton) {
        viewStatsButton.addEventListener('click', function() {
            // Переход на страницу со статистикой
            window.location.href = './Login and Password/LogPass.html'; 
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
            event.preventDefault();
            window.location.href = './Login and Password/LogPass.html';
        });
    }


//////////////////////////////////////////////////////////////////////////////////////////
    //Вывод таблички в Stats:

fetch('./Data/maps_stats.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('table-body-Stats');
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


        /////Вывод таблицы в KDA//////////////
fetch('./Data/KDA.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('table-body-KDA');
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
        


//////////////////Рекомендаций////////////////////////////////////////////
const benchmarkStats = {
  kda: 1.5,
  accuracy: 65,
  kills: 20
};

async function updatePlayerStats(playerName) {
  try {
    const response = await fetch('./Data/player_data.json');
    const data = await response.json();
    const player = data.players.find(player => player.name.toLowerCase() === playerName.toLowerCase());

    if (player) {
      document.querySelector('.player-name').textContent = player.name;
      document.querySelector('.kda').textContent = player.kda;
      document.querySelector('.accuracy').textContent = player.accuracy + '%';
      document.querySelector('.kills').textContent = player.kills;

      const playerPercentage = calculatePercentage(player, benchmarkStats);

      document.querySelector('.kda-percentage').textContent = playerPercentage.kda;
      document.querySelector('.accuracy-percentage').textContent = playerPercentage.accuracy;
      document.querySelector('.kills-percentage').textContent = playerPercentage.kills;

      const adviceElement = document.querySelector('.player-advice p');
      adviceElement.textContent = `${player.advice} \n Ваше KDA изменилось на ${playerPercentage.kda}%, точность на ${playerPercentage.accuracy}% , а количество убийств на ${playerPercentage.kills}%.`;

    } else {
      console.error('Игрок не найден:', playerName);
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
}

function calculatePercentage(playerStats, benchmarkStats) {
  return {
    kda: calculateSinglePercentage(playerStats.kda, benchmarkStats.kda),
    accuracy: calculateSinglePercentage(playerStats.accuracy, benchmarkStats.accuracy),
    kills: calculateSinglePercentage(playerStats.kills, benchmarkStats.kills)
  };
}

function calculateSinglePercentage(playerValue, benchmarkValue) {
  const difference = playerValue - benchmarkValue;
  return (difference / benchmarkValue * 100).toFixed(0);
}


// Пример использования:
updatePlayerStats('Cotyara1337');

    // Обработчик события для стрелки (добавьте это в ваш существующий код)
    const arrow = document.getElementById('arrow-2');
    arrow.addEventListener('click', () => {
      // ваш код для показа/скрытия Info-Recommendations
    });





//////////////////Графики////////////////////////////////////////////

});

