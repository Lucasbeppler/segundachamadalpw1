// 1
console.log(`
------------------------
    Questão 1
-------------------------
`)
function converterParaArray(num1, num2, num3, num4, num5, num6, num7,m7, num8, num9, num10) {
    let array = [num1, num2, num3, num4, num5, num6, num7,m7, num8, num9, num10];
    let pares = 0;
    let somatorioPares = 0;
    let impares = 0;
    let somatorioImpares = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 2 === 0) 
        {
            pares++;     
            somatorioPares += element;   
        }
        else 
        {
            impares++;
            somatorioImpares += element;
        }
        
    }

    console.log(`O total de pares é ${pares} e impares é ${impares}`);
    console.log(`O somatorio de pares é ${somatorioPares} e impares é ${somatorioImpares}`);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
    console.log(`O primeiro numero do array é ${num1} e o final é ${num10}`);
}
converterParaArray(1,2,3,4,5,6,7,8,9,10);

// 2
console.log(`
------------------------
    Questão 2
-------------------------
`)
function converterPalavraParaArray(palavra1, palavra2, palavra3, palavra4, palavra5, palavra6, palavra7,m7, palavra8, palavra9, palavra10) {
    let array = [palavra1, palavra2, palavra3, palavra4, palavra5, palavra6, palavra7,m7, palavra8, palavra9, palavra10];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(`a palavra: ${element} tem ${element.length}`);
    }

    console.log('palavras com mais de 9 letras')
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.length > 9) {
            console.log(`a palavra: ${element} tem ${element.length}`);
        }
    }

    console.log('palavras com mais de 6 letras')
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.length > 6) {
            console.log(`a palavra: ${element} tem ${element.length}`);
        }
    }
}
converterPalavraParaArray('palavra', 'café', 'leite', 'palavra4', 'paralelepipedo', 'nobreak', 'cabide', 'sapato', 'palavrão', 'palavrasso', 'cabideiro');

//3
console.log(`
------------------------
    Questão 3
-------------------------
`)
const array_de_objeto = [
    {
        nome: 'carla',
        matricula: '1234',
        funcao: 'gerente',
        salario: 1000,
    },
    {
        nome: 'julia',
        matricula: '1235',
        funcao: 'gerente',
        salario: 1000,
    },
    {
        nome: 'jorge',
        matricula: '1236',
        funcao: 'CEO',
        salario: 74000,
    },
    {
        nome: 'carlos',
        matricula: '1237',
        funcao: 'gerente rh',
        salario: 4000,
    },
    {
        nome: 'daniela',
        matricula: '1238',
        funcao: 'auxiliar admnistrativo',
        salario: 7000,
    },
    {
        nome: 'elias',
        matricula: '1239',
        funcao: 'sapateiro',
        salario: 94000,
    }
];

let funcao_obj = {};

for (let index = 0; index < array_de_objeto.length; index++) {
    let func = array_de_objeto[index];
    let reajuste = func.salario * 0.10;
    console.log(`Seu nome é ${func.nome},sua funcão é ${func.funcao}, seu salario é ${func.salario}, seu reajuste é de ${reajuste}, e seu novo salario é ${func.salario + reajuste}`);
    func.salario = func.salario + reajuste;

    if (!funcao_obj[func.funcao]) {
        funcao_obj[func.funcao] = {};
        funcao_obj[func.funcao].soma_salario = 0;
        funcao_obj[func.funcao].soma_reajuste = 0;
    }

    funcao_obj[func.funcao].soma_salario += func.salario;
    funcao_obj[func.funcao].soma_reajuste += reajuste;
}

for (const funcao in funcao_obj) {
    const {soma_salario, soma_reajuste} = funcao_obj[funcao];
    console.log(`A função ${funcao} tem somatorio de salario ${soma_salario} e de reajuste ${soma_reajuste}`);
}


//4
console.log(`
------------------------
    Questão 4
-------------------------
`)
const objeto = {
    produto: 'sapato',
    unidade: '5',
    quantidade: '10',
    valor_compra: '10'
};
function calcularPreco({produto, unidade, quantidade, valor_compra}) {
    const preco_total = quantidade * valor_compra;
    const preco_imposto = valor_compra * 1.12;
    const lucro = preco_imposto - valor_compra;
    
    console.log(`O produto ${produto}, de quantidade ${quantidade}, valor da compra ${valor_compra}, preço com imposto ${preco_imposto}. O seu lucro é de ${lucro}`);
}
calcularPreco(objeto);

//5
console.log(`
------------------------
    Questão 5
-------------------------
`)
let array = [1,2,3,4,5,6,7,8];
array.reverse();
let soma_todos = 0;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    soma_todos += element;    
}
console.log(soma_todos);
console.log(array[0], array[array.length - 1])