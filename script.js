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

//-----------------------------   Dumping unsorted code down from here       ---------------------------------------------------------------



let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
});
let AppID = "89bb664a7d9348a1820df17d708bae53";
let token = "00689bb664a7d9348a1820df17d708bae53IACgHoZZ2FwsXplsmrEh9zbHnvQmTU+hKT+k/VlWMCbIOsmD7b4AAAAAEADri2/QhuO9YQEAAQCD471h";
let channel = "happy";
client.on("token-privilege-will-expire", async function(){
    //After requesting a new token
    let testok = await client.renewToken(token);
  });
