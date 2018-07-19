/*let mySymbol = Symbol();

let obj = {
    [mySymbol]: "zap"
};

console.log(obj[mySymbol]);*/

//Symbol 值作为对象属性名时，不能用点运算符。上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，
// 导致a的属性名实际上是一个字符串，而不是一个 Symbol 值。


//Symbol可以定义一组常量，保证这组常量的值都是不相等的。
/*const log = {};
log.levels = {
    DEBUG:Symbol("debug"),
    INFO:Symbol("info"),
    WARN:Symbol("warn")
};
console.log(log.levels.DEBUG,"debug message");


console.log("计算图形的面积...");
const shapeType = {
    triangle:Symbol
};
function getArea(shape,options){
    let area = 0;
    switch (shape){
        case shapeType.triangle:
            area = 0.5 * options.width * options.height;
            break;
    }
    return area;
}
console.log(getArea(shapeType.triangle,{width:40,height:30}));


console.log("getOwnPropertySymbols方法获取Symbol定义的对象属性");

let key1 = Symbol("key1"),
    key2 = Symbol("key2");
let  obj2 = {
    [key1]:"zap",
    [key2]:"zal"
};

console.log(obj2[key1]);
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertySymbols(obj2));


const obj3 = {
    name:"zap"
};
let foo = Symbol("foo");
Object.defineProperty(obj3,foo,{
    value:"foobar"
});

for(let key in obj3){
    console.log(key,obj3[key]);
}

console.log("getOwnPropertyNames",Object.getOwnPropertyNames(obj3));
console.log("getOwnPropertySymbols",Object.getOwnPropertySymbols(obj3));
console.log("Reflect.ownKeys",Reflect.ownKeys(obj3));*/


/*
let size = Symbol("size");

class Collection{
    constructor(){
        this[size] = 0;
    }

    add(item){
        this[this[size]] = item;
        this[size]++;
    }

    static sizeof(instance){
        return instance[size];
    }
}

let x = new Collection();
console.log(Collection.sizeof(x));

x.add("foo");
console.log(Collection.sizeof(x));

console.log("Object.keys",Object.keys(x));
console.log("getOwnPropertyNames",Object.getOwnPropertyNames(x));
console.log("getOwnPropertySymbols",Object.getOwnPropertySymbols(x));
console.log("Reflect.ownKeys",Reflect.ownKeys(x));
*/

class A1 extends Array{
    constructor(args){
        super(args);
        this[Symbol.isConcatSpreadable] = true;
    }
}

class A2 extends Array{
    constructor(args){
        super(args);
    }
    get[Symbol.isConcatSpreadable](){
        return false;
    }
}

let a1 = new A1();
a1[0] = 3;
a1[1] = 4;


let a2 = new A2();
a2[0] = 5;
a2[1] = 6;

let result = [1,2].concat(a1).concat(a2);
console.log(result);




