let qHeads = document.querySelectorAll(".qHead")
let paragraphs = document.querySelectorAll("p")
let images = document.querySelectorAll(".qHead img")
let buttons = document.querySelectorAll("button")

for (let i=0; i<buttons.length; i++) {
    let button = buttons[i]
    let image = images[i]
    let paragraph = paragraphs[i]
    button.addEventListener("click", function(){
        closeAll(i)
        paragraph.classList.toggle("hidden")
        if (image.src.includes('minus')) {
            image.src="./assets/images/icon-plus.svg" 
        } else {
            image.src="./assets/images/icon-minus.svg"
        }
    })
}


function closeAll(except) {
    paragraphs.forEach((p, i) => {
        if (i === except) return
        p.classList.add('hidden')
        images[i].src = "./assets/images/icon-plus.svg" 
    })
}