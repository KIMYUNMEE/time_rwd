const main = document.querySelector('main');
const menus = document.querySelector('nav span');
const numbers = document.querySelectorAll('.screen span');

setInterval(()=>{  
  //setTime함수로 시간, 분,초 값 배열로 반환
  const times = setTime();
  //반환된 숫자값들을 반복을 돌며 값을 보정하여 선택자의 순번에 맞게 적용
  times.forEach((time,index) =>getTime(time, index));


  if(hr>=5 && hr<11){
    main.className = '';
    main.classList.add('morning')
  }
  if(hr>=11 && hr<16){
    main.className='';
    main.classList.add('afternoon');
  }
  if(hr>=16 && hr<19){
    main.className='';
    main.classList.add('evening');
  }
  if(hr>=19 || hr<5){
    main.className='';
    main.classList.add('night');
  }  
},1000)

//시간값을 구해서 [시간,분,초]로 반환하는 함수
function setTime(){
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  return [hr, min, sec];
}

//변환할 숫자값과 순서값을 인수로 받아
//숫자를 보정하고 해당 인수의 부모요소에 값 적용하는 함수
function getTime(num,index){
  if(num<10) num = '0'+num;
  numbers[index].innerText = num;
}