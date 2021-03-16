const { EmitFlags } = require("typescript");

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    try{
        if (a==0){
            throw 'Zero Error';
        } else if (a<0){
            throw 'Negative Error';
        } else {
            return 'YES';
        }
    } catch (e){
        return e;
    }
}

let a=1;
console.log(isPositive(a));
a=0;
console.log(isPositive(a));
a=-3;
console.log(isPositive(a));
