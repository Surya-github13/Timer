
let ampm=document.getElementById("ampm")

function displaytime(){
    let datetime=new Date();
    let hr=datetime.getHours();
    let min= padZero(datetime.getMinutes())
    let secc=padZero(datetime.getSeconds())

    document.getElementById("hours")
    document.getElementById("mins")
    document.getElementById("seconds")

    
    mins.innerHTML=min
    seconds.innerHTML=secc
    if(hr>12){
        hr= hr-12
        hours.innerHTML= padZero(hr)
        ampm.innerHTML="PM"
        
        
    }

    function padZero(num){
        return num<10?"0"+num:num


    }
}

setInterval(displaytime,1000)
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", 
    "Sep", "Oct", "Nov", "Dec"];

function displaydate(){
    const datee = new Date();
    const month = datee.getMonth();
    const date=datee.getDate()
    const year=datee.getFullYear()


    document.getElementById("date").innerHTML=date
    document.getElementById("year").innerHTML=year
    document.getElementById("month").innerHTML=monthNames[month]
    


}

setInterval(displaydate(),4000)








