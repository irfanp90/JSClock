const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate(){
    // console.log("one")
    const now = new Date()

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) *360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    console.log("sec"+ seconds);

    const min = now.getMinutes()
    const minDegrees = ((min / 60)* 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`
    console.log("min" + min)

    const hour = now.getHours()
    const hourDegrees = ((hour / 12)* 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    console.log("hour" + hour)
}

setInterval(setDate, 1000)

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "PM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();