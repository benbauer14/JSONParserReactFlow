keyArray = []
linkDataArrray = []

function createMasterKeyIndex(callflow) {
    keys = Object.values(callflow["instructions"])
    index = 0
    for(let i = 0; i<keys.length; i++){
        newpair = {"key": index, "category": "master", "text": callflow["instructions"][i]["id"]}
        keyArray.push(newpair)
        index++
    }
}

function createLinkDataArray(callflow){
    for(let i = 0; i<keyArray.length; i++){
        section = keyArray[i]["text"]
        if(callflow["instructions"][i]["expectedResponses"] == undefined){
            if(findMasterKeyIndex(callflow["instructions"][i]["nextInstructionId"]) != undefined){
                masterKeyIndex = findMasterKeyIndex(callflow["instructions"][i]["nextInstructionId"])
                linkDataArrray.push({"from": i, "to": masterKeyIndex})
            }
        }else{
            expectedResponses = (callflow["instructions"][i]["expectedResponses"])
            for(let j =0; j < expectedResponses.length; j++ ){
                console.log(expectedResponses[j]["nextInstructionId"])
                masterKeyIndex = findMasterKeyIndex(expectedResponses[j]["nextInstructionId"])
                linkDataArrray.push({"from": i, "to": masterKeyIndex})
            }
        }
    }
    console.log(linkDataArrray)
}

function findMasterKeyIndex(keyText){
    //finds index in keyArray that contains the keyText
    //this function allows for the keys to be linked in the LinkDataArray

    for(let i = 0; i < keyArray.length; i++){
        if(keyArray[i]["text"] == keyText){
            return i
        }
    }
}

function createGraphLinksModel(){
    let callFlow = JSON.parse(document.getElementById("myCallFlow").value)

    createMasterKeyIndex(callFlow)
    createLinkDataArray(callFlow)
    console.log(keyArray)
    console.log(linkDataArrray)

    let graphLinksModel = '{ "class": "go.GraphLinksModel",' + '\n' + '"copiesArrays": true,' + '\n' + '"copiesArrayObjects": true,' + '\n' + '"nodeDataArray": ' + JSON.stringify(keyArray) +',\n"linkDataArray": ' + JSON.stringify(linkDataArrray)+ "\n}"
    console.log(graphLinksModel)
    document.getElementById("mySavedModel").value = graphLinksModel
    
}

function messageMe(key){
    
    let callflow = JSON.parse(document.getElementById("myCallFlow").value)

    console.log("test" + key)
    clickedObject = JSON.stringify(callflow["instructions"][findMasterKeyIndex(key)]["instructionVariants"])
    console.log(clickedObject)

  }

  function playWav(wavefile){
    var myAudio = new Audio('wavefiile');

  }
