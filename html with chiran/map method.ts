let mymap = new Map();
mymap.set('1','st1');
mymap.set(1,'num');
mymap.set(true,'bool');
console.log(mymap.get('1'));
console.log(mymap.get(1));
console.log(mymap.get(true));
/////////////////////////////////map chaining
let mymap = new Map();
mymap.set(1,"sai").set(2,"chiru").set(3,"uday").set(true,"boolean").set("sai","string");
console.log(mymap.size);

console.log(mymap.get(1));
console.log(mymap.get(2));
console.log(mymap.get(3));
console.log(mymap.get(true));
console.log(mymap.get("sai"));


/////////////////////////////////iteartions

let mymap = new Map([['cucmber',500],['tomatos',400],['onion',800],['potats',100]]);
for (let vegtables of mymap.keys()){
    console.log(vegtables)
}

for (let amout of mymap.values()){
    console.log(amout)
}

for (let amout of mymap.entries()){
    console.log(amout)
}
