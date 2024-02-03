const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");
const { newarry } = require("./template");

const subscriptionKey = "3bb4de3ba4bd4e52a7e64fb7701f6180";
const region = "centralindia";

const lists=[];

 newarry.forEach

async function speechToText() {
    let audiotext = "";
    console.log("function started");

    const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, region);
    const audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("manahar.wav"));
    //const audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync(`sounds/${file}`));
    speechConfig.speechRecognitionLanguage = "en-IN";
    const speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    // Start continuous recognition
    await speechRecognizer.startContinuousRecognitionAsync();
    console.log("started recognizer", new Date());

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
            console.log("\n    Session stopped event.", new Date());
            resolve();
        };
    });

    // Stop and close the SpeechRecognizer
    await speechRecognizer.stopContinuousRecognitionAsync();
    speechRecognizer.close();
    console.log(audiotext, "Time:", new Date());
    return audiotext;
}

//speechToText();

const text1 = 'Prakash City just a large loculated effusion with.Plural effusion noted down left side showing subjacent lung collapse consolidation.Likely infective and.Mild pericardial effusion noted.Rest number.';

const text2 = "City Cervical spine.Bihari Lal.Austin fight.Parth Shah.Hey, vacuum Pancha.Dorsal spine.Bihari Lal.Ideas to fight intradiscal vacuum phenomenon seen in multiple dorsal intervertebral disk.Lumber Nostro 5.Char Paanch Paanch Ek.Vacuum Ek do teen mahine is Clarity Bone Island seen in all the vertebral body CT face.Brij Ki bar.Writing expense are legion, with thinning of cortex and intermixed air locally seen involving.Body and dreams of mandible on right side.At the level of.Body and mandible on right side with particle breach out and associated soft tissue swelling. Lateral to mandible with cutaneous cutaneous edema and multiple air loculi.Festive of osteomyelitis.DNS left.NCT of Daman.In chapati Patel.Dependent hyperdense like oblique small calculate have seen in GB lumen.Prostatomegaly Sanyog SW.At Generative.Lighting Legion, Nothing involving.Left sided acetabulum.With cortical reach out.Query Neoplastic advice, MRI hip with contrast and diffusion.CT Brain.Shambhulal.DNS left.S right parietal region.City Brain.Sugra Bhi.Ch.Right side Mein.Battis adtalis and parietal lata Lena.Midland Chip, 7:00 AM left side.IBD hydroflex FCF.DNS left.Konka, right?";

const text3 = "Gandhi City brain.Focal area of hypodensity with loss of Gray white matter differentiation is noted in right frontoparietal and capsuloganglionic region.Causing effacement of adjacent.Cell Kal Spaces.Handwrite Silvan Fisher.Festive of acute infract.Fir DC AF karna hai aur ishq karna hai ICHFF.Likhna try chillimal cyst is seen in left parietal scale.DNS, right?"
const Ramesh="Ramesh city chest multiple centrilobular nodules showing 3 input pattern noted in posterior basal segment of left lower lobe.Safe shop Infectivity ology fibroid Electric, Strand noted in right lower lobe.Rest normal."
const manohar="Manhar city brain atrophy, chronic small vessel and encephalomalacia with plastic changes noted in right temporal lobe. Likely old ischemic insult rest number."

const temparray1 = manohar.split(/City|CT|city/);
console.log(temparray1);
// const singleCase=temparray1[5];
// //console.log(singleCase);
//  const data=singleCase.split(".");
//  //console.log(data);

//  const bodyPart=data[0];
//  console.log(bodyPart);



