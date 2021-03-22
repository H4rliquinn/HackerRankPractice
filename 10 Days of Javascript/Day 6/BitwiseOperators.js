    function getMaxLessThanK(n,k){
        let max=0;
        for (let x=1;x<n;x++){
            
            for (let y=x+1;y<n+1;y++){
                if((x&y)>max && (x&y)<k) max=(x&y);
                if (max==k-1) return max;
            }
        }
        return max;
    }

let n=8;
let k=6;

console.log(getMaxLessThanK(n, k));