// function substring(str){
//     let map=new Map()
//     let left=0
//     let right=0
//     let maxlength=0
//     for(let right=0;right<str.length;right++){
//         if(map.has(str[right])){
//             left=map.get(str[right])+1
//         }
//         else{
//             map.set(str[right],right)
//             maxlength=Math.max(maxlength,right-left+1)
//         }
//     }
//     return maxlength
// }
// console.log(substring("cadbabcd"))
function substring(str) {
    let left = 0;
    let start = 0;
    let max = 0;
    let map = new Map();

    for (let right = 0; right < str.length; right++) {

        if (map.has(str[right])) {
            left = Math.max(left, map.get(str[right]) + 1);
        }

        map.set(str[right], right);

        if (right - left + 1 > max) {
            max = right - left + 1;
            start = left;
        }
    }

    return [max, str.slice(start, start + max)];
}

console.log(substring("pwwkewxpw")); 