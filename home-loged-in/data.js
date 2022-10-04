let data = [
    [
      {
        name: "Trần Văn C",
        time: "07:00",
        day: "01/12/21",
      },
      {
        name: "Hồ Thị D",
        time: "09:00",
        day: "01/12/21",
      },
      {
          name: "Nguyễn Trần J",
          time: "10:00",
          day: "01/12/21",
        },
        {
          name: "Hồ Lâm P",
          time: "13:00",
          day: "01/12/21",
        },
        {
          name: "Vũ Yến N",
          time: "17:00",
          day: "01/12/21",
        },
        {
          name: "Lê thị D",
          time: "19:00",
          day: "01/12/21",
        },
    ],
    [
      {
        name: "Huỳnh Đan S",
        time: "09:00",
        day: "02/12/21",
      },
      {
        name: "Lâm Bảo W",
        time: "25:00",
        day: "02/12/21",
      },
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      {
        name: "Hồ Phương Thanh",
        time: "09:00",
        day: "12/12/21",
      },
      {
        name: "Lâm Bảo W",
        time: "25:00",
        day: "12/12/21",
      },
    ],
    [
      {
        name: "Nguyễn Trần J",
        time: "10:00",
        day: "13/12/21",
      },
      {
        name: "Hồ Lâm P",
        time: "13:00",
        day: "13/12/21",
      },
      {
        name: "Vũ Yến N",
        time: "17:00",
        day: "13/12/21",
      },
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [{
      name: "Hồ Phương Thanh",
      time: "09:00",
      day: "31/12/21",
    },
    {
      name: "Lâm Bảo W",
      time: "25:00",
      day: "31/12/21",
    },],
  ];
  // active ,inactive ,event
  let title = `
  <div class="part-2-body-song-title">
  <div class="song-info-title">
      <div class='patient-name'>
          <b>Họ và tên</b>
      </div>
      <div class="meeting-info">
          <div class='meeting-time'>
            <b class='meeting-time'>Giờ</b>
          </div>
          <div class="meeting-date">
            <b>Ngày</b>
          </div>
      </div>
  </div>
  </div>`;
  function customer (name,time,day){
  return `
  <div class="part-2-body-song">
  <div class='song-background' id='song-6'>
      <div class='song-play'></div>
  </div>
  <div class="song-info">
      <div class="patient-name">
          ${name}
      </div>
      <div class="meeting-info">
        <div class='meeting-time'>
          ${time}
        </div>
        <div class="meeting-date">
          ${day}/10/21
        </div>
      </div>
  </div>
  </div>`
  };
  let customerWrapper = document.querySelector(".part-2-body");
  let date = document.querySelectorAll(".date");
  for (let i = 0; i < date.length; ++i) {
    date[i].onclick = function () {
  
      date[i].classList.add("active");
      for (let j = 0; j < date.length; ++j) {
        if (j == i) continue;
        date[j].classList.remove("active");
      }
      if (date[i].classList.contains("event")) {
        customerWrapper.classList.remove("part-2-body-no-customer");
        customerWrapper.classList.remove("part-2-body");
        customerWrapper.classList.add("part-2-body-clicked");
        //neu co khach
        customerWrapper.innerHTML= title // reset 
        for(let x of data[i]){
          customerWrapper.innerHTML += customer(x.name,x.time,i+1)
        }
      } else {
        customerWrapper.classList.add("part-2-body-no-customer");
        customerWrapper.classList.remove("part-2-body");
        customerWrapper.classList.remove("part-2-body-clicked");
        customerWrapper.innerHTML = `
              <div style="font-size:32px;font-weight:700;margin-bottom: 10px; color: white"> Hiện chưa có người hẹn </div>
              <div> Chúng tôi khuyến khích hãy hẹn lịch vào ngày chưa có khách để tránh trùng lịch</div>
              <div id="main-side-top-option">
                <a href='../schedule-loged-in/schedule.html' id="log-in"><b>Hẹn lịch</b></a>
              </div> 
             `;
      }
    };
  }
  for (let i = 0; i < data.length; ++i) {
    if (data[i].length) {
      date[i].classList.add("event");
    }
  }
  