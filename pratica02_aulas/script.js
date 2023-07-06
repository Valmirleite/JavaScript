function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 3){
                //Baby
                img.setAttribute('src', 'bbboy.png')
            }else if (idade <  10){
                // criança
                img.setAttribute('src', 'boy.png')
            }else if (idade < 18){
                //Joven
                img.setAttribute('src', 'jovenboy.png')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'man.png')
            }else {
                //Maricona
                img.setAttribute('src', 'oldman.png')
            }

        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 3){
                //Baby
                img.setAttribute('src', 'bbgirl.png')
            }else if (idade <  10){
                // criança
                img.setAttribute('src', 'girl.png')
            }else if (idade < 18){
                //Joven
                img.setAttribute('src', 'jovengirl.png')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'woman.png')
            }else {
                //Maricona
                img.setAttribute('src', 'oldgirl.png')
            }
        }
        res.style.textAlign = 'center'        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        }
    } 