//if/else statements. Break & continue

let arrTop4 = ['Liv', 'Chel', 'Mu', 'ManCity'];

let i = 0;
// while (i < arrTop4.length) {
//     console.log('check i', i);
//     if(arrTop4[i] === 'Chel'){
//         console.log('Found it: ', arrTop4[i]);
//         break;// giúp thoát khỏi vòng lặp khi đã thỏa if
//     }
//     i++;
// }

while (i < arrTop4.length) {
    i++;
    if(arrTop4[i] === 'Chel'){
        console.log('Found it: ', arrTop4[i]);
        continue; // giúp bỏ qua phần còn lại của vòng lặp và tiếp tục với phần tiếp theo
    }
    console.log('check i', i);
}