// console.info("扩展运算符可以将字符串转换为真正的数组，并且能够识别四个字节的unicode字符");
// let length = str =>[...str].length;
//
// console.log("zap的长度",length("zap"));
//
// console.log("Array.from将伪数组转换为数组");
// let tempArr = {
//     "0":"a",
//     "1":"b",
//     length:2
// };
// console.log(Array.from(tempArr));
//
// let map = new Map([
//     [1,"one"],
//     [2,"two"],
//     [3,"three"],
// ]);
// let mapKeys = [...map.keys()];
// console.log(mapKeys);
//
// console.log(Array.from("中华人名共和国"));
//
//
// console.log(Array.of(...[1,2,3]));
//
// let arr2 = [1,2,3,4,5];
// console.log(arr2.copyWithin(0,3));
//
// var result2 = [1,2,3,-4,5,-2].find((n)=> n<0);
// console.log(result2);
// let result3 = [1, 5, 10, 15].find((value,index,arr)=> value>10);
// console.log(result3);
//
//
// let arr3 = ["a","b"];
// for(let index of arr3.keys()){
//     console.log("index",index);
// }
//
// /*for(let index of arr3.values()){
//     console.log("index2",index);
// }*/
//
// for(let index of arr3.entries()){
//     console.log("index3",index);
// }
//
//
// console.log("generator函数");
// function * generatorFn(){
//     yield "zap";
//     yield "28";
//     return "zap 28";
// }
//
// var gf = generatorFn();
// console.log(gf.next());
// console.log(gf.next());
// console.log(gf.next());


// let lastWord = "last word";
// const a = {
//   "first word" : "hello",
//     [lastWord]:"word"
// };
// console.log(a["first word"]);
// console.log(a[lastWord]);
// console.log(a["last word"]);
//
// let obj = {
//   "name":"zap",
//   "age":28
// };
//
// Object.defineProperty(Object,"isVisible",{
//     enumerable:false,
//     value:"hello"
// });
//
// console.log(obj.isVisible);


/*const obj = {
    foo:123,
    get bar(){
        return "abc"
    }
};
console.log(obj);

console.log(Object.getOwnPropertyDescriptors(obj));*/


/*
let mix = (object) =>({
    with:(...mixins)=> mixins.reduce(
        (c,mixin)=> Object.create(
            c,Object.getOwnPropertyDescriptors(mixin)
        ),object)
});
// multiple mixins example
let a = {a: 'a'};
let b = {b: 'b'};
let c = {c: 'c'};
let d = mix(c).with(a, b);
console.log(d);
*/


/*
const  proto = {
    foo:"hello"
};
const obj = {
    foo:"world",
    find(){
        return super.foo;
    }
};
Object.setPrototypeOf(obj,proto);
console.log(obj.find());

*/



/*
const proto = {
    x:"hello",
    z:"zap",
    foo(){
        console.log(this.x);
    }
};

const obj = {
    x:"word",
    foo(){
        super.foo();
    }
}
Object.setPrototypeOf(obj,proto);
console.log(obj);
console.log(obj.foo());
*/


/*
let {keys,values,entries} = Object;
let obj = {a:1,b:2,c:3};
for(let key of keys(obj)){
    console.log(key);
}*/

/*const obj = {
    foo:"bar",
    baz:42
};
console.log(Object.values(obj));*/

const obj = Object.create({},{p:{value:42,enumerable:true}});
console.log(Object.values(obj));
