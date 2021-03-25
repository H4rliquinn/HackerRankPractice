function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */

    let re= new RegExp(/^(Mr|Mrs|Dr|Er)(\.)\s?[a-zA-Z]+$/); 
    
    /*
     * Do not remove the return statement
     */
    return re;
}
console.log(regexVar());

// let s='Mr. E';
// console.log(s.match(regexVar()));
let s='Er.Dr.';
console.log(s.match(regexVar()));

// s='Mrs. Y';
// console.log(s.match(regexVar()));

// s='Dr#Joseph';
// console.log(s.match(regexVar()));

// s='Er .Abc';
// console.log(s.match(regexVar()));

