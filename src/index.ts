function threeSum(nums: number[]): number[][] {
    let uniqueNums = new Set(nums)
    let triplet: number[] = []
    let result: number[][] = []
    const uniqueArray = Array.from(uniqueNums);
    console.log("Unique Array"+uniqueArray)
    for(let i=0; i<uniqueArray.length; i++)
    {
        let otherNumsSum = -uniqueArray[i]
        console.log("unique Array i element"+uniqueArray[i])
        console.log("Other Nums Sum"+otherNumsSum)
       
        for(let j=i+1; j<uniqueArray.length - i - 1; j++)
        {
            console.log("unique Array j element"+uniqueArray[j])
        let otherNum = otherNumsSum - uniqueArray[j]
        if(otherNum === uniqueArray[j] && j === uniqueArray.indexOf(otherNum))
        {
            continue;
        }
        if(otherNum === uniqueArray[i] && i === uniqueArray.indexOf(otherNum))
        {
            continue;
        }
        console.log("Other Num"+otherNum)

        if(uniqueArray.includes(otherNum))
        {
         triplet.push(uniqueArray[i])
         triplet.push(uniqueArray[j])
         triplet.push(otherNum)
         result.push(triplet)
         triplet = []
        }
        }
        return result
    }

    return []
    

}

const resultArray: number [][] = threeSum([-1,0,1,2,-1,-4,5])
console.log("result" +resultArray)

