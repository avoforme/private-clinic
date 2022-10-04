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


let info = document.getElementsByClassName("info");
let infoDate = document.getElementById('date');
let modalText = document.getElementById("modal-text");



var modal = document.getElementById("myModal");


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var myBtn = document.getElementById("btn");


var span = document.getElementsByClassName("close")[0];


myBtn.onclick = function (e) {
  e.preventDefault;
  for (let x in info) {
    if (info[x].value == "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      break;
    } else {
      modal.style.display = "block";
      modalText.innerHTML =
        "- Họ và tên: " +
        info[0].value +
        "<br>- Tuổi: " +
        info[1].value +
        "<br>- Ngày hẹn: " +
        infoDate.value;
    }
  } 
};

  if(isModal){
    modalBig.style.display = "block";
    modalTextBig.innerHTML =
      "Họ và tên: " +
      infoBig[0].value +
      "<br>Tuổi: " +
      infoBig[1].value +
      "<br>Ngày hẹn: " +
      infoDateBig.value;
  }



let sideToolLogout= document.getElementById('side-tool-log-out')
sideToolLogout.onclick= function(){
  alert('Bạn đã đăng xuất!')
}

