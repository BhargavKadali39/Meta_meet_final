

let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
});
let AppID = "89bb664a7d9348a1820df17d708bae53";
let token = "00689bb664a7d9348a1820df17d708bae53IACRugmzmK+FKCdZRePHPZzF/9+kYkbSjABw7n6GHKa6lN0BBfAAAAAAEADri2/QKaDAYQEAAQAooMBh";
let channel = "qwert";



// localStorage.setItem("MyAppIdLocal", AppID);
// localStorage.setItem("MyTokenLocal", token);
// localStorage.setItem("MyChannelLocal", channel);
        // let tim = localStorage.getItem("MyAppIdLocal")
        // alert(tim);
// let tim = localStorage.getItem("MyAppIdLocal")
// let tim = localStorage.getItem("MyTokenLocal")
// let tim = localStorage.getItem("MyChannelLocal")

// client.on("token-privilege-will-expire", async function(){
        //After requesting a new token
//     let testok = await client.renewToken(token);
//   });


client.init(AppID);
client.join(token,channel, null, (uid)=>{
    let localStream = AgoraRTC.createStream({
        audio: true,
        video: true,
    });
    localStream.init(()=>{
        mystream = localStream;
        localStream.play("hosty");
        client.publish(localStream);
    });
});

    document.getElementById("insert").innerHTML = "appid: " + AppID  + " channel: " + channel + "<br>" + "token: "+ token;

    client.on("stream-added", function (evt){
    client.subscribe(evt.stream);
}); 

client.on("stream-subscribed", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    let user = document.getElementById("usero");
    let div = document.createElement("div");
    div.id = streamId;
    user.appendChild(div);
    stream.play(streamId);
});

let audio = false;
let mystream;
let video = false;

let vdchkin = document.getElementById("vdchkin");
vdchkin.addEventListener('change',function listp(){
    if (vdchkin.checked) {
        mystream.disableVideo();
            
    } else {
        mystream.enableVideo();
    }
})
let adchkin = document.getElementById("adchkin");
adchkin.addEventListener('change',function lista(){
    if (adchkin.checked) {
        mystream.muteAudio();
    } else {
        mystream.unmuteAudio();
    }
})

let scchkin = document.getElementById("scchkin");
scchkin.addEventListener('change',function listsc(){
    if (scchkin.checked) {
        winShare = window.open("indexShare.html", '_blank');
    }
    if(!scchkin.checked){
        winShare.close();
    }
})



    // function screensh(){
    //         AgoraRTC.createScreenVideoTrack({
    //             encoderConfig: "1080p_1",
    //         }, "enable").then([screenVideoTrack, screenAudioTrack] => {
    //             /** ... **/
    //         });
    // }


    // to check if audio id muted or not // ir returns false if no audio found
    // const audioTrack = await AgoraRTC.createMicrophoneAudioTrack({ microphoneId });
    // AgoraRTC.checkAudioTrackIsActive(audioTrack).then(result => {
    // console.log(`${ microphoneLabel } is ${ result ? "available" : "unavailable" }`);
    // }).catch(e => {
    // console.log("check audio track error!", e);
    // });

/* <audio crossOrigin="anonymous" src="http://www.test.com/test.mp3" id="audioDom"></audio>
<script>
  const element = document.getElementById("audioDom");
  client.processExternalMediaAEC(element);
</script> */



