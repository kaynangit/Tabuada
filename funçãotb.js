function tabuada(){
    var num1 = window.document.getElementById('num1')
    var num2 = document.getElementById('num2')

    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('preencha os campos!')
    }else{
        var y = 0

    var n = Number(num1.value)
    var z = Number(num2.value)
    var r = ''
    var x = window.document.getElementById('resposta')

    x.innerHTML = `Á tabuada do ${n} é: <br>`
    do{
        r = n * y
        x.innerHTML += `${n} x ${y} = ${r} <br>` 
        y++
    }while(y <= z)
    }
}
