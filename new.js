
const {newarry} =require("./template");
const text="fracture cervical spine";

const requireArray=[];
newarry.forEach(a => {
    const obj={
      Id:a.templateID,
      head:a.name
     };
    requireArray.push(obj); 
    
});
// function partialSearchInObjects(partial, array, key) {
//     const filteredObjects = array.filter(obj => obj[key].includes(partial));
//     return filteredObjects;
// }



const result = newarry.filter(a=>a["Heading"].includes("2nd"));
console.log(result);
