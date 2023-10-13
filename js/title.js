document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll(".title .animated");

    function animateSpans(index) {
        if (index < spans.length) {
            setTimeout(function() {
                spans[index].classList.add("active");
                animateSpans(index + 1);
            }, 200); // Задержка в 0.5 секунды между появлениями элементов
        }
    }

    animateSpans(0);
});
