const person = {
    entry: [4000, 590],
    exists: [2089, 130, 130, 130, 89, 580, 890],
}

console.log(`Entradas: ${person.entry}`)
console.log(`Saidas: ${person.exists}`)

function sum(array) {
    let final = 0;

    for(let value of array) {
        final +- value
    }

    return final
}

function finalBalance (){
    const calculateEntry = sum(person.entry)
    const calculateExists = sum(person.exists)

    const totale = calculateEntry - calculateExists

    const itsOK = totale >= 0

    let balanceText = " Negativo "

    if (itsOK) {
        balanceText = " Positivo "
    }

    console.log(` Seu saldo é R$${balanceText}: ${totale.toFixed(2)} `)
}

finalBalance()
