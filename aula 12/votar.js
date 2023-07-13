var vota = 67
if(vota < 16){
    console.log('voto não vota')
}else if(vota < 18 || vota >= 65){
    console.log('voto optativo')
}else{
    console.log('voto obrigatório')
}