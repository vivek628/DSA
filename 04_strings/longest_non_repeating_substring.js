function substringlen(str){
    let map=new Map()
    let left=0;
    let max=0
    for (let right=0;right<str.length;right++){
        if(map.has(str[right])){
            left=map.get(str[right])+1
        }
        map.set(str[right],right)
        let len=right-left+1
        if(len>max){
            max=len
        }

        

    }
    return max
}
console.log(substringlen("abcabcbb")); 
console.log(substringlen("bbbbb"));    
console.log(substringlen("pwwkew"))

function substring(str){
    let left=0
    let start=0
    let maxlen=0
    let map=new Map()
    for(let right=0;right<str.length;right++){
        if(map.has(str[right])){
            left=map.get(str[right])+1

        }
        map.set(str[right],right)
        let len=right-left+1
        if(len>maxlen){
            maxlen=len
            start=left
        }
    }
    return str.split("").slice(start,start+maxlen).join("")
}
console.log(substring("abcabcbb")); // "abc"
console.log(substring("bbbbb"));    // "b"
console.log(substring("pwwkew"))