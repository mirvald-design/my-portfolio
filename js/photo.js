// Открыть модальное окно
function openModal(imageSrc, caption) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalImg.alt = caption;
  }
  
  // Закрыть модальное окно
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  