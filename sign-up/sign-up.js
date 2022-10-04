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
        username:'abcd',
        password:'abcd'
    },
    {
        username:'123',
        password:'123'
    }
];
let signUpUsername= document.getElementById('sign-up-username');
let signUpPassword =document.getElementById('sign-up-password');
let signUpBtn =document.getElementById('sign-up-btn');

signUpBtn.onclick= function(e){
    e.preventDefault()
    let newInfo= {
        username: signUpUsername.value,
        password: signUpPassword.value
    }
    console.log(newInfo);
    DATA.push(newInfo);
    console.log(DATA);
    
}
