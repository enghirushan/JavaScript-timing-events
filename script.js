
 const timer =document.getElementById("timer");
 const stopTimer = document.getElementById("stoptimer");
 const btn = document.getElementById("btn");
 let timerId;

 //setInterval==> it's work any time
 function getTimer(){
    let a = new Date().toLocaleTimeString();
    timer.textContent = a;
 }
 let b= setInterval(getTimer,1000);



//clearInterval==> it'S work on click command 
function clearTimer(){
    clearInterval(b);
}
stopTimer.addEventListener("click",clearTimer);



//setTimeout ==> it'S work on click command.after it work,itdoes not work 
function myFunction(){
    alert("hiiii");
}

function tsetsetTimeout(){
  timerId = setTimeout(myFunction,3000);
}

btn.addEventListener("click",tsetsetTimeout);



//clearTimeout
function testclearTimeout(){
     clearTimeout(timerId);
}

btn.addEventListener("mouseover",testclearTimeout);