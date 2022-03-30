function filteraPares(arr){
    return arr.filter(filtro);
}

function filtro(item) {
    return item % 2 === 0;
}

const array = [1, 3, 35, 40, 125, 122, 136];

console.log(filteraPares(array));