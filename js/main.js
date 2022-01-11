const main = document.querySelector('main');
const menus = document.querySelectorAll('nav span');
const numbers = document.querySelectorAll('.screen span');

setInterval(()=>{ 
  const times = setTime();
  let hr = times[0];
  times.forEach((time,index) =>getTime(time, index));

  //조건식과 그에 매칭되는 클래스명을 객체형태로 묶어서
  //배열로 저장
  const data = [
    {condition: hr>=5 && hr<11, name: 'morning'},
    {condition: hr>=11 && hr<16, name: 'afternoon'},
    {condition: hr>=16 && hr<19, name: 'evening'},
    {condition: hr>=19 || hr<5, name: 'night'},
  ]

  //해당 배열을 반복돌면서 main, menus를 활성화
  data.forEach((item, index)=>{
    if(item.condition){
      main.className='';
      main.classList.add(item.name);

      for(let menu of menus) menu.classList.remove('on');
      menus[index].classList.add('on');
    }
  }) 

},1000)


function setTime(){
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  return [hr, min, sec];
}

function getTime(num,index){
  if(num<10) num = '0'+num;
  numbers[index].innerText = num;
}