
function calcularModa(lista) {
    
    const listaCount = {}

    lista.map(
        function (elemento){
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;            
            }
    });

    const listaCountArray = Object.entries(listaCount).sort(
        function (a, b){
            return a[1] - b[1];
        }

    );
        const moda = listaCountArray[listaCountArray.length - 1];

        return moda;
}