
function multiply(number){
 let x= Math.abs(number);
 x= x.toString().length;

    console.log(number*(5**x));
 return number*(5**x);

}

multiply(-2);
//
/* multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹ */