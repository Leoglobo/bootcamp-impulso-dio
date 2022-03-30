const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const precos = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'ceral',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo (saldoDisponivel, precos) {
    return precos.reduce(function (prev, current, index) {
        console.log("rodada", index+1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

function somaNumeros(arr){
    return arr.reduce(function(prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    });
}

console.log(calculaSaldo(saldoDisponivel, precos));
