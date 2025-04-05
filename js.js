const inputbox =document.querySelector("#input");

function appendToDisplay(input){
    inputbox.value+=input
}

function clearDisplay(){
    inputbox.value = "";

}

function caculate(){
try{
    inputbox.value =  eval(inputbox.value)
}
catch{
    inputbox.value="Error"
}
}

function cleareAll()
{
    inputbox.value = "";
}


