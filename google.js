const fs = require('fs');
const speech = require('@google-cloud/speech');

// Set up Google Cloud Speech client
const client = new speech.SpeechClient({
  keyFilename: 'GoogleKeyTTS.json', // Replace with the path to your service account key file
});

// Specify audio file
const audioFile = 'sound/file4.wav'; // Replace with the path to your audio file

// Configure audio settings
const audioConfig = {
  encoding: 'wav',
  sampleRateHertz: 8000, // Modify based on your audio file
  languageCode: 'en-US', // Modify based on your language
  model : 'medical_dictation'
};

// Read audio file as a buffer
const file = fs.readFileSync(audioFile);
const audioBytes = file.toString('base64');

// Create a request object
const request = {
  audio: {
    content: audioBytes,
  },
  config: audioConfig,
};

// Perform speech recognition
client
  .recognize(request)
  .then((response) => {
    const transcription = response[0].results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log(`Transcription: ${transcription}`);
  })
  .catch((err) => {
    console.error('Error during transcription:', err);
  });
