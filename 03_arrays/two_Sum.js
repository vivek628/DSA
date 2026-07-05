function twosum(arr,target){
    let map=new Map()
    for(let i=0;i<arr.length;i++)
    {
        let diff=target-arr[i]
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        else{
            map.set(arr[i],i)
        }
    }
    return false
}

console.log(twosum([2,6,5,8,11],14))

//two pointer approach
function twoSum(arr,target){
    let sortedarr=arr.sort((a,b)=>a-b)
    let left=0
    let right=arr.length-1
    while(left<right){
        let sum=sortedarr[left]+sortedarr[right]
        if(sum==target){
            return [sortedarr[left],sortedarr[right]]
        }
        if(sum>target){
            right=right-1
        }
        else{
            left=left+1
        }
    }
    return false 
}
console.log(twoSum([2,6,5,8,11],14))

//return index
function two_sum(arr,target){
    let sortedarr=arr.map((value,index)=>[value,index]).sort((a,b)=>a[0]-b[0])
    let left=0
    let right=arr.length-1
    while(left<right){
        let sum=sortedarr[left][0]+sortedarr[right][0]
        if(sum==target){
            return [sortedarr[left][1],sortedarr[right][1]]
        }
        if(sum<target){
            left=left+1
        }
        else{
            right=right-1
        }
    }
    return false
}
console.log(two_sum([2,6,5,8,11],14))
