function contar() {
   var n1 = document.getElementById('txtn1').value

    var n2 = document.getElementById('txtn2').value

    var p = document.getElementById('passo').value

    var res = document.getElementById('res')

    res.innerHTML = `${n1}, ${n2} e ${p}`
}