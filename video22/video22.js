//maps

console.log('hello world from HTML');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
// }

let mapArr = arr.map((item,index) =>{
    item = item * item;
    return item;
};
//map tạo ra 1 bảng mới nên không làm modify thay đổi cấu trúc mảng ban đầu
console.log('check value: ', arr);

console.log('check value: ', mapArr);
