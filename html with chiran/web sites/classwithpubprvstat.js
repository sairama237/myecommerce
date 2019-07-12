var Person = /** @class */ (function () {
    function Person() {
        this.name = "suresh kumar"; //any ver u will call
    }
    /**
     * add
x:number,y:number     */
    Person.prototype.add = function (x, y) {
        return x + y;
    };
    Person.sub = function (x, y) {
        return x - y;
    };
    Person.prototype.mul = function (x, y) {
        return x * y;
    };
    Person.mobile = 9642369940; //with in class or its global class   
    return Person;
}());
var emp = new Person();
console.log("name:" + emp.name);
console.log("public method:" + emp.add(5, 6));
console.log("mobile:" + Person.mobile); //invoke throught class name for both propertites,method
console.log("static method:" + Person.sub(5, 10));
var res = (emp.add(5, 10));
console.log(res);
if (res < 10) {
    console.log("successfully exited");
}
else {
    console.log("unsuccessfully exited");
}
