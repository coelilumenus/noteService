function isEmpty(obj) {
    for (let key in obj) {
        return true;
    }
    return false; 
}

export {isEmpty};