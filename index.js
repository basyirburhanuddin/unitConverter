/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram =  2.204 pound
*/

let getUserInput=document.getElementById("getUserInput-el")
let convertBtn=document.getElementById("convertBtn-el")

let lengthEl=document.getElementById("length-el")
let volumeEl=document.getElementById("volume-el")
let massEl=document.getElementById("mass-el")
let getInput

convertBtn.addEventListener("click",function()
{
    //assign user input value into getInput variable
    getInput=getUserInput.value
    printLength(getInput)  
    printVolume(getInput)
    printMass(getInput)  
    
    // console.log(getInput)    
})

//when user click back on the input field, it clears out
//the previous input
getUserInput.addEventListener("click", function()
{
    getUserInput.value=""
})

function printLength(lengthInput)
{   
    //1 meter = 3.281 feet
    lengthEl.textContent=`${lengthInput} meters = ${(lengthInput*3.281).toFixed(3)} feet | 
    ${lengthInput} feet = ${(lengthInput/3.281).toFixed(3)} meters ` 
}

function printVolume(volumeInput)
{
    //1 liter = 0.264 gallon
    volumeEl.textContent=`${volumeInput} liters = ${(volumeInput*0.264).toFixed(3)} gallons | 
    ${volumeInput} gallons = ${(volumeInput/0.264).toFixed(3)} liters `
    
}

function printMass(massInput)
{
    //1 kilogram = 2.204 pound
    massEl.textContent=`${massInput} kilos = ${(massInput*2.204).toFixed(3)} pounds | 
    ${massInput} pounds = ${(massInput/2.204).toFixed(3)} kilos `
}