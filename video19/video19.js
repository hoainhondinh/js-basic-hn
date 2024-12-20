//function & methods => reuse(tái sử dụng)
// methods không đứng 1 mình, đứng trong 1 class/object
let sum = (a,b) => {
    return a + b;
}
console.log('sum = ', sum(10,20));

let obj = {
    name: 'John',
    age: 30,
    sayHello: function() {//method
        return this.name;
    }
}        
console.log('Hello, my name is '+ obj.sayHello());
