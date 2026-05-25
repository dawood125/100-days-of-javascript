const removeDuplicate=(arr)=>{

    if (arr.length === 0) {
        return;
    }

    const uniqueArr=arr.filter((num,index)=>{
       return arr.indexOf(num) === index;

    })

    return uniqueArr;


}



console.log(removeDuplicate([1,2,3,2,1,4]));