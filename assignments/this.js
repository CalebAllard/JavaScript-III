/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Obj Binding: The this keyword points to the window obj by defualt if it has nothing to ref to.
* 2.  Implicit binding: this keyword points to a varabile or obj through reff by declaring it through  "obj."
* 3.  New binding: this key word is giving a specific obj to reff to by using the "new" keyword when creating a obj instince of a constructor. 
* 4.  Explicit binding: this key word is told what to reff with using a method like .call or apply
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const thisObj = {
    name: 'Caleb',
    say: function (){
        console.log(`${this.name} says Hello!`)
    }  
} 
thisObj.say();


// Principle 3
// code example for New Binding
function Person(name , message){
    this.name = name;
    this.speak = function(){
        console.log(`${this.name} says ${message}`)
    }
}
const Caleb = new Person('Caleb',"Hello!");
Caleb.speak();


// Principle 4
// code example for Explicit Binding
function sayHi(){
    console.log(`${this.name} says Hello!`);
}

const isMe = {
    name: "Caleb"
}
sayHi.call(isMe);