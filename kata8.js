//ex1
function greet(name){
    return "Hello, " + name +  " how are you doing today?"
}

//--------------------------------------
// ex2
const isAlpha = function(ch){
    return typeof ch === "string" && ch.length === 1
        && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}
function sameCase(a, b){
    if (isAlpha(a) !== true ||  isAlpha(b)  !== true ){

        return -1;}
    else if ( a.toUpperCase() !== a && b.toUpperCase() !== b ) {
        //console.log('wow')
        return 1}
    if (a.toUpperCase() === a && b.toUpperCase() === b) {
        return 1}
    else  {return 0;}
}
//-----------------------------
//ex.3
function multiply(number){
    let x= Math.abs(number);
    x= x.toString().length;
    return number*(5**x);
}

// -----------------------
//ex.4 -2 cases
/*function validateUsr(username) {
    const regex = /^[a-z0-9_]+$/;
    return regex.test(username) && username.length > 3 && username.length < 17;
}*/
//validateUsr('usernam')

function validateUsr(username) {
    const res = /^[a-z0-9_]{4,16}$/
    console.log(res.test(username))
    return res.test(username);}

validateUsr('usernam')
//----------------------------------------------------------
function generateRange(start, stop, step) {
    let arr = [];
    for (let i = start; i <= stop; i += step) {
        arr.push(i);
    }
    return arr;
}

//-------------------------------------------
var templateStrings = function(noun, adjective) {
    return `${noun} are ${adjective}`
}
console.log(templateStrings('car','auto'));
//-----------------------------
function formatMoney(amount) {
    let x = Number (amount);
    return `${'$'+x.toFixed(2)}`
}
console.log(formatMoney(5.3))
//---------------------------------
function evenOrOdd(number) {
    return Number(number) % 2 === 0 ? `${'Even'}` : `${'Odd'}`;
}
evenOrOdd(5)
//--------------------------
function spEng(sentence){
    return sentence.toLowerCase().includes('english');
}
console.log(spEng('eereEnglishvf'))
/*function spEng(s){
   return /english/i.test(s)
}*/
//------------------------
swapValues=(args) =>args.reverse()