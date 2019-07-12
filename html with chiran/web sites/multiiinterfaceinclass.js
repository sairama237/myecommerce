var child = /** @class */ (function () {
    function child() {
        this.age = 10;
        this.instument = "drumms";
    }
    child.prototype.m1 = function () {
        return "m1 implementaion";
    };
    child.prototype.m2 = function () {
        return "m1 implementaion";
    };
    return child;
}());
var drums = new child();
console.log(drums.age);
console.log(drums.instument);
console.log(drums.m1());
console.log(drums.m2());
