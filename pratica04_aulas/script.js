function tabuada() {
    var num = document.getElementById('txnum')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0 ){
        window.alert('Tá errado MOna, cadê a número!')
    }else
        var n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
}