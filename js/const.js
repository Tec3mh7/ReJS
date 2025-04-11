const PI = 3.14159;12
let r;
let circumference;


document.getElementById("MySubmit").onclick = function() {
    r = document.getElementById("MyInp").value
    result = 2 * PI * r
    circumference = Number(result.toFixed(3))
    document.getElementById("MyH1").textContent= `circumference of a circle is ${circumference}`
}