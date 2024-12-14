function myTable() {
    var c = 1
    var tab = 2

    while (c <= 10) {
        var res = c * tab
        console.log(`${tab} x ${c} = ${res}`);
        c++
    }
}

myTable()