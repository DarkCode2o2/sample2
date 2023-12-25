
const Hour = document.getElementById("hour");
const Minute = document.getElementById("minute");
const Second = document.getElementById("second");
const ampm = document.getElementById("ampm");

function updateDate() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10? "0"+ h : h;
    m = m < 10? "0"+ m : m;
    s = s < 10? "0"+ s : s;
    
    setTimeout(() => {
        updateDate();
    }, 1000);
    Hour.innerHTML = h
    Minute.innerHTML = m
    Second.innerHTML = s
}
updateDate();
