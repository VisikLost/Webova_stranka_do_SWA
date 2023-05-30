let hamburger = document.querySelector(".hamburger")
let list = document.querySelector(".list-js")
let li = document.querySelectorAll(".js-li")
let icon = document.querySelector(".home-icon")

hamburger.addEventListener("click", function(event){
    if(list.style.display == "none"){
        list.style.display = "block"

        hamburger.style.position = "absolute"

        list.style.float = "none"
        console.log(li)
        for(let i of li){
            i.style.display = "block"
        }
    } else {
        list.style.display = "none"
        for(let i of li){
            i.style.display = "inline-block"
        }
        hamburger.style.position = "relative"

        list.style.float = "right"
    }
})