document.addEventListener('DOMContentLoaded', function () {
    const box = document.querySelectorAll('.interactions box');
    const text = document.querySelectorAll('imgText');

    box.forEach((box , index) => {
        box.addEventListener('hover', function () {
            text.forEach(text => text.style.display = 'none');
            text[index].style.display = 'block';
        });
    });
});