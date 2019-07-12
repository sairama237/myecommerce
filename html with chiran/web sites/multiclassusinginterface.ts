interface Iperson{
    fristname:string;
    lastname:string;
    getmessage():string;
}
class Customer implements Iperson{
fristname:string ="uday";
lastname:string ="chiru";
getmessage():string{
    return this.fristname+" "+this.lastname;
}

}
var emp = new Customer();
console.log(emp.fristname);
console.log(emp.lastname);
console.log(emp.getmessage());

class Customer1 implements Iperson{
    fristname:string ="sai";
    lastname:string ="kundurthi";
    getmessage():string{
        return this.fristname+" "+this.lastname;
    }
    
    }
    var emp1 = new Customer1();
    console.log("emp1 object details")
    console.log(emp1.fristname);
    console.log(emp1.lastname);
    console.log(emp1.getmessage());