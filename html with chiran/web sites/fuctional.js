var Empl = /** @class */ (function () {
    function Empl() {
    }
    Empl.prototype.getsal = function () {
        function myFun(a, b, c) {
            console.log(a);
            console.log(b);
            console.log(c);
        }
        myFun(1, 2);
        myFun(1, 2, 'sai');
        // myFun(1,2,'sai',"sadi");
    };
    return Empl;
}());
var e = new Empl();
e.getsal();
console.log(e);
