// Chương 3: Control flow basics
// 1. For loops (vòng lặp)
console.log('Hello world!');
// i++ -> Assign(Gán) -> increment(Tăng)  i = 1; j = i++' ( i is 2, j is 1)
// ++i -> Tăng -> Gán i = 1; j = ++i' ( i is 2, j is 2)
// i++ ===  i = i + 1/ vong lap duyet qua het tat ca cac phan tu muon lap
//   khởi tạo giá trị; check điều kiện để thực hiện; in dòng lệnh console -> thực hiện i++
for (let i = 0; i < 10; i++) {
    console.log('Number i=', i);
}

let arr =['Mu', 'MC', 'Liv', 'Chel']
for (let u = 0; u < arr.length; u++) {
    console.log('Check variable', u, 'is:', arr[u]);
}
//let: chỉ chạy trong phạm vi hàm / var: scope(phạm vi sử dụng) rộng ngoài vòng lặp for