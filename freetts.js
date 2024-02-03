const fs = require('fs');
const wav = require('wav');

function textToBinary(text) {
    // Convert each character to binary representation
    return text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
    
  }

//   function createAudioBuffer(binaryData) {
//     const audioBuffer = [];
  
//     // You can customize the audio generation logic here
//     // This example uses a simple sine wave
//     for (let i = 0; i < binaryData.length; i++) {
//       const sample = Math.sin(i * 2 * Math.PI * 440 / 44100);
//       audioBuffer.push(sample);
//     }
  
//     return audioBuffer;
//   }

// function writeWavFile(outputFile, audioBuffer) {
//   const fileWriter = new wav.FileWriter(outputFile, {
//     channels: 1,
//     sampleRate: 44100,
//     bitDepth: 16,
//   });

//   // Convert the audio buffer to a Buffer
//   const buffer = Buffer.from(audioBuffer);

//   // Write the entire buffer at once
//   fileWriter.write(buffer);
//   fileWriter.end();
// }

// Example usage
const text = 'Hello, this is a test.';
const binaryData = textToBinary(text);
// const audioBuffer = createAudioBuffer(binaryData);
// writeWavFile('output.wav', audioBuffer);
