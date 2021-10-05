var int = 100;
var float =220.3445;
var hex = 0xfff;
var exponential = 2.678e7;
var octal =030;
 console.log(int,typeof int);
 console.log(float,typeof float);
 console.log(hex,typeof hex);
 console.log(exponential,typeof exponential);
 console.log(octal,typeof octal);


 console.log(typeof Infinity);
 console.log(typeof -Infinity);
 console.log(typeof NaN);

 console.log(10/0);
 console.log(-10/0);
 console.log(10/-0);

var x =NaN;
console.log(typeof x);
console.log(x);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);

var num =100;
console.log(num.toExponential(2));
console.log(num.toFixed(1));
console.log(num.toLocaleString());
console.log(num.toPrecision(3));
console.log(num.toString());
console.log(num.valueOf());
