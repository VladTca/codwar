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

// const remove = s => s.replace(/!$/, '');  ---------- $ -posledniq znak esli posle i pervii esli do
//ili
//   return s.endsWith('!') ? s.slice(0, -1) : s; -------------endswith true/false dlya konca stroki

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

//---------------------------------------------
function defineSuit(card) {
    let arr = Array.from(card);
    //let s=card.endsWith('♣');
    switch (arr[arr.length-1]) {
        case '♣' : return 'clubs';break;
        case '♦' : return 'diamonds';break;
        case '♥' : return 'hearts';break;
        case '♠' : return 'spades';break;
    }
}
console.log(defineSuit('3♣'))

/*function defineSuit(card) {
  switch (card.slice(-1)){
    case '♣': return 'clubs';
    case '♦': return 'diamonds';
    case '♥': return 'hearts';
    case '♠': return 'spades';
  }
}*/
/*function defineSuit(card) {
  return {
    '♣' : 'clubs',
    '♦' : 'diamonds',
    '♥' : 'hearts',
    '♠' : 'spades'
  }[card.substr(-1)]
}*/
/*function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}*/

//---------------------------
function  calculateAge(x,y) {
    if(x===y) return "You were born this very year!"
    else {
        if (x<y && (y-x)===1) return ("You are "+(y-x)+" year old.");
        else if (x<y) return ("You are "+(y-x)+" years old.");
        else if(x>y && (x-y)===1) return ("You will be born in "+(x-y)+" year.");
        else return ("You will be born in "+(x-y)+" years.");
    }
}
console.log(calculateAge(2015,2012))

/*function  calculateAge(m, n) {
	if(m == n) return 'You were born this very year!';
  var year = Math.abs(m-n) == 1 ? 'year' : 'years';
  if(m < n) return "You are "+(n-m)+' '+year+' old.';
  if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
}*/

//--------------------------------

function remove (string) {
    for(let i=0;i<string.length;i++){
        if (string.endsWith('!')===true) string=string.slice(0,-1);

    }
    return string
}

//  return s.replace(/!+$/, '');

const firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'};
const surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'};

function aliasGen(a,b){
    let x= a.slice(0,1).toUpperCase(); //.toUpperCase();
    let y=b.slice(0,1).toUpperCase(); //.toUpperCase();
    const result = firstName[x] +' '+ surname[y];
    const regex =/[A-Z]/
    console.log(regex.test(x));
    console.log(regex.test(y));
    //let z=x.match(/[A-Z]/)
    //console.log(z);
    //let arr=new Array[A-Z];
    //if (arr.find(x)===true && arr.find(y)===true) return result;
    if(regex.test(x)===true && regex.test(y)===true)
    {return result;
        console.log(result);}
    else return "Your name must start with a letter from A - Z."

}
console.log(aliasGen('Cbram','Bendera'))

//----------------------------------------------------
function doubleChar(str) {
    let arr = Array.from(str);
    let a="";
    for(let i=0;i<str.length;i++){
        a=a+arr[i]+arr[i];
    }
    return a;
}
console.log(doubleChar('abc'))

/*function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
}*/
// const doubleChar = (str) => str.split("").map(c => c + c).join("");


//---------------------------
    const arr = [1,2,3,4,5,6,7];

function take(arr, n) {
    let arr1= arr.slice(0,n);
    return arr1;}
console.log(take(arr,3))

//---------------------
function hello(name) {
    if (name == undefined || name == null || name == "") {
        return 'Hello, World!'
    } else {

        return 'Hello, ' + name.at ( 0 ).toUpperCase () + name.slice ( 1 ).toLowerCase () + '!'
    }
}

//let hello=(name)=> ( name == undefined || name == null || name == "") ? "Hello, World!" : "Hello, "
//     + name.split("").map((x,i)=> i == 0 ? x = x.toUpperCase() : x = x.toLowerCase() ).join("") + "!"

//--------------------------------

function eachCons(array, n) {
    let arr = [];
    let inArr;
    for(let i = 0; i < array.length; i++) {
        inArr = array.slice(i, n + i)
        if(inArr.length === n) {
            arr.push(inArr)
        }
    }
    return arr
}
console.log(eachCons([1,2,3,4,5,6]),2)
//-----------------------------
function compareNumbers(a, b) {
    return a - b;
}
function mergeArrays(arr1, arr2) {
    if (arr1 == [] && arr2 == []){
        return []
    }
    let arr=[].concat(arr1,arr2);
    let arrS= arr.sort(compareNumbers);
    let arrX=[]
    arrS.forEach((n)=> {
        if (!arrX.includes(n)) {
            arrX.push(n)
        }
    })
    return arrX;
}

//function mergeArrays(arr1, arr2) {
//   return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
// }

//function mergeArrays(a, b) {
//   return [...new Set(a.concat(b))].sort((a,b)=>a-b)
// }


function well(x){
    if(x.includes('good')===false) return "Fail";
    else {
        let count=0;
        for(let i=0;i<=x.length;i++){
            if (x[i]==='good') count++
        }
        if (count>2) return 'I smell a series!';
        else return 'Publish';
    }

}

/*const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' :
        good_count < 3 ? 'Publish!' : 'I smell a series!';
}*/

//----------------------------------------------------
function stringClean(s){
    return s.replace(/[0-9]/g, '');
}
//-------------------------