const cheerio = require("cheerio");
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");
 
var cookies = [];
var LeadsArray=[];


fetch("https://testcrm.balwaan.com/")
    .then((Response) => {
        //Response.text()

        //Response.text().then(result => result)

      
        Response.headers.forEach((value, name) => {
            if (name === "set-cookie") {
                cookies.push(value);
            }
        });

        //console.log(cookies);
        Response.text().then((txt) => {
            const $ = cheerio.load(txt);
            const tokenInput = $('input[name="__RequestVerificationToken"]');
            const tokenValue = tokenInput.val();
            cookies.push(tokenValue);
            return cookies;

        }).then((txt) => {
           // console.log(txt);
            const myHeaders = new Headers();
            myHeaders.append("Cookie", `${txt[0].split(";")[0]}; ${txt[2].split(";")[0]}; `);

            const formdata = new FormData();
            formdata.append("__RequestVerificationToken", txt[3]);
            formdata.append("Email", "shakti@iotcom.io");
            formdata.append("Password", "mtak1234");
           

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://testcrm.balwaan.com/", requestOptions)
            .then((response) => {
                console.log("line NO 44", response.status);
                const requestOptions2 = {
                    method: "GET",
                    headers: myHeaders,
                };

                fetch("https://testcrm.balwaan.com/Order/Index?searchDateType1=3&type=3&OrderNo=&name=&dateFrom=&dateTo=&status=", requestOptions2)
                    .then((res) => {
                        res.text().then(a => {
                            const completeData = csvToObject(a);
                            completeData.forEach(element => {
                                if (element.farmerName !== undefined) {
                                    const dataobj = {
                                        orderId: element.orderID,
                                        number: element.mobileNumber,
                                        name: element.farmerName,
                                        product: element.productName,
                                        price: element.codAmount,
                                        lastDialStatus:0
                                    };
                                    LeadsArray.push(dataobj);
                                }
                            });

                            // Move the console.log inside this block
                            //console.log(LeadsArray);
                            synthesizeSpeechAndSaveToFile(LeadsArray);
                        });
                    })
                    .catch(error => console.log('error', error));
                })
               
        });
    })

    function csvToObject(csvString) {
        // Split the CSV string into an array of rows
        var rows = csvString.split('\n');
    
        // Extract header and create an array of headers
        var headers = ["orderDate","createdDate","createdTime","orderID","orderNumber","mobileNumber","mobileNumber1","mobileNumber2","mobileNumber3","farmerId","farmerName","address1","address2","village","teh","dist","state","pin","PO","other","productName","weight","orderAmount","discountType","discountAmount","codAmount","mRP","taxAmount","status","carrier","employName","employId","count","paymentPaid","paymentStatus"];
    
        // Initialize an array to store the objects
        var objectsArray = [];
    
        // Iterate through rows starting from index 1 (skipping the header)
        for (var i = 1; i < rows.length; i++) {
            var currentRow = rows[i].split(',');
    
            // Create an object and populate it with values from the current row
            var currentObject = {};
            for (var j = 0; j < headers.length; j++) {
                currentObject[headers[j]] = currentRow[j];
            }
    
            // Add the object to the array
            objectsArray.push(currentObject);
        }
    
        return objectsArray;
    }

     function synthesizeSpeechAndSaveToFile(Data) {
        const subscriptionKey = "3bb4de3ba4bd4e52a7e64fb7701f6180";
        const region = "centralindia";
      
        // Set language to Hindi
        const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, region);
        speechConfig.speechSynthesisVoiceName = "hi-IN-SwaraNeural"; // Change to the desired Hindi voice
      
        // Set the output format to 16K mono PCM WAV
        speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Riff16Khz16BitMonoPcm;
      
        const speechSynthesizer = new sdk.SpeechSynthesizer(speechConfig, null);
      
        for (let i = 0; i < Data.length; i++) {
          const currentItem = Data[i];
      
          // The path to the output WAV file
          const outputPath = `tempsounds/${currentItem.orderId}.wav`;
      
          speechSynthesizer.speakTextAsync(
            `हेलो ${currentItem.name}, मैं बलवान एंटरप्राइजेज, जयपुर से बोल रहा हूं। आपने हमसे ${currentItem.price} रुपये में एक ${currentItem.product} खरीदा है। पुष्टि करने के लिए 1 दबाएं, ऑर्डर रद्द करने के लिए 2 दबाएं। `,
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
      
              if (i === Data.length - 1) {
                // Close the synthesizer only after the last item has been processed
                speechSynthesizer.close();
              }
            },
            error => {
              console.error(error);
      
              if (i === Data.length - 1) {
                // Close the synthesizer only after the last item has been processed
                speechSynthesizer.close();
              }
            }
          );
        }
      }