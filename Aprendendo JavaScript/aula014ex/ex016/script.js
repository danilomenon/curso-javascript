function contar() {
    var i = Number(window.document.getElementById('inicio').value);  // Pega o valor de "inicio" e converte para número
    var f = Number(window.document.getElementById('fim').value);     // Pega o valor de "fim" e converte para número
    var p = Number(window.document.getElementById('passo').value);   // Pega o valor de "passo" e converte para número
    var res = window.document.getElementById('res');                  // Pega o elemento onde vai mostrar o resultado

    if (p <= 0) {
        alert('Passo inválido! Considerando PASSO = 1');
        p = 1;  // Se o passo for 0 ou negativo, assume o valor 1
    }

    res.innerHTML = "Contando: ";  // Limpa o conteúdo anterior

    // Se i for menor que f, contamos de i até f com passo positivo
    if (i < f) {
        for (var cont = i; cont <= f; cont += p) {
            res.innerHTML += `${cont} \u{1F449}`;  // \u{1F449} é o emoji de "seta para a direita"
        }
    } 
    // Se i for maior que f, contamos de i até f com passo negativo
    else {
        for (var cont = i; cont >= f; cont -= p) {
            res.innerHTML += `${cont} \u{1F449}`;
        }
    }

    res.innerHTML += " \u{1F3C1}";  // Adiciona o emoji de bandeira de chegada no final
}
