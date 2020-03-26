var buttonContact = document.getElementById('contact')
var containairContact = document.getElementById('js-amine-container-contact')
var crossContact = document.getElementById('cross')

buttonContact.addEventListener('click', function(event){
    containairContact.classList.remove('anim-container-contact-hidden')
    containairContact.classList.add('anim-container-contact-visebel')
})

crossContact.addEventListener('click', function(){
    containairContact.classList.remove('anim-container-contact-visebel')
    containairContact.classList.add('anim-container-contact-hidden')
})