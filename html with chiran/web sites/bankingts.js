var Sbibank = /** @class */ (function () {
    function Sbibank(_accHolder, _accNumber) {
        this.accAmount = 10000;
        this.accHolder = _accHolder;
        this.accNumber = _accNumber;
    }
    Sbibank.prototype.depositMethod = function () {
        //this.accType = "Saving"    //console.log(this.accType);
        //return this.accType;
        var getInputAmount = Number(document.getElementById("deposit").value);
        this.accAmount = this.accAmount + getInputAmount;
        if (this.accAmount > 50000) {
            var interest = this.accAmount * 5 / 100;
            this.accAmount = this.accAmount + interest;
            document.getElementById('amount').innerHTML = "myInterestAmount  : " + interest;
            document.getElementById('myamount').innerHTML = "mycurrentAmount : " + this.accAmount + "</br>ACCNUMBER: " + this.accNumber + "</br> ACCHOLDER:" + this.accHolder;
        }
        else {
            document.getElementById('amount').innerHTML = "my Amount : " + this.accAmount;
        }
    };
    Sbibank.prototype.withdrawlMethod = function () {
        var getdebitAmount = Number(document.getElementById("withdraw").value);
        this.accAmount = this.accAmount - getdebitAmount;
        document.getElementById('myamount').innerHTML = "mycurrentAmount  : " + this.accAmount;
        document.getElementById('withdrawl').innerHTML = "myWithdrawlAmount : " + getdebitAmount;
    };
    return Sbibank;
}());
var c = new Sbibank('k.sai', 'sbi65487125812344');
//console.log(c.depositMethod());
