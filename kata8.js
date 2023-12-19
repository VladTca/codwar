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