const circles = document.querySelectorAll('.color');
const arrows = document.querySelectorAll('.leftarrow');

for(let i=0;i<document.querySelectorAll('.color').length;i++){
    circles[i].addEventListener("click",function(){
        arrows[i].classList.add('hit');
        circles[i].style.backgroundColor="grey";
    })
}
const reset = document.getElementsByTagName("button");
reset[0].addEventListener('click',function(){
    circles[1].style.backgroundColor="yellow";
    circles[2].style.backgroundColor="blue";
    circles[3].style.backgroundColor="red";
    circles[0].style.backgroundColor="green";
   arrows[0].classList.remove('hit');
   arrows[1].classList.remove('hit');
   arrows[2].classList.remove('hit');
   arrows[3].classList.remove('hit');
})