
var button = document.getElementById('button-toggle')
var contentButton = document.getElementById('content-button-toggle')
var etat = false
button.addEventListener('click', changeToggle)

function changeToggle(){
    etat = !etat
    if(etat){
        this.classList.add("anim-button-toggle-true")
        this.classList.remove("anim-button-toggle-false")
        setTimeout(() => {
            contentButton.style.backgroundColor = "#96ed98"
        }, 250)
        
    }else if(!etat){
        this.classList.add("anim-button-toggle-false")
        this.classList.remove("anim-button-toggle-true")
        contentButton.style.backgroundColor = "#e0e0e0"
    }
}