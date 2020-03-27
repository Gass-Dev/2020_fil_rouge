var containerNotreAgence = document.getElementById('js-my-notre-agence')
var colorTextNotreAgence = document.getElementById('js-my-title-agence')
var bambou = document.getElementById('js-my-bambou')
var imgOrdi = document.getElementById('js-my-img-na')
var darkPanda = document.getElementById('js-my-dark-panda')
var bgCwac = document.getElementById('js-my-bg-cwac')
var teams = document.getElementById('teams')
var icon1 = document.getElementsByClassName('size-80x80px')[0]
var icon2 = document.getElementsByClassName('size-80x80px')[1]
var icon3 = document.getElementsByClassName('size-80x80px')[2]
toggle.addEventListener('click', function() {
    if(etat == true){
        containerNotreAgence.classList.add('change-notre-agence')

        colorTextNotreAgence.classList.add('change-color-h3')

        bambou.classList.remove('anim-bambou-hidden')
        bambou.classList.add('anim-bambou-visible')

        darkPanda.classList.remove('dark-panda-hidden')
        darkPanda.classList.add('dark-panda-visible')
        imgOrdi.classList.remove('ordi-visible')
        imgOrdi.classList.add('ordi-hidden')

        bgCwac.classList.add('cwac')
        teams.classList.add('team-s')

        icon1.setAttribute("src", "../assets/icons/dark-classroom-100.png");
        icon2.setAttribute("src", "../assets/icons/dark-web-100.png");
        icon3.setAttribute("src", "../assets/icons/dark-classroom-100.png");
        
    }else if(etat == false){
        containerNotreAgence.classList.remove('change-notre-agence')

        colorTextNotreAgence.classList.remove('change-color-h3')

        bambou.classList.remove('anim-bambou-visible')
        bambou.classList.add('anim-bambou-hidden')

        darkPanda.classList.remove('dark-panda-visible')
        darkPanda.classList.add('dark-panda-hidden')
        imgOrdi.classList.remove('ordi-hidden')
        imgOrdi.classList.add('ordi-visible')

        bgCwac.classList.remove('cwac')
        teams.classList.remove('team-s')
    }
}) 