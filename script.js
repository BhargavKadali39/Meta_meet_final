// document.querySelector("button").addEventListener("click", function() {
//     var myValue = document.getElementById('AppID').value;
//     var myValue1 = document.getElementById('token').value;
//     var myValue2 = document.getElementById('channel').value;
//     alert(myValue);
//     })


var myValue = document.getElementById('userVal').value;
document.getElementById("Name").value = myValue;
alert(myValue)

function myFunction() {
    var AppID = document.getElementById("AppID").value;
    var token = document.getElementById("token").value;
    var channel = document.getElementById("channel").value;
    console.log(AppID);
    console.log(token);
    console.log(channel);
}
