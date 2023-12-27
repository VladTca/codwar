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