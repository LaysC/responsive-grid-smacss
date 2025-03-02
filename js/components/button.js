window.onscroll = function () {
    const button = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.classList.add("visible");
    } else {
        button.classList.remove("visible");
    }
};

document.getElementById("backToTop").onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
