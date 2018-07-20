/*
let obj = new Proxy({},{
    get:function(target,key,receiver){
        console.log(`getting ${key}`);
        return Reflect.get(target,key,receiver);
    },
    set:function(target,key,value,receiver){
        console.log(`setting ${key}`);
        return Reflect.set(target,key,value,receiver);
    }
});

obj.count = 1;
console.log(`obj.count ${obj.count}`);


let target = {};
let proxy = new Proxy(target,{
    get:function(target,property){
        return 35;
    }
});
proxy.name = 36;
console.log(proxy.name);
console.log(target.name);*/


/*let handler = {
    get:function(target,name){
        if(name === "prototype"){
            return Object.prototype;
        }
        return "Hello, " + name;
    },
    apply:function(target,thisBinding,args){
        return args[0];
    },
    construct:function(target,args){
        return {value: args[1]};
    }
};

let fproxy = new Proxy(function(x,y){
    return x +y;
},handler);

debugger;
fproxy(1,2);
new fproxy(1,2);
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo === "Hello, foo");*/


/*
let person = {
    name:"张三"
};

let proxy = new Proxy(person,{
    get:function(target,prop){
        if(prop in target){
            return target[prop];
        }else{
            throw new Error(`Property "${prop}" does not exist`);
        }
    }
});
console.log(proxy.name);
console.log(proxy.age);*/


/*
console.log("get拦截，实现数组读取负数的索引");
function createArray(...elements){
    let handler = {
        get(target,propKey,receiver){
            let index = Number(propKey);
            if(index < 0){
                propKey = String(target.length + index);
            }
            return Reflect.get(target,propKey,receiver);
        }
    };

    let target = [];
    target.push(...elements);
    return new Proxy(target,handler);
}

let arr = createArray("a","b","c");
console.log(arr[-1]);
*/

console.log("apply拦截函数的调用");
let handler = {
    apply(target,ctx,args){
        console.log("I am the proxy");
        return Reflect.apply(...arguments);
    }
};
let target = function(){
    return "I am the target";
};

let p = new Proxy(target,handler);
let result = p();
console.log("result：",result);