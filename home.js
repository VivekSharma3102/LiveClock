setInterval(() => {
    var date= new Date();
    var year=date.getFullYear();
    var htime=date.getHours();
    var mtime=date.getMinutes();
    var stime=date.getSeconds();

// for clock hours minutes,second
    let hr=30*htime + mtime/2;
    let mr=6*mtime;
    let sr=6*stime;

// clock hands rotaion
    hhand.style.transform = `rotate(${hr}deg)`
    mhand.style.transform = `rotate(${mr}deg)`
    shand.style.transform = `rotate(${sr}deg)`

// for time 

    document.getElementById("time").innerHTML = htime%12+" : "+mtime+" : "+stime;
    document.getElementById("year").innerHTML =year;
 
}, 1000);