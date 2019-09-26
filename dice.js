let img=document.querySelector('.papo')
 
let btn=document.querySelector('button')



btn.addEventListener('click', function(){
let random=Math.floor(Math.random()* 6) + 1;

let dice='images/dice-' + random + '.png';
img.setAttribute('src', dice);
img.style.display='block'

})

   