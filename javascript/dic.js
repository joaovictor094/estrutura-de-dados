//objeto mao e uma coleçao de chaves e valores.
//atraves de um objeto 

///declarar o objeto

let dic1 = new Map()

//a adcionar os valores desse objeto 

dic1.set('chaves1','valor1');
dic1.set('chaves2','valor2');
dic1.set('chaves3','valor3');

//acessar os valores com o metodo  get 

console.log('valor da chave',dic1.get('chaves1'));

// obter tamanho objeto MAP 

console.log('tamanho do MAP',dic1.size)

//iterar os objeto MAP com forEach 

dic1.forEach(function(valor,chave){
    alert(chave+":")
});

//remover um valor do objeto map

dic1.delete('chave1')

//verificar o tamanho do objeto MAP

console.log('novo tamanho:',dic1.size);