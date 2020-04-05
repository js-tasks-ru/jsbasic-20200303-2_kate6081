/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
    let ab2 = arr.concat();
    for (let i = 0; i < ab2.length; i++){
        let element = ab2[i];

        if (element < b || element > a){
            ab2.splice(i,1);
        }
    } 
    return ab2
}
