const fs = require("fs");
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const subscriptionKey = "3bb4de3ba4bd4e52a7e64fb7701f6180";
const region = "centralindia";

async function speechToText() {
    let audiotext = "";


    const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, region);
   // const audioConfig = sdk.AudioConfig.fromWavFileInput(buffer);
    const audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("doctorTest.wav"));

    const speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    // Start continuous recognition
    await speechRecognizer.startContinuousRecognitionAsync();

    // Event handling using async/await
    speechRecognizer.recognized = (s, e) => {
        if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {
            audiotext += e.result.text;
        } else if (e.result.reason === sdk.ResultReason.NoMatch) {
            console.log("NOMATCH: Speech could not be recognized.");
        }
    };

    // Wait for the sessionStopped event
    await new Promise(resolve => {
        speechRecognizer.sessionStopped = (s, e) => {
            console.log("\n    Session stopped event.");
            resolve();
        };
    });

    // Stop and close the SpeechRecognizer
    await speechRecognizer.stopContinuousRecognitionAsync();
    speechRecognizer.close();
    console.log("audiotext:",audiotext);
    return audiotext;
}
  
  speechToText();