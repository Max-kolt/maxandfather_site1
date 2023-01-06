let menu_button = document.querySelector(".buttondecor");
let menu = document.querySelector(".menu");
menu_button.onclick = function(){
  menu.classList.toggle("unactive");
}

let and_button = document.querySelector(".and");
let and = document.querySelector(".none");
let close_button = document.querySelector(".close")

and_button.onclick = function(){
  and.classList.toggle("none");
  and_button.classList.toggle("none");
  close_button.classList.toggle("none");
}
close_button.onclick = function(){
  and.classList.toggle("none");
  and_button.classList.toggle("none");
  close_button.classList.toggle("none");
}

let button_1 = document.getElementById('button1');
let button_2 = document.getElementById('button2');
let video1 = document.getElementById('1video');
let video2 = document.getElementById('2video');
let video3 = document.getElementById('3video');
let n = 1;

button_1.onclick = function(){
  if(n==1){
    video1.classList.toggle("none");
    video3.classList.toggle("none");
    n = 3;
  } else if(n==3){
    video3.classList.toggle("none");
    video2.classList.toggle("none");
    n=2;
  } else if(n==2){
    video2.classList.toggle("none");
    video1.classList.toggle("none");
    n=1;
  }
}
button_2.onclick = function() {
  if(n==1){
    video1.classList.toggle("none");
    video2.classList.toggle("none");
    n = 2;
  } else if(n==2){
    video2.classList.toggle("none");
    video3.classList.toggle("none");
    n=3;

  } else if(n==3){
    video3.classList.toggle("none");
    video1.classList.toggle("none");
    n=1;

  }
}
