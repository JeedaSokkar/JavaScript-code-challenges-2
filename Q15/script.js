let button=document.getElementById("btn");

button.onclick=function(){
    button.style.width="70px";
}
button.addEventListener("mouseenter",function(){
    button.style.backgroundColor="Red";
})