//DATA TYPES

// 1. Number
var x = 23;
console.log(typeof x);

// 2. String
var str = "hitvika";
console.log(typeof str);

// 3. Boolean
var x = 9;
var y = 6;
console.log(x===y);

// 4. BigInt
var bigInt = 9007199254740991n;
console.log(typeof bigInt);

// 5. Undefined
var abc;
console.log(abc);

// 6. null
var ex = null;
console.log(typeof ex);

// 7. Object
var obj = {
    name: 'hitvika',
    age: 21
}
console.log(obj)
console.log(typeof obj);

// 8. JSON
var json = JSON.stringify(obj);
console.log(json);
console.log(typeof json); //string

// 9. symbol (ES6 onwards)
var sym1 = Symbol('10');
var sym2 = Symbol('10');
console.log(typeof x);
console.log(sym1 === sym2); // false
var objSym = Symbol();
obj[objSym] = "10";
var objSymbol = {
    name: "Aman",
    age: "21",
} 
console.log(objSymbol); // symbol will be ignored
for(key in objSymbol){
    console.log(key); // symbol will be ignored
}
console.log(JSON.stringify(objSymbol)); //symbol will be ignored

const globalSymbol = Symbol.for('global');
const localSymbol = Symbol('local');

console.log(Symbol.keyFor(globalSymbol)); // output: global
console.log(Symbol.keyFor(localSymbol)); // output: undefined



// STRING CONCATS

// 1. concat two string
var str1 = 'hitvika';
var str2 = 'verma';
var concatString = str1.concat(str2);
console.log(concatString);

// 2. concat more than two strings
var strOne = 'Have';
var strTwo = 'a';
var strThree = 'nice';
var strFour = 'day';
var str =  strOne.concat(strTwo, strThree, strFour);
console.log(str);
var str2 = strOne.concat(' ', strTwo, ' ', strThree, ' ', strFour);
console.log(str2);

// array conat
var arr1 = ['hitvika'];
var arr2 = ['verma'];
var arr3 = ['have', 'a', 'nice', 'day'];
var arr = arr1.concat(arr2, arr3);
console.log(arr);


// VAR, LET AND CONST

// 1. var
var a = 10;
var a = 15;
function callingX() {
    console.log(a);
}
callingX();

// 2. let
function letExample() {
    let b = 10;
    // let y = 25 : Error
    b = 25;
}
// console.log(b); // error

// 3. const
// const c = 10;
// const c = 12;
//c = 25; 
// console.log(c); // error

// ARRAYS AND OBJECTS

// 1. Arrays
// a) array creation
var arr = ['one', 'two', 3];
var arrNew = new Array("one", "two", 3); // avoid
// b) looping array
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
arr.forEach(element => {
    console.log(element);
});
// c) some basic methods
var fruits = ['mango', 'banana', 'orange'];
var num = [1, 2, 6, 7, 2];

console.log(fruits.toString());
console.log(fruits.join("-")); // same as toString() but u can specify the sepration
console.log(fruits.shift()); // removes 1st element and than shift other elements to lower index
console.log(fruits.length); // tells the length of array
console.log(fruits.splice(2, 0, 'kiwi')); //1st parameter is for where the new element should add 2nd is for how many should be removed and from 3rd will be the new elements
console.log(fruits.slice(1));
console.log(fuits.sort()); //only sort string values
console.log(fruits.reverse());
console.log(num.sort(function(a,b){return b - a})); // for sorting numbers (compare function)
console.log(Math.max(num)); // for max value
console.log(num.sort(Math.min(num)));

// 2. Objects
var obj = {
    name: 'hitvika',
    age: 21,
    showData: function() {
        console.log(this.name);
    }
}
var objNew = new Object();
objNew.name = 'hitvika';
objNew.age = 21;

console.log(obj.age); // accessing properties
obj.showData();

// LOGICAL OPRATORS
var p = 7;
var op1 = 'hitvika';
var op2 = 'hitvika';
var q = 9;
console.log(p == q);
console.log(op1 === op2);
console.log(p != q);
console.log(p > q);
console.log(p < q);
console.log(p >= q);
console.log(p <= q);





