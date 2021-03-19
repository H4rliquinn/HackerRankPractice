/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

//Note, this doesn't test knowledge of template literals at all.

function sides(literals, ...expressions) {
    let first=(expressions[1]+Math.sqrt(Math.pow(expressions[1],2)-16*expressions[0]))/4;
    let second=(expressions[1]-Math.sqrt(Math.pow(expressions[1],2)-16*expressions[0]))/4;
    return [first,second].sort();
}

console.log(sides("S",140,48));
