
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let max=-1;
    let second=-1;
    for (let x in nums){
        if (nums[x]>max){
            second=max;
            max=nums[x];
        } else if (nums[x]>second && nums[x]<max){
            second=nums[x];
        }
    }
    return second;
}

let ia=[2,3,6,6,5];

console.log(getSecondLargest(ia));