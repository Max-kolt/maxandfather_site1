let bg_fon=document.querySelector(".cap");
function fon(){
    bg_fon.classList.toggle("fon1");
    bg_fon.classList.toggle("fon2");
}
setInterval(fon,10000);
