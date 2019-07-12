class Sbibank{
    accType:string
    accHolder:string;
    accAmount : number = 10000
    accNumber:any;
    constructor(_accHolder:string,_accNumber:any){
      this.accHolder =_accHolder;
      this.accNumber =_accNumber;
    }
    
     depositMethod(){
      //this.accType = "Saving"    //console.log(this.accType);
       //return this.accType;
       let getInputAmount = Number((<HTMLInputElement>document.getElementById("deposit")).value)
     this.accAmount = this.accAmount + getInputAmount;
     if(this.accAmount>50000){
      let interest = this.accAmount*5/100
       this.accAmount = this.accAmount + interest
       document.getElementById('amount').innerHTML = "myInterestAmount  : "+interest
        document.getElementById('myamount').innerHTML =  `mycurrentAmount : ${this.accAmount}</br>ACCNUMBER: ${this.accNumber}</br> ACCHOLDER:${this.accHolder}`
       
       }
      
      else{
        document.getElementById('amount').innerHTML = "my Amount : "+this.accAmount;
      }
      }
      withdrawlMethod(){
        let getdebitAmount = Number((<HTMLInputElement>document.getElementById("withdraw")).value)
        this.accAmount= this.accAmount - getdebitAmount;
        document.getElementById('myamount').innerHTML = "mycurrentAmount  : "+this.accAmount
        document.getElementById('withdrawl').innerHTML = "myWithdrawlAmount : "+getdebitAmount
      
       }
     
     }

let c = new Sbibank('k.sai','sbi65487125812344');
//console.log(c.depositMethod());
