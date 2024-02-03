//const sdk = require("microsoft-cognitiveservices-speech-sdk");


// const subscriptionKey = "3bb4de3ba4bd4e52a7e64fb7701f6180";
//     const region = "centralindia";

// const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, region);

// const synthesizer = new sdk.SpeechSynthesizer(speechConfig, null);

// // Get the list of supported voices
// const supportedVoices =await synthesizer.getVoices();
// console.log("Supported voices:", supportedVoices);

// synthesizer.close();

const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs").promises; // Using promises-based API for fs

async function getAndSaveSupportedVoices() {
    const subscriptionKey = "3bb4de3ba4bd4e52a7e64fb7701f6180";
    const region = "centralindia";

    const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, region);
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, null);

    try {
        // Get the list of supported voices
        const supportedVoices = await synthesizer.getVoices();

        // Convert the voices data to JSON string
        const voicesJson = JSON.stringify(supportedVoices, null, 2); // 2 spaces for indentation

        // Save the JSON data to a file
        await fs.writeFile('supportedVoices.json', voicesJson);

        console.log("Supported voices data saved to supportedVoices.json");
    } catch (error) {
        console.error(`Error retrieving or saving supported voices: ${error}`);
    } finally {
        // Close the synthesizer
        synthesizer.close();
    }
}

// Call the function to get and save supported voices
getAndSaveSupportedVoices();


