//..........................1...............................
var count = (function () {
    var counter = 0;
    return {
        'add': function () {
            counter += 1;
        },
        'reset': function () {
            counter = 0;
        },
        'value': function () {
            return counter;
        },
    }
})();
/*
//..................................2........................
The free varaible is the counter
 A free variable is local variable that can be accessible by sub-methods.*/


//.........................3..................................
 const make_adder = (inc) => {
    let counter = 0; 
    return (
         function add(){
            return counter += inc;
        });
 };

 const add5 = make_adder(5);
 add5();
 add5();
 console.log(add5());
 const add7 = make_adder(7);
 add7();
 add7();
 console.log(add7());


//.........................4..................................
(function () {
   // All the given code
})();
 //5
 const employee = (() => {
    let name = '', age = 0, salary = 0;
    return {
        getName(){
            return name;
        },
        getAge(){
            return age;
        },
        getSalary(){
            return salary;
        },
        setName(n){
            name = n;
        },
        setAge(a){
            age = a;
        },
        setSalary(s){
            salary = s;
        },
        increaseSalary(percentage){
            salary += (this.getSalary() / 100) * percentage;
        },
        incrementAge(){
            age = this.getAge() + 1;
        }
    }
 })();
 //......................6......................................
 var Employee = (function () {
    var name;
    var age;
    var salary;

    var getName = () => {return name};
    var getAge = () => {return age};
    var getSalary = () => {return salary};

    var setName = (newName) => {name = newName;},
    var setAge = (newAge) => {age = newAge;},
    var setSalary = (newSalary) => {salary = newSalary;},
    var increaseSalary = (percentage) => {salary = salary * (1 + percentage / 100);},
    var incrementAge = () => {age ++ ;},

    return {
        'address':null,
        'getAddress': () => {return address;},
        'setAddress': (newAddress) => {address = newAddress;},

        'setName' : setName,
        'setAge' : setAge,
        'setSalary' : setSalary,
        'increaseSalary' : increaseSalary,
        'incrementAge' : incrementAge,
    }
})();






