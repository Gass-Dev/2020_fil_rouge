var button = document.getElementById('button-nav')
var etat = false
var nav = document.getElementById('cont-options')
button.addEventListener('click', function(){
    etat = !etat
    if(etat){
        nav.classList.remove('anim-nav-hidden')
        nav.classList.add('anim-nav-visible')

        this.classList.remove("anim-nav-button-rigth")
        this.classList.add('anim-nav-button-left')
        
    }else if(!etat){
        nav.classList.remove('anim-nav-visible')
        nav.classList.add('anim-nav-hidden')

        this.classList.remove('anim-nav-button-left')
        this.classList.add("anim-nav-button-rigth")
    }
}, false)