function indexOfIgnoreCase(str, subStr) {
    if (subStr === "") return 0; // Edge case: empty subStr
    if (str === "") return -1;   // Edge case: empty str

    // Convert both strings to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the position of the substring
    return lowerStr.indexOf(lowerSubStr);
}