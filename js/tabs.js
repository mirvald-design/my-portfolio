function openTab(tabName, element) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // скрываем все табы
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active"); // удаляем активный класс у всех табов
    }
    document.getElementById(tabName).style.display = "block"; // отображаем выбранный таб
    element.classList.add("active"); // добавляем активный класс к выбранному табу
}
