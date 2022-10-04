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
  

const DATA =[
    {
        username:'hophuongthanh',
        password:'1234'
    },
    {
        username:'123',
        password:'123'
    }
];
let username= document.getElementById('username');
let loginForm = document.getElementById('log-in')
let password= document.getElementById('password');
let btn= document.getElementById('log-in-btn');
let infoCheck= document.getElementById('info-check');
btn.onclick= function(e){
    e.preventDefault()
    let isLogin = false
    for (let x of DATA){
        if (x.username ==username.value && x.password == password.value ){
            isLogin = true;
            alert('Xin chào mừng! Bạn đã đăng nhập thành công!');
        }
    }
    if (isLogin){
        window.location.href='../home-loged-in/home-loged-in.html';
    } else {
        username.style.borderBottom ="solid #bd0a0a 2px"
        username.style.backgroundColor="#eccfcf"
        password.style.borderBottom ="solid #bd0a0a 2px"
        password.style.backgroundColor="#eccfcf"
        infoCheck.style.display="block"
    }
}
let sideToolLogout= document.getElementById('log-out')
sideToolLogout.onclick= function(){
  alert('Bạn đã đăng xuất');
}