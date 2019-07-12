// class Parent{
//     customerDetails(){
//         console.log("parent  class calling......");
//     }
// }
// class Child extends Parent{
//     customerDetails1(){
//         console.log("child class is calling....");
//     }
// }
// var emp1 = new Child();
// emp1.customerDetails();
// emp1.customerDetails1();

// class Parent{
//     customerDetails(){
//         console.log("parent  class calling......");
//     }
// }
// class Child extends Parent{
//     customerDetails1(){
//         console.log("child class is calling....");
//     }
//     customerDetails(){
//         console.log("parent with over ride  class calling......");
//     }
// }
// var emp1 = new Child();
// emp1.customerDetails();
// emp1.customerDetails1();

class Parent{
    customerDetails(){
        console.log("parent  class calling......");
    }
}
class Child extends Parent{
    customerDetails(){
        console.log("child class is calling....");
    }
  
    customerotherDetails(){
       this.customerDetails();// super.customerDetails();  //super means parents class,this means child class
    }
}
var emp1 = new Child();
emp1.customerotherDetails();
// emp1.customerDetails1();

