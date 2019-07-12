class Emplo{
    getsal():void{
        let sal=30000;
        if(true){
            let sal=40000;
            console.log(sal);
        }
        console.log(sal);
    }
}
var e = new Emplo();
e.getsal();
console.log(e);
//                     fuction types

function add(x:number,y:number,c:number):number{
return x+y+c;
}
let add1= function affnfa(a:number,b:number):number{
    return a+b;
}
let res = add(1,5,8);
let red = add1(2,5);
console.log(`${res} and ${red}`);
