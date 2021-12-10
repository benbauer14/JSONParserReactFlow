keyArray = []
linkDataArrray = []
//########## https://reactflow.dev/
function createMasterKeyID(callflow) {
    keys = Object.values(callflow["instructions"])
    index = 0
    for(let i = 0; i<keys.length; i++){
        newpair = {"id": index, "type": "input", "label": callflow["instructions"][i]["id"], position: {x: 200, y: 0}}
        keyArray.push(newpair)
        index++
    }
}

function createLinkDataArray(callflow){
    for(let i = 0; i<keyArray.length; i++){
        section = keyArray[i]["label"]
        if(callflow["instructions"][i]["expectedResponses"] == undefined){
            if(findMasterKeyID(callflow["instructions"][i]["nextInstructionId"]) != undefined){
                masterKeyIndex = findMasterKeyID(callflow["instructions"][i]["nextInstructionId"])
                linkDataArrray.push({id: 'e' + i + "-" + masterKeyIndex, source: i, "target": masterKeyIndex})
            }
        }else{
            expectedResponses = (callflow["instructions"][i]["expectedResponses"])
            for(let j =0; j < expectedResponses.length; j++ ){
                console.log(expectedResponses[j]["nextInstructionId"])
                masterKeyIndex = findMasterKeyID(expectedResponses[j]["nextInstructionId"])
                linkDataArrray.push({id: 'e' + i + "-" + masterKeyIndex, source: i, "target": masterKeyIndex})
            }
        }
    }
    console.log(linkDataArrray)
}

function findMasterKeyID(keyLabel){
    //finds index in keyArray that contains the keyText
    //this function allows for the keys to be linked in the LinkDataArray

    for(let i = 0; i < keyArray.length; i++){
        if(keyArray[i]["label"] == keyLabel){
            return i
        }
    }
}

function createElements(){
    let callFlow = JSON.parse(document.getElementById("myCallFlow").value)

    createMasterKeyID(callFlow)
    createLinkDataArray(callFlow)
    console.log(keyArray)
    console.log(linkDataArrray)

    let graphLinksModel = '{'+ JSON.stringify(keyArray) + JSON.stringify(linkDataArrray)+ "\n}"
    console.log(graphLinksModel)
    document.getElementById("mySavedModel").value = graphLinksModel
    
}

function messageMe(key){
    
    let callflow = JSON.parse(document.getElementById("myCallFlow").value)

    console.log("test" + key)
    console.log(waveVariants(key))
    console.log(answersByMasterCatalogID())
  }

  function playWav(wavefile){
    var myAudio = new Audio('wavefile');

  }
  
function waveVariants(key){
    //function returns all wave files for a specific survey key in an object with language as the key and wave filenames in an array displaying 
    //wav files in the order listed in the call flow

    let callflow = JSON.parse(document.getElementById("myCallFlow").value)
    instructionVariantArray = (callflow["instructions"][findMasterKeyID(key)]["instructionVariants"])
    langWav = {}
    if(instructionVariantArray != undefined){
        for(let i = 0; i < instructionVariantArray.length; i++){
            lang = instructionVariantArray[i]["language"]
            //loop through all possible prompts in the flow and add all wav files
            wavArray = []
            for(let j = 0; j < instructionVariantArray[i]["prompts"].length; j++ ){
                if(instructionVariantArray[i]["prompts"][j]["audioFile"] != undefined){
                    wavArray.push(instructionVariantArray[i]["prompts"][j]["audioFile"])
                }
            }
            langWav[lang] = wavArray
        }
    }   

    return langWav
}

function answersByMasterCatalogID(){
    //returns an object with the available masterCatalogIDs and the available answers in an array
    let callflow = JSON.parse(document.getElementById("myCallFlow").value)
    answers = {}
    for(let i = 0; i < callflow["instructions"].length; i++){
        if((callflow["instructions"][i]["expectedResponses"]) != undefined){
            newQuestion = callflow["instructions"][i]["platformMetaData"]["masterCatalogueId"]
            if(newQuestion in answers){
                answerArray = answers[newQuestion]
            }else{
                answerArray = []
            }
            for(let j = 0; j < callflow["instructions"][i]["expectedResponses"].length; j++){
                answerArray.push(callflow["instructions"][i]["expectedResponses"][j]["platformMetaData"]["masterCatalogueId"])
            }
            answers[newQuestion] = answerArray
        }
    }
    return answers
}