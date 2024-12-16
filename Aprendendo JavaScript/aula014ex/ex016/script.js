function contar() {
    var n1 = document.getElementById('txtn1').value

    var n2 = document.getElementById('txtn2').value

    var res = document.getElementById('res')

    while (n1 <= n2) {
        res.innerText = `${res}`
        n1++
    }


}