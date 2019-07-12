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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.customerDetails = function () {
        console.log("parent  class calling......");
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.customerDetails = function () {
        console.log("child class is calling....");
    };
    Child.prototype.customerotherDetails = function () {
        this.customerDetails();
    };
    return Child;
}(Parent));
var emp1 = new Child();
emp1.customerotherDetails();
// emp1.customerDetails1();
