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
let sideToolLogout= document.getElementById('log-out')
sideToolLogout.onclick= function(){
  alert('Bạn đã đăng xuất');
}


