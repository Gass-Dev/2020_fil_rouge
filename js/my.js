var containerNotreAgence = document.getElementById('js-my-notre-agence')
var colorTextNotreAgence = document.getElementById('js-my-title-agence')
var bambou = document.getElementById('js-my-bambou')
toggle.addEventListener('click', function() {
    if(etat == true){
        containerNotreAgence.classList.add('change-notre-agence')
        colorTextNotreAgence.classList.add('change-color-h3')
        bambou.classList.remove('anim-bambou-hidden')
        bambou.classList.add('anim-bambou-visible')
    }else if(etat == false){
        containerNotreAgence.classList.remove('change-notre-agence')
        colorTextNotreAgence.classList.remove('change-color-h3')
        bambou.classList.remove('anim-bambou-visible')
        bambou.classList.add('anim-bambou-hidden')
    }
}) 