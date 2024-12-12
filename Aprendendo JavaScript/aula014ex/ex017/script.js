function tabuada() {
    var tab = 1
    var c = 0

    while(c <= 10) {
        var result = tab * c
        console.log(`${tab} x ${c} = ${result}`)
        c++
    }
}

tabuada()