var web = document.getElementById("web")
var app = document.getElementById("app")
var ai = document.getElementById("ai")
var ml = document.getElementById("ml")
var robo = document.getElementById("robo")
var heading = document.getElementById("heading")
var about = document.getElementById("about")
function webf() {

    web.style.display = "grid"
    app.style.display = "none"
    ai.style.display = "none"
    ml.style.display = "none"
    robo.style.display = "none"
    heading.innerText = "Web Development Projects"
    about.innerText = ` In the modern era, we have become extremely reliable on websites, from making friends to ordering clothes to
    entertainment. Web Development is one of the early fields of web-based technology that has not lost its
    importance in the sands of time. Websites based companies, to maintain themselves in the run require to keep on
    adapting to changes, making web development one of the most active fields. Web Development not only includes the
    pages we see(frontend), but it also includes the functioning embed on those websites(backend).`

}
function appf() {

    web.style.display = "none"
    app.style.display = "grid"
    ai.style.display = "none"
    ml.style.display = "none"
    robo.style.display = "none"
    heading.innerText = "App Development Projects"
    about.innerText = `Mobile Phones have replaced most of the technologies, like mp3 players, TVs, and to some extend computers, the reason being the variety of applications and web apps that run on them. Apps are not only for mobile phones but also for computers and other such technologies. The development of apps and maintaining them is one of the most interesting fields that one can come across. Working with the User Interface to developing the app for public use is one of the most entertaining journeys.`


}
function aif() {
    web.style.display = "none"
    app.style.display = "none"
    ai.style.display = "grid"
    ml.style.display = "none"
    robo.style.display = "none"
    heading.innerText = "Artificial Intelligience Projects"
    about.innerText = `From seeing JARVIS in movies to creating one as your personal assistant. Artificial Intelligence(AI) has expanded its range from being a test subject for chess competitors to replacing psychologists in real life. AI refers to the simulation of human actions by machines. These actions include things like learning from past actions and making new decisions based on experience. AI is a field still under development and hence has a lot of working options. Modern offices are automated offices, which is one of the applications for AI.`

}
function robof() {



    web.style.display = "none"
    app.style.display = "none"
    ai.style.display = "none"
    ml.style.display = "none"
    robo.style.display = "grid"
    heading.innerText = "Robotics Projects"

    about.innerText = `Humans have been creating machines to do their work. Robotics is one of the applications of these fields. It involves the conception, design, manufacture, and operation of robots. Robotics is creating machines that can perform human actions such as walking, running, speaking, etc. Robotics has various applications in itself that reveal when one starts to work in this field.`
}
function mlf() {



    web.style.display = "none"
    app.style.display = "none"
    ai.style.display = "none"
    ml.style.display = "grid"
    robo.style.display = "none"
    heading.innerText = "Machine Learning Projects"
    about.innerText = `Machine learning is a sub-part of Artificial Intelligence. Machine learning is the field of study that gives computers the capability to learn without being explicitly programmed.`

}


bar = document.getElementById("toggle").addEventListener("click", () => {
    nav = document.getElementById("nav").classList.toggle("active");
    hid = document.getElementById("hid").classList.toggle("active");

})
