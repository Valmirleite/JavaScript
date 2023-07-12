function contar(){
    var inicio = document.getElementById('nini') 
    var fim = document.getElementById('nfim')
    var passo = document.getElementById('npas')
    let res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados')
    }else{
        res.innerHTML = 'contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! considerandi PASSO 1!')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML +=  ` ${c} \u{1F449}`
        }
        }else{
            //contagem regressiva
            for(let c = i;c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }        
        }
               res.innerHTML += `\u{1f3c1}`    
    }
    
}