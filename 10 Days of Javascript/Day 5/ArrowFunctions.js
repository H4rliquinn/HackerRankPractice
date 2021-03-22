function modifyArray(nums) {
    let newNums=nums.map(item=>{
        if (item%2===0){
            return item*2;
        } else{
            return item*3;
        }
    })
    return newNums;
}

let a=[1,2,3,4,5];

console.log(modifyArray(a));