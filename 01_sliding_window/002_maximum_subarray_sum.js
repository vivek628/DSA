
/*maximum subarray sum using Kadane’s algorithm.*/
function maxSubArrSum(arr){
    let max_sum=-Infinity
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
        if(sum>max_sum){
            max_sum=sum
        }
        if(sum<0){
            sum=0
        }
    }
 return max_sum
}
 console.log(maxSubArrSum([1,4,-4,6,1]))