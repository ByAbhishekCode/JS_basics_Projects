const body = document.querySelector('body')
const button = document.querySelectorAll(".canvas")
var color  = body.style.color
console.log(color)
button.forEach(function(l){
    console.log(l)
    l.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'skyblue')
        {
            body.style.color = 'black'
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'pink')
        {
            body.style.color = 'black'
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'skyblue')
        {
            body.style.color = 'black'
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'pink')
        {
            body.style.color = 'black'
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'orange')
        {
            body.style.color = 'black'
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow')
        {
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        }
    })
})