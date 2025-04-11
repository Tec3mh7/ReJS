// let username;

// username = window.prompt("What's your username?");

// console.log(username);

let username;

document.getElementById("Mysubmit").onclick = function(){
    username = document.getElementById("MyText").value;
    console.log(username);
    document.getElementById("MyP").textContent = username;
}


// <h1>Welcome</h1>
// <label>username:</label>
// <input type="text" id="MyText"><br>
// <button id="Mysubmit">submit</button>
// <p id="MyP"></p>