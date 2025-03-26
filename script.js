document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.squiggly-doo-da').forEach((element) => {
        element.setAttribute('data-text', element.innerText);
    });
});
