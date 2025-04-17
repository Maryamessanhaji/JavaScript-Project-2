function reversesString(str) {
    let reverses = '';
    for (let index = str.length - 1; index >= 0; index--) {
        reverses += str[index];
        return reverses;
    }
}

