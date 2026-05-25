function printNum(num) {
    let myPromise = new Promise(function (resolve, reject) {

        setTimeout(() => {
            resolve(num);
        }, 2000);
    })

    myPromise.then((result) => {
        console.log(result);
    })
}


printNum(10);