document.addEventListener('DOMContentLoaded', function() {
    fetchShots();
});

function fetchShots() {
    const accessToken = '67761d707b57cfcb2a0351dcdba88f76254033dd3ac2a10fdf49fc3bc1a0aeca'; // Замените на ваш фактический токен доступа
    const apiUrl = `https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(shots => {
            const shotsContainer = document.getElementById('shots');
            
            if (Array.isArray(shots)) {
                shots.forEach(shot => {
                    const shotElement = document.createElement('div');
                    shotElement.className = 'shot';
                    shotElement.innerHTML = `
                        <a href="${shot.html_url}" target="_blank">
                            <img src="${shot.images.normal}" alt="Dribbble Shot">
                        </a>
                        
                    `;
                    shotsContainer.appendChild(shotElement);
                });
            } else {
                shotsContainer.innerHTML = '<p>Нет доступных шотов для отображения.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching Dribbble shots:', error);
            const shotsContainer = document.getElementById('shots');
            shotsContainer.innerHTML = `<p>Произошла ошибка при загрузке шотов: ${error.message}</p>`;
        });
}
