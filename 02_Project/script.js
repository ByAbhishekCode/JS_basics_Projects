const form = document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    if(height === "" || isNaN(height) || height < 0 )
    {
        result.innerHTML = `please enter a valid height value ${height}`
    }else if(weight === "" || isNaN(weight) || weight < 0 )
        {
            result.innerHTML = `please enter a valid weight value ${weight}`
        }
    else
    {
        const bmi = ((weight / ((height*height)/10000)).toFixed(2))
        let category = ""
        if(bmi <= 18.6)
        {
            category = "Under Weight"
        }
        else if(bmi>= 18.6 && bmi <=24.9)
        {
            category = "Normal Weight"
        }
        else if(bmi >= 24.9)
        {
            category = "Over Weight"
        }
        result.innerHTML = `BMI: <strong>${bmi}</strong><br>Category: <strong>${category}</strong>`;
    }
})
