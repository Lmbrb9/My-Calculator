const display = document.getElementById("disp");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(input){
display.value = null
}
function calculate(input){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'Error';
    }
}