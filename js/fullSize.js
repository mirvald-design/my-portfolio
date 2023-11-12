function openFullSize(img) {
    // Блокируем прокрутку фона
    document.body.style.overflow = 'hidden';

    // Создаем модальное окно
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    // Создаем иконку закрытия (крестик)
    var closeButton = document.createElement("span");
    closeButton.innerHTML = "&#10005;";
    closeButton.style.position = "absolute";
    closeButton.style.top = "20px";
    closeButton.style.right = "35px";
    closeButton.style.color = "white";
    closeButton.style.fontSize = "40px";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = function() {
        modal.remove();
        document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
    };

    // Создаем копию изображения для модального окна
    var fullSizeImage = new Image();
    fullSizeImage.src = img.src;
    fullSizeImage.style.maxWidth = "90%";
    fullSizeImage.style.maxHeight = "90%";

    modal.appendChild(closeButton);
    modal.appendChild(fullSizeImage);
    document.body.appendChild(modal);
}
