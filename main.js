var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
var content;

Recognition.onresult=function (event){
    console.log(event);
    content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content == "take my selfie"){
        console.log("taking selfie...");
        speak();
    }
    
}
function speak(){
    var synth=window.speechSynthesis;
    var speak_data="Taking your selfie in 5 second";
    var say_this=new SpeechSynthesisUtterance(speak_data);
    synth.speak(say_this);
    Webcam.attach(camera);
    setTimeout(function ()
    {
    take_snapshot();
    save();
    }, 5000);


}

Webcam.set({
    width:360,
    height:250,
    Image_format:'png',
    png_quality:90
});

var camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function (data_url){
     document.getElementById("click_picture").innerHTML="<img id='selfie' src='"+data_url+"'>";
    });
}

function save(){
    var Link=document.getElementById("Link");
    var img=document.getElementById("selfie").src;
    Link.href=img;
    Link.click();
}