function maxProfit(prices){
    let maxprofit=0
    let minprice=prices[0]
    for(let price of prices){
        if(price<minprice){
            minprice=price
        }
        let profit=price-minprice
        if(profit>maxprofit){
            maxprofit=profit
        }
    }
    return maxprofit
}

console.log(maxProfit([7,1,5,3,6,4]));