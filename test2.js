function validateUsr(username) {
    const res =/[a-z0-9_]+/;      //{4,16}
    //const res =/\w[^A-Z ]{4,16}/
    if (2<username.length<17){

      console.log(res.test(username));//regex here/.test(username)
    return res.test(username);}
}
validateUsr('gsr')