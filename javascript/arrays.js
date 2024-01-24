//arrays sao estruturas de dados indenticas ao putython

let numeros = [19,2,39,42,53]

// trazer o indice de memorias do array

alert(numeros[3])

//manipulaçao de arrays

// adicionar um elemento no final

numeros.push(6)


//remover o ultimo elemento array

numeros.pop()

// imprimir os resultados

console.log("valores arrays",numeros)

// interar o array com o forEach 

numeros.forEach(function(i){
    document.write(i+'<br>');
});