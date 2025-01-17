function comprar() {
    // Qual produto você está comprando?
    let produto = prompt('Qual produto você está comprando?')

    // Quanto custa [produto] que você está comprando?

    let custoP = Number(prompt(`Quanto custa ${produto} que você está comprando?`))

    // Qual foi o valor que você deu para pagar [produto]?

    let valorC = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}`))

    let subTotal = Number(valorC - custoP)

    // Você comprou [produto] que custou R$ [valor x]. Deu R$ [valor x] em dinheiro e vai receber R$ [valor x] de troco. Volte sempre!!!

    let total = alert(`Você comprou ${produto} que custou R$ ${custoP}. Deu R$ ${valorC} em dinheiro e vai receber R$ ${subTotal} de troco. Volte sempre!!!`)
}