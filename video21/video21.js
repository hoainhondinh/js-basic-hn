//Array methods 
// filter / find
//filter trả ra array / find trả ra phần tử element
console.log('hello world');

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //filter: lọc phần tử trong mảng
// let resultfilter = arr.filter((item, index)=>{
//     // console.log('check filter: item: ' , item , 'index: ' , index)
//     return item && item > 5;
//     //trả ra 1 phần tử của mảng / sử dụng return item > 5 thì trả ra true & false
// });

// console.log('Result filter: ', resultfilter);

let arr = [
    {name: 'John', age: 20},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 36},
    {name: 'Nhon', age: 25}
]

// let filter = arr.filter((item, index) =>{
//     return item && item.age === 25;
// })
// console.log(filter);

//find tìm phần tử thỏa điều kiện đầu tiên
let find = arr.find((item, index) =>{
    return item && item.age === 25;
})
console.log(find);