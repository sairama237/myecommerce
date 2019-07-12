var Emplo = /** @class */ (function () {
    function Emplo() {
    }
    Emplo.prototype.getsal = function () {
        var sal = 30000;
        if (true) {
            var sal_1 = 40000;
            console.log(sal_1);
        }
        console.log(sal);
    };
    return Emplo;
}());
var e = new Emplo();
e.getsal();
console.log(e);
function add(x, y, c) {
    return x + y + c;
}
var add1 = function affnfa(a, b) {
    return a + b;
};
var res = add(1, 5, 8);
var red = add1(2, 5);
console.log(res + " and " + red);
