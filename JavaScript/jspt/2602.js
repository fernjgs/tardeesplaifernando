function nand(parameter1, parameter2) {
    if (parameter1 == true && parameter2 == true) {
        return false;
    } else {
        return true;
    }
}
console.log(nand(true, false))
console.log(nand(false, true))
console.log(nand(true, true))
console.log(nand(false, false))


function nor(parameter1, parameter2) {
    if (parameter1 == false && parameter2 == false) {
        return true
    } else {
        return false
    }
}
console.log(nor(true, false))
console.log(nor(false, true))
console.log(nor(true, true))
console.log(nor(false, false))



function xor(one, two) {
    return one !== two
}
console.log(xor(true, false))
console.log(xor(false, true))
console.log(xor(true, true))
console.log(xor(false, false))


