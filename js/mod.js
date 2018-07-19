function A(){
    this.foo = "张爱平";
}

if(!global._foo){
    global._foo = new A();
}

module.exports = global._foo;