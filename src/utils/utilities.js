export const truncate = (plainString) => {
    let answer = "";

    if (plainString.length > 29) {
        answer = `${plainString.substring(0, 27)}...`;
    } else {
        answer = plainString;
    }

    return answer;
}