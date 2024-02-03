
const { Storage } = require('@google-cloud/storage');
const { SpeechClient } = require('@google-cloud/speech');
const { newarry } = require("./template");
const { jsPDF } = require("jspdf");
const {autoTable} = require('jspdf-autotable');

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

// Run the upload and transcription process
async function main(fileName) {
  try {
    await uploadFile(fileName);
   const data= await transcribeSpeech(fileName);
   const data1 = data
          .replace(/\[ comma \]| \comma\]/g, ',')
          .replace(/\[ full stop \]|full stop/g, '.');
        const data2 = data1.replace(/\[ paragraph \]/g, `\n`);
   return data2;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

//function template to Pdf

function templateTOPdf(template){
  const LINE_SPACING = 5;
  const IMG_WIDTH = 20;
  //const mlcIMG_WIDTH = 20;
  const drText = `
  Please correlate clinically and with related investigations; it may be more informative.`;
    const drText11 = `This report is based on digital DICOM images provided via the internet without identification of the patient, not on the films / plates provided to the patient.`;
    const drText1 = `
  WISH YOU A SPEEDY RECOVERY`;
    const drText2 = `
  Thanks for Referral`;
    const drText3 = `Disclaimer:-`;
  
    const drText4 = `It is an online interpretation of medical imaging based on clinical data. All modern machines/procedures have their own limitation. If there is any clinical `;
    const drText5 = ` discrepancy, this investigation may be repeated or reassessed by other tests. Patient's identification in online reporting is not established, so in no way this report can be utilized for any medico legal purpose. In case of any discrepancy due to typing error or machinery error please get it rectified immediately.`;
    
    const initialText = `
    ${template.name}

OBSERVATION:
   ${template.content.OBSERVATION}

IMPRESSION:
   ${template.content.IMPRESSION}

      `;

    const doc = new jsPDF();

    const table = [
      ['Patient ID', 'Patient Name', 'Date', 'Location', 'Ref Doctor'],
      [
        "Patient Ka ID",
        "patient Ka Name",
        new Date(),
        "Jaipur",
        "Dr Sandeep",
      ],
    ];

    const tableStyles = {
      tableWidth: 'auto',
      theme: 'grid',
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: 0,
        fontStyle: 'bold',
        halign: 'center',
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: 0,
        halign: 'center',
      },
    };

    //doc.autoTable(doc, { body: table }, tableStyles);
    const modifiedtext = initialText.replace('OBSERVATION:', '|').replace('IMPRESSION:', '|').split('|');
    const textDr = modifiedtext[0]; //+ drText;
    doc.setFont('helvetica', 'bold');
    const lines = doc.splitTextToSize(textDr, doc.internal.pageSize.width - 20);
    doc.setFontSize(12);

    let yPos = 40;

    lines.forEach(line => {
      doc.text(50, yPos, line);
      yPos += LINE_SPACING;
    });

    const Observation = `OBSERVATION:`;
    const oblines = doc.splitTextToSize(Observation, doc.internal.pageSize.width - 20);
    oblines.forEach(line => {
      doc.text(10, yPos, line);
      yPos += LINE_SPACING;
    });

    const textDr1 = modifiedtext[1]; //+ drText;
    doc.setFont('helvetica', 'normal');
    const lines1 = doc.splitTextToSize(textDr1, doc.internal.pageSize.width - 20);
    doc.setFontSize(10);

    lines1.forEach(line => {
      doc.text(10, yPos, line);
      yPos += LINE_SPACING;
    });

    const Impression = `IMPRESSION:`;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    const implines = doc.splitTextToSize(Impression, doc.internal.pageSize.width - 20);
    implines.forEach(line => {
      doc.text(10, yPos, line);
      yPos += LINE_SPACING;
    });

    const textDr2 = modifiedtext[2]; //+ drText;
    doc.setFont('helvetica', 'normal');
    const lines2 = doc.splitTextToSize(textDr2, doc.internal.pageSize.width - 20);
    doc.setFontSize(10);

    lines2.forEach(line => {
      doc.text(10, yPos, line);
      yPos += LINE_SPACING;
    });

    doc.setFontSize(7);
    //doc.setFont('helvetica', 'bold');
    const drsmalltext = drText;
    const smalllines = doc.splitTextToSize(drsmalltext, doc.internal.pageSize.width - 20);

    let y1Pos = yPos;

    smalllines.forEach(line => {
      if (y1Pos + LINE_SPACING > doc.internal.pageSize.height - 20) {
        doc.addPage();
        y1Pos = 10;
      }

      doc.text(10, y1Pos, line);
      y1Pos += LINE_SPACING;
    });
    yPos = y1Pos;
    doc.setFontSize(10);
    doc.setFont('times', 'bolditalic');
    const thistext = drText11;
    const thistextline = doc.splitTextToSize(thistext, doc.internal.pageSize.width - 20);
    thistextline.forEach(line => {
      if (yPos + LINE_SPACING > doc.internal.pageSize.height - 20) {
        doc.addPage();
        yPos = 10;
      }

      doc.text(10, yPos, line);
      yPos += LINE_SPACING;
    });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    const happyrec = drText1;
    const happyline = doc.splitTextToSize(happyrec, doc.internal.pageSize.width - 20);

    happyline.forEach(line => {
      doc.text(70, yPos, line);
      yPos += LINE_SPACING;
    });

    doc.setFont('helvetica', 'normal');
    const thankingyoutext = drText2;
    const thankingline = doc.splitTextToSize(thankingyoutext, doc.internal.pageSize.width - 20);
    thankingline.forEach(line => {
      doc.text(80, yPos, line);
      yPos += LINE_SPACING;
    });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    const disclaimerText = drText3;
    const disclaimerline = doc.splitTextToSize(disclaimerText, doc.internal.pageSize.width - 20);
    disclaimerline.forEach(line => {
      doc.text(10, yPos, line);
      //yPos += LINE_SPACING;
    });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    const remText = drText4;
    const remline = doc.splitTextToSize(remText, doc.internal.pageSize.width - 20);
    const firstremline = remline[0];
    doc.text(30, yPos, firstremline);
    yPos += LINE_SPACING;

    const rem1Text = drText5;
    const restremlines = doc.splitTextToSize(rem1Text, doc.internal.pageSize.width - 20);
    restremlines.forEach(line => {
      if (yPos + LINE_SPACING > doc.internal.pageSize.height - 20) {
        doc.addPage();
        yPos = 10;
      }

      doc.text(10, yPos, line);
      yPos += LINE_SPACING;
    });

    doc.setFontSize(12);

      const imgHeight = 10;
      const imgX = 10;
      const imgY = yPos + 10;

      doc.addImage("DRsign.jpeg", 'JPEG', imgX, imgY, IMG_WIDTH, imgHeight);
      yPos = imgY + imgHeight + LINE_SPACING;

      const drDetails = `DR Sandeep\nMD (Radio-Diagnosis)\n C company`;

      if (yPos + LINE_SPACING * 3 > doc.internal.pageSize.height - 10) {
        doc.addPage();
        yPos = 10;
      }

      doc.text(10, yPos, drDetails);
      const pdfFileName = `${Date.now()}.pdf`;

      // Save the PDF locally
      doc.save(pdfFileName);

}

async function audioToText(templateHead,fileName){
   
  const template = newarry.find(x=>x.Heading===templateHead);
  template.content.OBSERVATION=await main(fileName);
  templateTOPdf(template);
 // console.log(template);

}
audioToText("fracture shoulder joint",'sound/file3.wav');


