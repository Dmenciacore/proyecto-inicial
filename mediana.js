function calcularMedia(valores) {

    const sumaMedia = valores.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const media = sumaMedia / valores.length;
    return media;

}

function calcularMediana(lista) {
    

    lista.sort(function(a, b){
        return a - b;
    });

    const mitadLista = parseInt(lista.length / 2);

    function esPar(numero) {

        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }

    }

    let mediana; 

    if (esPar(lista.length)) {

        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElementos = calcularMedia([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElementos;
    } else {

        mediana = lista[mitadLista];

    }
    return mediana;
}