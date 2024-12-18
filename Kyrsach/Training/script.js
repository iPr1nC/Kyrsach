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


// Изображения (Гифки спреев от комаров)
const weaponList = document.getElementById('weapon-list');
const gifContainer = document.getElementById('gif-container');

weaponList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const gifPath = event.target.dataset.gif;
    if (gifPath) {
      gifContainer.innerHTML = `<img src="${gifPath}" alt="Спрей ${event.target.textContent}">`;
    } else {
      gifContainer.innerHTML = ''; // Очищаем контейнер, если gif не найден
      console.error('GIF-файл не найден для:', event.target.textContent);
    }
  }
});

