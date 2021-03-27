window.addEventListener("load", () => {
    document.querySelector("html").style.overflowY = "auto", document.querySelector(".loader").style.display = "none", document.querySelectorAll(".animatedWait").forEach(e => {
        e.classList.remove("animatedWait")
    })
}), document.querySelector(".nav span").addEventListener("click", () => {
    document.querySelector("#myMenu").classList.toggle("slide")
}), document.querySelectorAll(".nav li a").forEach(e => {
    e.addEventListener("click", () => {
        document.querySelector("#myMenu").classList.toggle("slide")
    })
}), document.querySelectorAll("a").forEach(e => {
    var t = e.getAttribute("href");
    t && t.includes("#") && e.addEventListener("click", e => {
        e.preventDefault(), document.getElementById(t.replace(/#/g, "")).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    })
});