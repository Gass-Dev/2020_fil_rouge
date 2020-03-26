var header = document.getElementById('js-amine-header')
var color = document.getElementById('color')
var containerLogo = document.getElementById('js-amine-container-logo')
var logo = containerLogo.children[0]

toggle.addEventListener('click', function(){
    if(etat){
        header.classList.add('change-header')

        color.classList.add('change-color')
        color.classList.remove('color')

        containerLogo.classList.add('change-container-logo')
        logo.classList.add('change-logo')
    }else if(!etat){
        header.classList.remove('change-header')

        color.classList.remove('change-color')
        color.classList.add('color')

        containerLogo.classList.remove('change-container-logo')
        logo.classList.remove('change-logo')
    }
})

var nav = document.getElementById('js-amine-scroll')

window.addEventListener('scroll', function(){
    if(window.innerWidth > 1080){
        if(document.documentElement.scrollTop >= 912 || document.body.scrollTop >= 912){
                nav.classList.add('change-nav-scroll')  
        }
    }
})