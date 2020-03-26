var button = document.getElementById('button-nav')
var etat2 = false

button.addEventListener('click', function(){
    etat2 = !etat2
    var rsContaine = document.getElementById('js-amine-rs')
    var nav = document.getElementById('cont-options')
    if(etat2 == true){
        nav.classList.remove('anim-nav-hidden')
        nav.classList.add('anim-nav-visible')

        this.classList.remove("anim-nav-button-rigth")
        this.classList.add('anim-nav-button-left')

        rsContaine.classList.remove('anim-rs-hidden')
        rsContaine.classList.add('anim-rs-visible')
        
    }else if(etat2 == false){
        nav.classList.remove('anim-nav-visible')
        nav.classList.add('anim-nav-hidden')

        this.classList.remove('anim-nav-button-left')
        this.classList.add("anim-nav-button-rigth")

        rsContaine.classList.remove('anim-rs-visible')
        rsContaine.classList.add('anim-rs-hidden')
    }
}, false)