var containerToggle = document.getElementById('container-toggle')
var toggle = document.getElementById('toggle')
var etat = false

toggle.addEventListener('click', function(){
    etat = !etat
    if(etat){
        this.classList.remove('anim-toggle-false')
        this.classList.add('anim-toggle-true')
        this.style.backgroundColor = '#5ddf5d'
    }else if(!etat){
        this.classList.remove('anim-toggle-true')
        this.classList.add('anim-toggle-false')
        this.style.backgroundColor = "rgb(184, 184, 184)"
    }
})