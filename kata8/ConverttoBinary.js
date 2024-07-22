function toBinary(n){
    let arr = [];
    while(n > 0){
        arr.push(n % 2);
        n = Math.floor(n / 2);
    }
    arr = arr.reverse();
    n = arr.join('');
    return Number(n);
}

console.log(toBinary(1))