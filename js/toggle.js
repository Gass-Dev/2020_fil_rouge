var containerToggle = document.getElementById('container-toggle')
var toggle = document.getElementById('toggle')
var etat = false

if(localStorage.getItem('toggle') == true){
    toggle.classList.remove('anim-toggle-false')
    toggle.classList.add('anim-toggle-true')
    toggle.style.backgroundColor = '#090D0F'
}

toggle.addEventListener('click', function(){
    etat = !etat
    localStorage.setItem('toggle', etat)
    if(etat){
        this.classList.remove('anim-toggle-false')
        this.classList.add('anim-toggle-true')
        this.style.backgroundColor = '#090D0F'
    }else if(!etat){
        this.classList.remove('anim-toggle-true')
        this.classList.add('anim-toggle-false')
        this.style.backgroundColor = "rgb(184, 184, 184)"
    }
})
