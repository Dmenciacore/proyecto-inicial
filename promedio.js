
function calcularMedia(valores) {

    // let sumaMedia = 0;
    
    // for (let i = 0; i < valores.length; i++) {
    //     sumaMedia = sumaMedia + valores[i];
    // }

    const sumaMedia = valores.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const media = sumaMedia / valores.length;
    return media;
} 