console.log("Hello world from HTML");

//dinh nghia 1 object a:  
// key: value 
let obj = {
    name: "Nhon",
    age: 25,
    city: "New York",
    a: function(){
        console.log('Hello')  //in ra console Hello khi goi ham a
        return '';
    } 
};
  
let b = 'name';

object[b] = 'Hary';
let c = ''     //khai bao 1 string rong

console.log('what is your name?', `My name 's`, obj.name)//co 2 cach goi ra
console.log('where are you from?', `I'm from`, obj['city'])// co the gan dong gia tri
console.log('call function:' , obj.a())