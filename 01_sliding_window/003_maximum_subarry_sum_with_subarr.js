function maxsumsubarr(arr){
    let start=0;
    let end=0;
    let tempstart=0;
    let maxsum=-Infinity
    let sum=0
    for(let i=0;i<arr.length;i++){
         if (arr.length === 0) return [[], 0]
        sum=sum+arr[i]
        if(sum>maxsum){
            maxsum=sum
            start=tempstart
            end=i
        }
        if(sum<0){
            sum=0;
            tempstart=i+1
        }

    }
    return [arr.slice(start,end+1),maxsum]
}
 console.log(maxsumsubarr([1,-4,-4,6,1]))