/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
    //maxlength++;
    var smg = '…';
    if (str.length > maxlength) {
        maxlength = maxlength - smg.length;
        return str = str.slice(0,maxlength) + smg
    } else {
        return str
    }
}
