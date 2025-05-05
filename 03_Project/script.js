const clcok = document.querySelector("#clock")   


setInterval(function(){
    let date = new Date()
    clcok.innerHTML = date.toLocaleTimeString()
},1000)