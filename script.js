let buttonStart=document.getElementById("buttonStart");
let body = document.querySelector("body");
let light_1=document.getElementById("light_1");
let light_2=document.getElementById("light_2");
let light_3=document.getElementById("light_3");
//let result2 = document.querySelector(".result");   не работает, не видит в document.result2.innerHTML=2

buttonStart.addEventListener("click", startGame);
function startGame() {
    buttonStart.disabled = true;
    light_1.style = "background-color:#A37B7B";
    light_2.style = "background-color:#A37B7B";
    light_3.style = "background-color:#A37B7B";
    function changeLights(id) {
        id.style = "background-color: crimson";
    }
    setTimeout(changeLights, 1000, light_1);
    setTimeout(changeLights, 2000, light_2);
    setTimeout(changeLights, 3000, light_3);
    setTimeout(getTime, randomTime());

    function randomTime() {
        let rand = 5000 - 0.5 + Math.random() * (9000 - 5000 + 1);
        rand = Math.round(rand);
        return rand;
    }
  timeStart=0;    ///не объявляем через let
    function getTime () {
        light_1.style = "background-color:#A37B7B";
        light_2.style = "background-color:#A37B7B";
        light_3.style = "background-color:#A37B7B";
        timeStart=new Date();
    }
}

body.addEventListener("keypress", (e) => {
    let key = e.which;
    if (key === 13) {
        let timeEnd=new Date();
        let reactionTime=(timeEnd-timeStart)/1000;
        document.querySelector(".result").innerHTML+=reactionTime+"\n"
        alert (reactionTime);
        buttonStart.disabled = false;
    }
});


/*
var timerId = setTimeout(...);
clearTimeout(timerId);

  clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    alert("hi");
 */