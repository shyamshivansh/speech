const sdk = require("microsoft-cognitiveservices-speech-sdk");
//const mic = require("mic");
const fs = require("fs");
const {newarry} =require("./template");

const subscriptionKey = "3bb4de3ba4bd4e52a7e64fb7701f6180";
const region = "centralindia";






 function synthesizeSpeechAndSaveToFile() {
 

  // Set language to Hindi
  const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, region);
  speechConfig.speechSynthesisVoiceName = "hi-IN-SwaraNeural"; // Change to the desired Hindi voice

  // Set the output format to 16K mono PCM WAV
  speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Riff8Khz16BitMonoPcm;

  const speechSynthesizer = new sdk.SpeechSynthesizer(speechConfig, null);

  

    // The path to the output WAV file
    const outputPath = `thankForFeedbackHindi.wav`;

    speechSynthesizer.speakTextAsync(
      `पुष्टि करने के लिए धन्यवाद। आप का समय सुभ रहे।.`,
      result => {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          // Interact with the audio ArrayBuffer data
          const audioData = result.audioData;

          // Save the audio data to a file
          fs.writeFileSync(outputPath, Buffer.from(audioData));

          console.log(`Audio data saved to: ${outputPath}`);
        } else {
          console.error(`Error synthesizing audio: ${result.errorDetails}`);
        }

      
          // Close the synthesizer only after the last item has been processed
          speechSynthesizer.close();
        
      },
      error => {
        console.error(error);

   
          // Close the synthesizer only after the last item has been processed
          speechSynthesizer.close();
        
      }
    );
  }


//Call the function to synthesize speech and save to file
//synthesizeSpeechAndSaveToFile();
console.log(newarry[2]);