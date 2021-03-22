function getMaxLessThanK(n,k){
    let max=0;
    for (let x=1;x<n;x++){
        for (y=x+1;y<n+1;y++){
            console.log(x,y,x&y);
        }
    }
}

let n=5;
let k=2;

console.log(getMaxLessThanK(n, k));