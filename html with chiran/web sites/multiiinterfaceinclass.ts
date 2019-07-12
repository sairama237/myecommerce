interface Main{
    age:number;
    m1():string;
}
interface Muscial extends Main{
    instument:string;
    m2():string;
}

class child implements Muscial{
    age:number=10;
    m1(){ 
        return "m1 implementaion"
    }
    instument:string="drumms";
    m2(){ 
        return "m1 implementaion"
    }
}
var drums = new child()
console.log(drums.age);
console.log(drums.instument);
console.log(drums.m1());
console.log(drums.m2());