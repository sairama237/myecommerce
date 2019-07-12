let customers = new Set();
let str1= {name:"john"};
let str2= {name:"pete"};
let str3= {name:"mary"};
let str4= {name:"sai"};
// some customers are duplications
customers.add(str1);
customers.add(str2);
customers.add(str3);
customers.add(str4);
customers.add(str1);
console.log(customers.size);//4
for(let customer of customers){
    console.log(customer.name) //john than pete than mary than sai
}


//////////////////////sorting order
let myset = new Set(["oranges","apples","bannes","mangos"]);
console.log(myset);

console.log(Array.from(myset).sort());

//customizing (literal way of obj )
var obj1 = {id:1,name:"chiru"};
var obj2 = {id:4,name:"sai"};
var obj3 = {id:7,name:"uday"};
var obj4 = {id:3,name:"rama"};
var obj5 = {id:5,name:"chiru1"};
var obj6 = {id:2,name:"chiru2"};

let myset = new Set([obj1,obj2,obj3,obj4,obj5,obj6]);
console.log(myset);
let res = (Array.from(myset).sort((o1,o2) =>
{
  return o1.id > o2.id ? 1 : o1.id < o2.id ? -1 : 0
}))

console.log(res);


//conductor string
class Student{
    constructor (sid,sname,syear,sdep){
        this.sid = sid;
        this.sname = sname;
        this.syear = syear;
        this.sdep = sdep;
    }
  }
  var st1 = new Student(1002,"vikash1",2,"ece");
  var st2 = new Student(1003,"vikash2",3,"eee");
  var st3 = new Student(1001,"vikash3",4,"eee");
  var st4 = new Student(1008,"vikash4",5,"cse");
  var st5 = new Student(1004,"vikash5",2,"it");
  var st6 = new Student(1007,"vikash6",8,"mec");

let myset = new Set([st1,st2,st3,st4,st5,st6]);
console.log(myset);

 let res = (Array.from(myset).sort((ob1,ob2) =>{
    return ob1.sid > ob2.sid ? 1 :ob1.sid < ob2.sid ? -1:0
}))

// let res = (Array.from(myset).sort((ob1,ob2) =>{
//     return ob1.sname > ob2.sname ? 1 :ob1.sname < ob2.sname ? -1:0
// }))
console.log(res);