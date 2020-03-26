                            /*Slider 3D*/
var slider = document.getElementById("slider");

var item = document.getElementsByClassName('item')[0];
var item1 = document.getElementsByClassName('item')[1];
var item2 = document.getElementsByClassName('item')[2];


    slider.addEventListener("input",function(){
      if (slider.value === "3") {
        item.style.transform = "rotateY(-40deg) translate3d(-300px, 0px, 200px)" ;//sauf deg
        item1.style.transform = "rotateY(0deg)  translate3d(0px, 0px, 100px)" ;//*
        item2.style.transform = "rotateY(220deg) translate3d(80px, 0px, 450px)";
      }
      else if (slider.value === "2"){
        item.style.transform = "rotateY(0deg) translate3d(0px, 0px, 100px) ";//*
        item1.style.transform = "rotateY(40deg)  translate3d(300px, 0px, 200px)"; //sauf deg
        item2.style.transform = "rotateY(320deg) translate3d(-300px, 0px, 200px)";
    }
    else if (slider.value === "1"){
    
    item.style.transform = "rotateY(40deg)  translate3d(300px, 0px, 200px)"; //*
    item1.style.transform = "rotateY(120deg) translate3d(80px, 0px, 450px)";
    item2.style.transform = "rotateY(360deg) translate3d(0px, 0px, 100px) "; //* sauf deg
    }
    })

                              /*Responsive slider*/

    var images =["assets/images/dessin.svg","assets/images/dessin2.svg","assets/images/dessin3.svg"]

    var num = 0;
    function next() {
      var sliderResp = document.getElementById("slider-resp");
      num++;
      if (num >= images.length) {
        num = 0;
      }
      sliderResp.src = images[num];
    }

    function prev() {
      var sliderResp = document.getElementById("slider-resp");
      num--;
      if (num < 0) {
        num = images.length-1;
      }
      sliderResp.src = images[num];
    }
                          /*boutton toggle*/ 
    var flecheG = document.getElementsByClassName('fleche-slider')[0];
    var flecheD = document.getElementsByClassName('fleche-slider')[1];
    var backSlider = document.getElementsByClassName('background')[0];
   
       
      toggle.addEventListener('click', function() {
      if(etat == true){
        backSlider.setAttribute("src", "assets/images/Pattern-balck.png");
      }
    
    else {
      backSlider.setAttribute("src", "assets/images/Pattern-green.png");
    }}
    );



   

   




