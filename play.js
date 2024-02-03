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

// Example usage:
let inputString = "• there is prominence superficial sulci [ comma ] cisterns and ventricular system [ dash ] suggestive of oblique suggestive of diffuse cerebral atrophy [ full stop ] [ paragraph ] Symmetrical hypodensity noted in bilateral periventricular [ comma ] centrum semiovale [ comma ] corona radiata suggestive of chronic white matter ischemic changes [ full stop ] [ paragraph ] L5 cerebral parenchyma appears normal [ full stop ] [ paragraph ] There is no history of midline structures [ full stop ] [ paragraph ] Cerebellar and brainstem appear normal [ full stop ] [ paragraph ] No evidence of a of any intra-axial or extra-axial lung disease seen [ full stop ] [ paragraph ] Bony stool vault appears normal [ full stop ] [ paragraph ] Bilateral mastoid appears normal [ full stop ] No evidence of soft tissue mucosal thickening [ full stop ] [ paragraph ] Bilateral visualized orbits are normal [ full stop ] [ paragraph ] Right concha bullosa is seen [ full stop ] [ paragraph ] Devita nasal septum with spur towards left side is seen contacting left inferior turbinate [ full stop ] [ paragraph ] Soft tissue mucosal thickening seen in the right maxillary sinus [ full stop ]";
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
};

let result = findReplaceMultiple(inputString, replacementObj);
console.log(result);
