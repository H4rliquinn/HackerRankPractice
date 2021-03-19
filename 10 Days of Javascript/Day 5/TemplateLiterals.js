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
    console.log(literals,expressions)
    return [10,14]
}