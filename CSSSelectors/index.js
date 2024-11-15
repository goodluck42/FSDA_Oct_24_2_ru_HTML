document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#js-hint").addEventListener("click", function (event) {
        this.classList.toggle("active");
    });
});