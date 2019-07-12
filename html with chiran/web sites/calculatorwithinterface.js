var saical = /** @class */ (function () {
    function saical() {
        this.fristnumber = 10;
        this.secondnumber = 20;
    }
    saical.prototype.add = function () {
        return this.fristnumber + this.secondnumber;
    };
    saical.prototype.sub = function () {
        return this.fristnumber - this.secondnumber;
    };
    saical.prototype.mul = function () {
        return this.fristnumber * this.secondnumber;
    };
    saical.prototype.div = function () {
        return this.fristnumber / this.secondnumber;
    };
    return saical;
}());
var cal = new saical();
console.log(cal.add());
console.log(cal.sub());
console.log(cal.mul());
console.log(cal.div());
