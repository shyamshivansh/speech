const Docxtemplater = require('docxtemplater');
//const Packer = require('docxtemplater/build/packer');
const { newarry } = require("./template");
const fs = require('fs');
const JSZip = require('jszip');


function templateToWord(template) {
  const reportName = 'example'; // You can replace this with your dynamic report name

  const content = {
    name: template.name,
    OBSERVATION: template.content.OBSERVATION,
    IMPRESSION: template.content.IMPRESSION,
    tableData: [
      { header1: 'Patient ID', header2: 'Patient Name:', header3: 'Age:', header4: 'Sex:', header5: 'Referring Doctor:', header6: 'Modality:',header7: 'Study Date:', header8: 'Study:'},
      { data1: 420, data2: 'Shiv', data3: 22,data4: "M", data5: 'Sandeep', data6: "CT",data7: `${new Date()}`, data8: 'CHEST PLAIN' },
    
    ],
    imageData: fs.readFileSync('DRsign.jpeg', 'base64'),
  };

  // Sample string template with image, positioning, and font sizes
  const stringTemplate = `
  {{#tableData}}
  | {{header1}} | {{header2}} | {{header3}} |
  | {{data1}} | {{data2}} | {{data3}} |
  {{/tableData}}

    {{name}}

    OBSERVATION:
    {{OBSERVATION}}

    IMPRESSION:
    {{IMPRESSION}}

    {{#imageData}}
      {{image base64}}
    {{/imageData}}
   
  `;

  // Load the string template
  const doc = new Docxtemplater();
  doc.loadZip(new JSZip(stringTemplate));

  // Set the data for the template
  doc.setData(content);

  // Render the Word document
  doc.render();

    // Save the generated Word document locally
    const generatedDoc = doc.getZip().generateAsync({ type: 'nodebuffer' })
    .then(buffer => {
      fs.writeFileSync("test.docs", buffer);
    })
    .catch(error => {
      console.error('Error generating Word document:', error);
    });

}

templateToWord(newarry[2]);
