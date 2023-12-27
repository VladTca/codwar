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
//-------------------------
function remove(s,n){
    let arr=Array.from(s);
    let arr2='';
    let count=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]!=='!'){arr2=arr2+arr[i]}
        else {
            if(count>=n){arr2=arr2+arr[i]}
            count+=1;
        }
    }
    return arr2;
}
console.log(remove('!Hi!!',1))
//--------------------
function remove (string) {
    //if(Array.from(string)[string.length-1]==='!') {s=(string.replace('!',''))+'!'}
    //}
    // return s;
    s=string.split('!').join('')+'!';
    return s;
}
// const remove = s => s.replace(/!/g, "")+"!";   /'...'+/g vse elements v kavichkah
//---------------------------------
function generateLink(user) {
    s=encodeURIComponent(user);                             // perevod v simvoly dlya stroki brauzera
    return 'http://www.codewars.com/users/'+s;
}
//---------------------------
function replace(s){
    s1=s.replace(/[aeiouAEIOU]/g,'!');
    return s1;
}
console.log(replace('HI! Hi!!!wsxedc'))
//--------------------
function remove (string) {
    if(Array.from(string)[string.length-1]!=='!') return string;
    else return string.slice(0,-1);
}
console.log(remove('HI! Hi!!!wsxedc!!!'))

// const remove = s => s.replace(/!$/, '');   $ -posledniq znak esli posle i pervii esli do
//ili
//   return s.endsWith('!') ? s.slice(0, -1) : s; endswith true/false dlya konca stroki

//-----------------------------------------------------------

function evil(n) {
    let arr=Array.from(toBinary(n));
    let count1=0;
    let count2=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==='1') count1++;
        else count2++;
    }
if (count1 % 2 === 0) return 'It\'s Evil!'           //console.log(toBinary(n) + ' It\'s Evil' );
    else return "It\'s Odious!"                      //console.log(toBinary(n) + " It\'s Odious!");
}
function toBase(value, base) {
    if (base != Math.round(base))
        throw "Base is not valid: " + base;
    // TODO: define digits above 9
    var result = "";
    while (value) {
        result = value % base + result;
        value = Math.floor(value / base);
    }
    return result;
}

function toBinary(value) {
    return toBase(value, 2);
}

console.log(evil(123))

//function evil(n) {
//     return n.toString(2).match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
// }
