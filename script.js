function idade (){
    //var nome = window.prompt('DIGITE SEU NOME: ')
    var idade = window.document.getElementById('numero') 
    var res = window.document.getElementById('resultado')
    
    if ( idade.value >= 0 && idade.value < 15){
        res.innerHTML = (`<p> você é uma criança </p>`)
    }else if (idade.value >= 15 && idade.value < 30){
        res.innerHTML = (`<p> você é um jovem </p>`)
    }else if (idade.value >= 30 && idade.value < 60){
        res.innerHTML = (`<p>você é um adulto </p>`)
    } else if (idade.value >= 60){
        res.innerHTML = (`<p>você é um idoso </p>`)
    }else{
        res.innerHTML = (`<p> digite apenas números de 0 a 100! </p>`)
    }
}