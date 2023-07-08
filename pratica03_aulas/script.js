function contar(){
    var nini = document.getElementById('nini') 
    var n1 = Number(nini.value)
    var nfim = document.getElementById('nfim')
    var n2 = Number(nfim.value)
    var npas = document.getElementById('npas')
    var passo = Number(npas.value)
    var res = document.getElementById('res')
    //var r = n1 + n2
    
    if(n1 == 0 || n2 == 0){
        res.innerHTML = 'Valor Incorreto'
    }else if(passo == 0){
        window.alert = 'Não da Pra fazer assim né Mona'
    }
    //while(n1 >= n2){
        
    }
}