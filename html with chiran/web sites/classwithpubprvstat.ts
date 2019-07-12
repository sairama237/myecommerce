class Person{
    public name:string="suresh kumar";  //any ver u will call
    static mobile:number=9642369940;  //with in class or its global class   
    private ssn:652683;     //in class

    /**
     * add
x:number,y:number     */
    public add(x:number,y:number) {
        return x+y;
    }
    static sub(x:number,y:number) {
        return x-y;
    }
    private mul(x:number,y:number) {
       return x*y; 
    }
}
var emp = new Person();
console.log("name:"+emp.name);
console.log("public method:" +emp.add(5,6));

console.log("mobile:"+Person.mobile);   //invoke throught class name for both propertites,method
console.log("static method:" +Person.sub(5,10));

var res = (emp.add(5,10));

console.log(res);
if (res<10){
    console.log("successfully exited");
}
else{
    console.log("unsuccessfully exited");
}


