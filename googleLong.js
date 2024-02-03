const { Storage } = require('@google-cloud/storage');
const { SpeechClient } = require('@google-cloud/speech');

// Replace these with your actual values
const bucketName = 'shakti456';
const fileName = 'sound/file5.wav';
const keyFilePath = 'GoogleKeyTTS.json';

// Initialize Cloud Storage and Speech-to-Text clients
const storage = new Storage({ keyFilename: keyFilePath });
const speechClient = new SpeechClient({ keyFilename: keyFilePath });

// Function to upload a file to Cloud Storage
async function uploadFile() {
  await storage.bucket(bucketName).upload(fileName, {
    destination: fileName,
  });

  console.log(`${fileName} uploaded to ${bucketName}`);
}

// Function to transcribe speech using Speech-to-Text API
async function transcribeSpeech() {
  const audioUri = `gs://${bucketName}/${fileName}`;

  const [operation] = await speechClient.longRunningRecognize({
    audio: { uri: audioUri },
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 8000,
      languageCode: 'en-US',
      model : 'medical_dictation'
    },
  });

  const [response] = await operation.promise();
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');

  console.log('Transcription:\n', transcription);
}

// Run the upload and transcription process
async function main() {
  try {
    await uploadFile();
    await transcribeSpeech();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Execute the main function
main();
