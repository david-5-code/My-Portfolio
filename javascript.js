const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function () {
    document.body.classList.toggle("white-mode", this.checked);
});


function copyText(text) {
    navigator.clipboard.writeText(text);

    document.getElementById("copied").style.display = "block";

    setTimeout(function() {
        document.getElementById("copied").style.display = "none";
    }, 1500);
}

