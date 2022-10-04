function myFunction() {
    let sideTool = document.getElementById('side-tool')
    let sideToolOption =document.getElementById('side-tool-option-wrapper')
    let mainSide = document.getElementById('main-side')
    if(sideTool.style.width!='5%'){
      sideTool.style.width ="5%"
      sideToolOption.style.display="none"
      mainSide.style.width="95%"
    }
    else{
      sideTool.style.width="15%"
      sideToolOption.style.display="block"
      mainSide.style.width="85%"
    }
  }
  
  var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let sideToolLogout= document.getElementById('log-out')
sideToolLogout.onclick= function(){
  alert('Bạn đã đăng xuất');
}