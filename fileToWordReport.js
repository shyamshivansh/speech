
const { Storage } = require('@google-cloud/storage');
const { SpeechClient } = require('@google-cloud/speech');
const { newarry } = require("./templateCt");
const officegen = require('officegen');
const fs = require('fs');
var path = require('path');

// Replace these with your actual values
const bucketName = 'shakti456';
//const fileName = 'sound/file5.wav';
const keyFilePath = 'GoogleKeyTTS.json';

// Initialize Cloud Storage and Speech-to-Text clients
const storage = new Storage({ keyFilename: keyFilePath });
const speechClient = new SpeechClient({ keyFilename: keyFilePath });

// Function to upload a file to Cloud Storage
async function uploadFile(fileName) {
  await storage.bucket(bucketName).upload(fileName, {
    destination: fileName,
  });

  console.log(`${fileName} uploaded to ${bucketName}`);
}

// Function to transcribe speech using Speech-to-Text API
async function transcribeSpeech(fileName) {
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
   return transcription;
  //console.log('Transcription:\n', transcription);
}
//replacement function
function findReplaceMultiple(inputString, replacementObj) {
    for (let key in replacementObj) {
        if (replacementObj.hasOwnProperty(key)) {
            let escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            let regex = new RegExp(escapedKey, 'g');
            inputString = inputString.replace(regex, replacementObj[key]);
        }
    }
    return inputString;
}

let replacementObj = {"[ comma ]":",",
"[ dash ]":"/",
"[ full stop ]":".",
"[ paragraph ]":"\n•",
"Sisternal":"Cisternal",
"prominence":"prominent",
"L5":"Elsewhere",
"Cerebellar":"Cerebellum",
"stool":"skull",
"sinus":"sinuses",
"cerebellopont":"cerebello-pontine angles",
"\ngirls":"",
"girls":"",
};

// Run the upload and transcription process
async function main(fileName) {
  try {
    await uploadFile(fileName);
   const data= await transcribeSpeech(fileName);
   console.log(data);
   const data2 = findReplaceMultiple(data,replacementObj);
   return data2;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

//function template to Word
function templateToWord(template,fileName) {
    let docx = officegen('docx');

    let headoption={
        color: "gray",
        b: true,
        align: 'center',
        shd: {
            fill: "7F7F7F",
            themeFill: "text1",
            "themeFillTint": "10"
        }
      };
    let bodyoption={
        color: "gray",
        b: false,
        align: 'center',
        shd: {
            fill: "000088",
            themeFill: "text1",
            "themeFillTint": "-10"
        }
    }  

    // Table 1
    let table = [
        [{  type: "text",
            val: "Patient ID",
            opts:headoption,
        }, {
            type: "text",
            val: "Patient Name",
            opts:headoption,
        }, {
            type: "text",
            val: "Date",
            opts:headoption,
        }, {
            type: "text",
            val: "Study",
            opts:headoption,
        }],
        [{val:5469,opts:bodyoption}, {val:'TULSI BAI 65 YF',opts:bodyoption}, {val:'30-January-2024',opts:bodyoption}, {val:"CT BRAIN",opts:bodyoption}],
    ];

    let tableStyle = {
        indent: 100,
        tableColWidth: 2000,
        tableFontFamily: 'Comic Sans MS',
        font_size:10,
        columns: [{ width: 100 }, { width: 250 }, { width: 450 }, { width: 100 }],
    };

    docx.createTable(table, tableStyle);

    // Table 2
    let table1 = [
        [{   type: "text",
            val: "Gender",
            opts:headoption,
        }, {
            type: "text",
            val: "Modality",
            opts:headoption,
        }, {
            type: "text",
            val: "Ref Doctor",
            opts:headoption,
        }, {
            type: "text",
            val: "Age",
            opts:headoption,
        }],
        [{val:"F",opts:bodyoption}, {val:'CT\SR',opts:bodyoption},{val:"DR. MANOJ MURALI",opts:bodyoption}, {val:'065Y',opts:bodyoption}],
    ];

    let tableStyle1 = {
        indent: 100,
        tableColWidth: 2000,
        tableFontFamily: 'Comic Sans MS',
        font_size:10,
        columns: [{ width: 100 }, { width: 250 }, { width: 450 }, { width: 100 }],
    };

    docx.createTable(table1, tableStyle1);

    // containt Header
  let Header = docx.createP({align:"center"});
  Header.addLineBreak();
  Header.addText(`${template.name}`,{bold:true,font_size:20});
  Header.addLineBreak();

  // container STUDY PROTOCOL
  let Study=docx.createP({align:"left"});
  Study.addText("STUDY PROTOCOL:",{bold:true,font_size:15});
   Study.addLineBreak();
   Study.addText(`${template.content.STUDY_PROTOCOL}`,{bold:true,font_size:10});
   Study.addLineBreak();
   
   // observation 
   let Observation=docx.createP({align:"left"});
  Observation.addText("OBSERVATION:",{bold:true,font_size:15});
   Observation.addLineBreak();
   Observation.addText(`•${template.content.OBSERVATION}`,{font_size:10})
  Observation.addLineBreak();

  //Impression
  let Impression=docx.createP({align:"left"});
  Impression.addText("IMPRESSION:",{bold:true,font_size:15});
  Impression.addLineBreak();
  Impression.addText(`${template.content.IMPRESSION}`,{font_size:10})
  Impression.addLineBreak();
  Impression.addLineBreak();

  //smalltext
  let smalltext=docx.createP({align:"left"});
  smalltext.addText("Please correlate clinically and with related investigations; it may be more informative",{font_size:8});
  smalltext.addText("\nThis report is based on digital DICOM images provided via the internet without identification of the patient, not on the films /plates provided to the patient.",{font_size:12,italic:true,bold:true})
  smalltext.addLineBreak();

  //Happy Recovery
  let Hr=docx.createP({align:"center"});
  Hr.addText("WISH YOU A SPEEDY RECOVERY",{bold:true,font_size:15});
  Hr.addLineBreak();
  Hr.addLineBreak();
  Hr.addText("Thanks for Referral",{bold:true,font_size:12})

  //Disclaimer
  let Disclaimer =docx.createP({align:"centre"});
  Disclaimer.addText("Disclaimer:-",{bold:true,font_size:10});
  Disclaimer.addText("It is an online interpretation of medical imaging based on clinical data. All modern machines/procedures have their own limitation. If there is any clinical discrepancy, this investigation may be repeated or reassessed by other tests. Patient's identification in online reporting is not established, so in no way this report can be utilized for any medico legal purpose. In case of any discrepancy due to typing error or machinery error please get it rectified immediately.",{font_size:8});
  Disclaimer.addLineBreak();

  //Sign Image and DoctorInfo
  let Image=docx.createP({align:"left"});
  Image.addImage(path.resolve(__dirname, 'sunilJisign.jpeg'));
  Image.addLineBreak();
  Image.addText("Dr. Sunil Jakhar",{font_size:10});
  Image.addText("\nMD (Radio-Diagnosis)",{font_size:10});
  Image.addText("\nVolente Teleradiology",{font_size:10});

  const out = fs.createWriteStream(`${fileName.split(".")[0]}.docx`);
    docx.generate(out);
}



async function audioToText(templateHead,fileName){
   
  const template = newarry.find(x=>x.Heading===templateHead);
  template.content.OBSERVATION=await main(fileName);
  templateToWord(template,fileName);
 // console.log(template);

}
audioToText("CT BRAIN",'sound/file03feb.wav');


