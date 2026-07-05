/*question
You are given an array fruits where each element
 represents a type of fruit on a tree. You have 2 baskets,
 and each basket can hold only one type of fruit, 
 but any quantity of that type. Starting from any tree, 
 you must pick exactly one fruit from each consecutive tree 
 until you encounter a third fruit type.*/
 function maxfruits(fruits,k){
    let l=0;
    let r=0
    let max=0
    let set=new Set()
    let count=0
    for(let r=0;r<fruits.length;r++){
        set.add(fruits[r])
        let size=set.size
        if(size>k){
            set.clear()
            count=0
            r=r-2
        }
        else{
            count=count+1
            if(count>max){
                max=count
            }
        }
    }
    return max
 }

 console.log(maxfruits([3,3,3,1,2,1,1,2,3,3,4,4],2))
