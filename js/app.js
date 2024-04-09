'use strict'


// let min = 1;
// let max = 10;

// console.log(Math.floor(Math.random() * (max - min + 1) ) + min);


document.addEventListener("DOMContentLoaded", ()=>{

    const min = document.querySelector(".min")
    const max = document.querySelector(".max")
    const btn = document.querySelector(".btn")
    const res = document.querySelector(".result-number")



    btn.addEventListener('click' ,()=>{

        const minVal = +min.value
        const maxVal = +max.value

        if (minVal === 0 && maxVal === 0) {
            alert("input maydonini to'ldiring")
        } else if (minVal === 0) {
            alert("min maydoni bo'sh qolgan")
            return
        } else if (maxVal === 0) {
            alert("max maydoni bo'sh qolgan")
            return
        }
        
        if (minVal > maxVal) {
            alert("Min soni maxdan kichik bo'lmasin")
        } else{
            res.textContent = Math.floor((Math.random()*(maxVal-minVal+1))+minVal)
        }
        

        // console.log(Math.floor((Math.random()*(max-min+1))+min)
        
    })
})

