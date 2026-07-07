// function maxavg(arr,k){
//     let maxavg=0

//     for(let i=0;i<arr.length-k;i++){
//         let sum=0
//         let x=0;
//         while(x<k){
//             sum=sum+arr[i+x]
//             x++
//             console.log(sum)
//         }
//         let avg=sum/k
//         if(avg>maxavg){
//             maxavg=avg
//         }
//     }
//     return maxavg
// }
function maxavg(arr, k) {
  let sum = 0;
  let maxsum = 0;
  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  maxsum = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    console.log(sum);
    maxsum = Math.max(sum, maxsum);
  }
  return maxsum / k;
}
let arr = [1, 12, -5, -6, 50, 3];
let k = 4;
console.log(maxavg(arr, k));
