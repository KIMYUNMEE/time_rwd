const time = document.querySelectorAll('.screen span');

setInterval(()=>{
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if(hr < 10) hr = '0'+hr;
  if(min < 10) min = '0'+min;
  if(sec < 10) sec = '0'+sec;

  time[0].innerText = hr;
  time[1].innerText = min;
  time[2].innerText = sec;
},1000)

//미션1 - 각 시간값이 한자리일때는 앞쪽에 0을 추가해서 출력














