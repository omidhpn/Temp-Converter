let $ = document


let c = $.querySelector ('.C')
let f = $.querySelector ('.F')

let inputElem = $.getElementById ('converter')

let convertBtn = $.querySelector ('.convertButton')
let resetBtn = $.querySelector ('.resetButton')
let changeBtn = $.querySelector ('.changeButton')
let result = $.querySelector ('.result')

// about change button
changeBtn.addEventListener ('click', function () {
    result.innerHTML = ''
    if (c.innerHTML === '°F') {

        c.innerHTML = '°C'
        f.innerHTML = '°F'
        inputElem.setAttribute ('placeholder', '°C')
        document.title = 'SabzLearn| Js | °C to °F'
        
        
    } else {
        
        c.innerHTML = '°F'
        f.innerHTML = '°C'
        inputElem.setAttribute ('placeholder', '°F')
        document.title = 'SabzLearn| Js | °F to °C'

    }
})



// about reset button
resetBtn.addEventListener ('click', function () {

    inputElem.value = ''
    result.innerHTML = ''

})




// about convert button
convertBtn.addEventListener ('click', function () {
    
    
    
    if (isNaN(inputElem.value)) {

        result.innerHTML = 'please enter the number of temp'
        
    } else if (inputElem.value === '') {

        result.innerHTML = 'please enter the temp'
        
    } else {
        
        if (c.innerHTML === '°C') {
        
            let fElem = (1.8 * inputElem.value + 32).toFixed(2) + ' °F'
            result.innerHTML = inputElem.value + ' °C' + ' = ' + fElem
            

            
        } else if (c.innerHTML === '°F') {

            let cElem = ((inputElem.value - 32) / 1.8).toFixed(2) + ' °C'
            result.innerHTML = inputElem.value + ' °F' + ' = ' + cElem

        }

    }
    
    inputElem.value = ''
    
})