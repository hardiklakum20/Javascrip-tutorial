const form = document.querySelector('form')

// this Usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please Give a valid Height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please Give a valid weight ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){          
            const specified = document.querySelector('.specified')        
            specified.innerHTML = "Under Weighted"
        }else if(bmi > 24.9){
           const specified = document.querySelector('.specified')        
            specified.innerHTML = "Over Weighted"
        }else{
            const specified = document.querySelector('.specified')        
            specified.innerHTML = "Normal Weighted"   
        }
    }     
})