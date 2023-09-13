function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

var celcius = document.getElementById("celcius");
var fahrenheit = document.getElementById("fahrenheit");
var kelvin = document.getElementById("kelvin");

celcius.addEventListener("input", ()=>{
    var inp = parseFloat(celcius.value);
    fahrenheit.value = roundToTwo((1.8 * inp) + 32);
    kelvin.value = roundToTwo(inp + 273.15);
});

fahrenheit.addEventListener("input", ()=>{
    var inp = parseFloat(fahrenheit.value);
    celcius.value = roundToTwo((inp - 32) / 1.8);
    kelvin.value = roundToTwo(((inp - 32)  / 1.8) + 273.15);
});

kelvin.addEventListener("input", ()=>{
    var inp = parseFloat(kelvin.value);
    celcius.value = roundToTwo(inp - 273.15);
    fahrenheit.value = roundToTwo(((inp - 273.15) * 1.8) + 32);
});