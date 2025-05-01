const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        switch(e.target.id){
            case "grey":
                body.style.backgroundColor = "grey"
                console.log(e.traget.id)
                break;
            case "yellow":
                body.style.backgroundColor = "yellow"
                break;
            case "black":
                body.style.backgroundColor =  "black"
                break;
            case "pink":
                body.style.backgroundColor ="pink"
                break;
            default:
                console.log("unknow pick")
        }
    })
})