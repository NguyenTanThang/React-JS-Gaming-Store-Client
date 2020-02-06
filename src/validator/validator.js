export const isNull = (data) => {
    if (data === "undefined" || data === "null" || data === null || data === undefined || data === ""){
        return true;
    } else {
        return false;
    }
}