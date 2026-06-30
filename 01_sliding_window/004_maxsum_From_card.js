/*You are given an array cardPoints and an integer k. 
You can take exactly k cards from either the beginning or the end of the array. 
Return the maximum score.*/
function maxsum(arr,k){

    let leftsum=0
    let maxsum=0
    for(let i=0;i<k;i++){
        leftsum=leftsum+arr[i]
    }
    maxsum=leftsum
    let rightsum=0
    let i=0
    for(let j=1;j<=k;j++){
        leftsum=leftsum-arr[k-j]
        rightsum=rightsum+arr[arr.length-j]
        maxsum=Math.max(maxsum,leftsum+rightsum)
    }
    return maxsum
}
console.log(maxsum([6,2,3,4,7,2,1,7,1],4))