var Customer = /** @class */ (function () {
    function Customer() {
        this.fristname = "uday";
        this.lastname = "chiru";
    }
    Customer.prototype.getmessage = function () {
        return this.fristname + " " + this.lastname;
    };
    return Customer;
}());
var emp = new Customer();
console.log(emp.fristname);
console.log(emp.lastname);
console.log(emp.getmessage());
var Customer1 = /** @class */ (function () {
    function Customer1() {
        this.fristname = "sai";
        this.lastname = "kundurthi";
    }
    Customer1.prototype.getmessage = function () {
        return this.fristname + " " + this.lastname;
    };
    return Customer1;
}());
var emp1 = new Customer1();
console.log("emp1 object details");
console.log(emp1.fristname);
console.log(emp1.lastname);
console.log(emp1.getmessage());
