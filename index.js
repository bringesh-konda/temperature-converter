function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

var form = document.querySelector(".converter");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    var inp1 = document.querySelector("#input1").value;
    var inp2 = document.querySelector("#input2").value;
    var inp3 = document.querySelector("#input3").value;

    inp3 = parseFloat(inp3);
    console.log(inp1, inp2, inp3);
    var ans = inp3;

    if(inp1 == "Fahrenheit" && inp2 == "Celcius")
        ans = (inp3 - 32) / 1.8;
    else if(inp1 == "Fahrenheit" && inp2 == "Kelvin")
        ans = ((inp3 - 32) / 1.8) + 273.15;
    else if(inp1 == "Celcius" && inp2 == "Fahrenheit")
        ans = (1.8 * inp3) + 32;
    else if(inp1 == "Celcius" && inp2 == "Kelvin")
        ans = inp3 + 273.15;
    else if(inp1 == "Kelvin" && inp2 == "Celcius")
        ans = inp3 - 273.15;
    else if(inp1 == "Kelvin" && inp2 == "Fahrenheit")
        ans = ((inp3 - 273.15) * 1.8) + 32; 

    ans = roundToTwo(ans);
    document.querySelector("p").innerHTML = "Answer : " + 
    ans;
});