/*let arr = [1,2,3,4,5,4,3,2,1];

var s = new Set();

arr.forEach((x)=> s.add(x));
console.log(s);

console.log([...new Set(arr)]);*/


/*function padStart(str,len,padStr){
    const length = str.length;

    if(length <len){
        let pad = "";
        for(let i=0; i <(len - length);i++){
            pad +=padStr;
        }
        return pad + str;
    }

    return str;
}
let result = padStart("abc",10,"f");
console.log("result",result);*/
function padStart2(str,len,padStr){
    const length = str.length,
        arr = padStr.split(""),
        arrLength = arr.length;

    if(length <len){
        let pad = "",
            index = 0;
        for(let i=0; i <(len - length);i++){
            pad += arr[index];
            index++;
            if(index === arrLength) index =0;
        }
        return pad + str;
    }
    return str;
}
let result2 = padStart2("abc",10,"foo");
console.log("result2",result2);

