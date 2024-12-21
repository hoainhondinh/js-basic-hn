//Call back, setTimeout, setinterval

console.log('call back, setTimeout, setInterval');

let sum = (a, b, callback) => {
    let tong = a + b;
    // setTimeout(() => {
    //     callback(tong);
    // }, 2000);
    let i = 0;
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if (i === 5) {
            clearInterval(timer);
        }
    }, 1000);//lap vo han
}


let printSum = (message) => {
    console.log('check sum: 7 + 9 = ' , message);
}

sum (7, 9, printSum)


