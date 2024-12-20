console.log('Hello world');

function sum(x , y){
    console.log('1');
    console.log('2');
    console.log('3');
    return;// thoát ra khỏi function
    console.log('4');
    console.log('5');
    return x + y;
}
console.log('check sum: ', sum(9,6));