const typing = document.querySelector(".typing")
new Typewriter(typing, {
    loop: true,
    deleteSpeed: 60
})
.changeDelay(30)
.typeString('Web Designer')
.pauseFor(300)
.typeString('Graphic Designer')
.pauseFor(300)
.typeString('Web Developer')
.pauseFor(300)
.typeString('Youtuber')
.pauseFor(300)
.start()