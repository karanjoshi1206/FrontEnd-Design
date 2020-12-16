var web = document.getElementById("web")
var app = document.getElementById("app")
var ai = document.getElementById("ai")
var ml = document.getElementById("ml")
var robo = document.getElementById("robo")
var heading = document.getElementById("heading")
function webf() {

    web.style.display = "grid"
    app.style.display = "none"
    ai.style.display = "none"
    ml.style.display = "none"
    robo.style.display = "none"
    heading.innerText = "Web Development Projects"

}
function appf() {

    web.style.display = "none"
    app.style.display = "grid"
    ai.style.display = "none"
    ml.style.display = "none"
    robo.style.display = "none"
    heading.innerText = "App Development Projects"


}
function aif() {
    web.style.display = "none"
    app.style.display = "none"
    ai.style.display = "grid"
    ml.style.display = "none"
    robo.style.display = "none"
    heading.innerText = "Artificial Intelligience Projects"


}
function robof() {



    web.style.display = "none"
    app.style.display = "none"
    ai.style.display = "none"
    ml.style.display = "none"
    robo.style.display = "grid"
    heading.innerText = "Robotics Projects"


}
function mlf() {



    web.style.display = "none"
    app.style.display = "none"
    ai.style.display = "none"
    ml.style.display = "grid"
    robo.style.display = "none"
    heading.innerText = "Machine Learning Projects"


}


bar = document.getElementById("toggle").addEventListener("click", () => {
    nav = document.getElementById("nav").classList.toggle("active");
    hid = document.getElementById("hid").classList.toggle("active");

})
