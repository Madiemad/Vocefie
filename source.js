var speechRecognitiono = window.webkitSpeechRecognition;
var recognition = new speechRecognitiono;
var livecam = document.getElementById("live_camera");
Webcam.set({
    width: 320,
    height: 240,
    dest_width:320,
    dest_height:240,
    image_format: 'png',
    png_quality: 100
});

function start() {
    document.getElementById("ouptput_voice").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var novoicecoming = event.results[0][0].transcript;
    document.getElementById("ouptput_voice").innerHTML = novoicecoming;
    var novoicecomingrepair = event.results[0][0].confidence;
    var surenovoicecoming = Number(novoicecomingrepair) * 100;
    finallysurenovoicecoming = Number(surenovoicecoming).toFixed(0);
    document.getElementById("noconfidence").innerHTML = "CONFIDENCE   " + finallysurenovoicecoming + "%";
    if (novoicecoming == "hello take my selfie") {
        speak();
    }
}

function speak() {
    var speaking = window.speechSynthesis;
    var dontspeakthis = "TAKING SELFIE IN 5 SECONDS";
    anotherobject = new SpeechSynthesisUtterance(dontspeakthis);
    speaking.speak(anotherobject);
    Webcam.attach(livecam);
    counter();
    setTimeout(function () {
        take_snapshot();
        save();
    }, 10000);
}
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("selfie").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
function counter() {
    var speaking = window.speechSynthesis;
    for(var i=5; i>=1;i--){

        var dontspeakthis = i;
        anotherobject = new SpeechSynthesisUtterance(dontspeakthis);
        speaking.speak(anotherobject);
    
      
    }
    var dontspeakthis = "NOW";
    anotherobject = new SpeechSynthesisUtterance(dontspeakthis);
    speaking.speak(anotherobject);
}