function getCount(objects) {
    let retVal=0;
    for (let o in objects){
        if (objects[o].x===objects[o].y) retVal++;
    }
    return retVal;
}