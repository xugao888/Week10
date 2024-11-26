function creat(){
    input = prompt("Please enter a list of numbers sperated by commas");
    array = input.split(",");
    document.getElementById("numbers").innerHTML = "You entered: " + array;
}

function caculate(){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += Number(array[i]);
    }
    let mean = sum/array.length;
    document.getElementById("result").innerHTML = 
    "The sum of the the list of the numbers is " + sum + ". <br\><br\> The mean of the list of the numbers is " + mean +"."
}