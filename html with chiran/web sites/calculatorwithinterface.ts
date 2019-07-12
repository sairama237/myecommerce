interface Standaed{
    fristnumber:number; //declartions for propertites
    secondnumber:number; //declartions for propertites
    add():number; //method declartions
    sub():number; //method declartions
    mul():number; //method declartions
    div():number; //method declartions
}
class saical implements Standaed{
    fristnumber:number=10;
    secondnumber:number=20;
    add(){
        return this.fristnumber+this.secondnumber;
    }
    sub(){
        return this.fristnumber-this.secondnumber;
    }
    mul(){
        return this.fristnumber*this.secondnumber;
    }
    div(){
        return this.fristnumber/this.secondnumber;
    }
}
var cal = new saical()
console.log(cal.add());
console.log(cal.sub());
console.log(cal.mul());
console.log(cal.div());