// This code is broken. Fix it.

async function getUserName() {
    let myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Dawood");
        }, 1000);
    })
    let name = await myPromise;
    return name;
}

async function main() {
    let result = await getUserName();
    console.log(result);
}
main();