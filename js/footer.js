toggle.addEventListener('click', function(){
    var element = document.getElementById('footer')
    if(etat == true){
        //element.style.backgroundColor = 'linear-gradient(180deg, #BEF164, #6CBB4D)'
        element.classList.remove('change-background-footer1')
        element.classList.add('change-background-footer2')
    }else if(etat == false){
        //element.style.backgroundColor = '#090D0F'
        element.classList.remove('change-background-footer2')
        element.classList.add('change-background-footer1')
    }
})