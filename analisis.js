// HELPERS

function esPar(number) {
    return (number % 2 === 0);
};

function calcularMedia(lista) {

    const sumaMedia = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const media = sumaMedia / lista.length;
    return media;

}

// CALCULAR MEDIA

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const calcularMedianaSalarios = calcularMedia([personaMitad1, personaMitad2]);
        return calcularMedianaSalarios;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// CALCULAR MEDIA

const salario = colombia.map(function (persona){
    return persona.salary;
});

const salarioSorted = salario.sort(function (salaryA,  salaryB){
    return salaryA - salaryB;
});

const medianaGeneralSalarios = medianaSalarios(salarioSorted);

// MEDIANA DEL TOP 10%

const salariosStart = (salarioSorted.length * 90) / 100;
const salariosCount = salarioSorted.length - salariosStart;

const salariosTop10Col = salarioSorted.splice(salariosStart, salariosCount);

const medianaTop10Col = medianaSalarios(salariosTop10Col);

console.log({
    medianaGeneralSalarios,
    medianaTop10Col,
});