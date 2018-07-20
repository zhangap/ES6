/*
function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,"done");
    });
}

timeout(1000).then((value)=>{
    console.log(value);
});
*/


/*
debugger;
let promise = new Promise((resolve,reject)=>{
    console.log("Promise");
   setTimeout(resolve,2000);
});
promise.then((value)=>{
    console.log("resolve");
});
console.log("Hi");*/

/*
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject(new Error("fail")),3000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(p1),1000);
});

p2.then(result=>{
    console.log(result);
}).catch(error=>console.log(error));*/

/*
function getJSON(){
    let json = {
        name:"张爱平",
        age:28
    };
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,5000,json);
    });
}

getJSON().then((value)=>{
    value.address = "湖北秭归";
    return value;
}).then((value)=>{
    console.log("第二个then执行",value);
});
*/


/*
const someAsyncThing = function(){
    return new Promise((resolve,reject)=>{
        resolve(x +2);
    })
};

process.on("unhandledRejection",function(err,p){
    console.log("异常信息：" + err)
});

someAsyncThing().then(value=>{
    console.log("everything is greet"+ value);
});

setTimeout(()=>{console.log(123)},3000);*/

let p1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("p1执行");
        resolve("p1");
    },1000);
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("p2执行");
        resolve("p2");
    },3000);
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("p3执行");
        resolve("p3");
    },1000);
});

let p4 = Promise.all([p1,p2,p3]);
p4.then((value)=>{
    console.log("调用完毕" + value);
}).catch((reason)=>{
    console.log(reason);
});
