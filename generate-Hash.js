let generateHash=(str)=>{
    if (str.length > 280  || str.trim().length === 0) {
        return false;
    }

    let arr=str.split(" ");
    arr.unshift("#");
    console.log(arr);

    let genHash=[];
    arr.forEach(word => {
       genHash.push(word.replace(word[0],word[0].toUpperCase()));
    });
    return genHash.join("");
}

console.log(generateHash("my name is dawood."))