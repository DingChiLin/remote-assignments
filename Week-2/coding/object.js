function calculate(args) { 
    let result;
    if( args.op==="+") { 
        result = args.n1+args.n2;
    } else if (args.op==="-") { 
        result = args.n1-args.n2;
    } else {
        result = "Not supported";
    }
    return result; 
}

const obj1 = {n1: 4, n2: 5, op: '-'};
const result1 = calculate(obj1);
console.log(result1);

const obj2 = {};
obj2.n1 = 9;
obj2.n2 = 1;
obj2.op = '+';
const result2 = calculate(obj2);
console.log(result2);

function Obj(n1, n2, op) {
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
}
const obj3 = new Obj(1, -5, '+');
const result3 = calculate(obj3);
console.log(result3);

class Obj2 {
    constructor(n1, n2, op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}
const obj4 = new Obj2(100, 1, '-');
const result4 = calculate(obj4);
console.log(result4);


/**
 * Compare {} and Object.create
 * link: https://www.fed123.com/javascriptnodejs/4531.html
 */

 /*
var o1 = {a: 1};
console.log(o1);
console.log(o1.a);
console.log(o1.toString());

var o2 = Object.create(Object.prototype,{
    a:{
        writable:true,
        configurable:true,
        value:'1'
    }
})
console.log(o2);
console.log(o2.a);
console.log(o2.toString());
*/