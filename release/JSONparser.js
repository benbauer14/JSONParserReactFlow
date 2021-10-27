function createKeyIndex() {
    callflow = {"description" : "test",
    "name": "test2",
    "date": "test3"
}
    console.log(Object.keys(callflow))
    keys = Object.keys(callflow)
    index = 0
    keyObject={}
    for(key in keys){
        console.log(key)
        newpair = {"key": index, "text": key}
        keyObject = {...keyObject, ...newpair }
        index++
    }
    console.log(JSON.stringify(keyObject))
}

createKeyIndex()