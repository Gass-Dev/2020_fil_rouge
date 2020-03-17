var button = document.getElementById('button-nav')
var etat = false
button.addEventListener('click', function(){
    etat = !etat
    var nav = document.getElementById('cont-options')
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
})