
var timer;
var display = document.getElementById('timer');

(function (){
    var sec = 0;
    timer = setInterval(()=>{
        display.innerHTML = '00:'+sec;
        sec ++;
    }, 1000)
})()

function pause(){
    clearInterval(timer);
}





