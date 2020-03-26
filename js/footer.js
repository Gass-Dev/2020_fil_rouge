var element = document.getElementById('footer')
toggle.addEventListener('click', function(){
    if(etat == true){
        element.style.backgroundColor = 'linear-gradient(180deg, #BEF164, #6CBB4D)'
    }else if(etat == false){
        element.style.backgroundColor = '#090D0F'
    }
})