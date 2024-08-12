// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]

function towerBuilder(nFloors) {
    let res=[];
    let a=''
    let b=''
    let x=0;
    // console.log(nFloors)
    for (let i=0;i<nFloors;i++){
        // x=2*i+1;
        // console.log(x)
       a="*".repeat(2*i+1);
       b=nFloors-i-1;
       b=" ".repeat(b);
       res.push(b+a+b)

        // console.log(res)
        // res=[];
        a=''
        b=''


    }
    return res
}

console.log(towerBuilder(2))