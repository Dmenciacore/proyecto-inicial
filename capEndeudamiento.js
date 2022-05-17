
function calculateBorrowingCapacity() {
    
    const persona = document.getElementById("InputName");
    const ingresoTotal = document.getElementById("InputSalary");
    const gastosFijosMes = document.getElementById("InputFixedCosts");
    
    const cliente = [];
    
    cliente.push({
        persona: persona.value,
        ingresoTotal: ingresoTotal.value,
        gastosFijosMes: gastosFijosMes.value,
    });
    
    //    Capacidad de Endeudamiento.
    const capacidad = cliente.map(function (elemento) {
        return (elemento.ingresoTotal - elemento.gastosFijosMes) * 0.35;
    });
    //    Porcentaje de sueldo utilizado.
    
    const porcentajeSueldo = cliente.map(function (sueldo){
        return porcentaje = parseInt((sueldo.gastosFijosMes * 100) / sueldo.ingresoTotal);        
    });
    
    //    Porcentaje de sueldo utilizado.
    const porcentajeDeuda = 100 - porcentajeSueldo;

    // Resultados en el DOM
    const inputResultName = document.getElementById("ResultName");
    inputResultName.innerText = "Hola " + persona.value + "!! Este es el balance de tus finanzas.";
    const inputResultSalary = document.getElementById("ResultSalary");
    inputResultSalary.innerText = "Tus ingresos totales: $" + Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP'}).format(ingresoTotal.value) + " pesos.";
    const inputResultFixedCosts = document.getElementById("ResultFixedCosts");
    inputResultFixedCosts.innerText = "Tus gastos fijos mensuales suman: $" + Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP'}).format(gastosFijosMes.value) + " pesos.";
    const inputResultBorrowingCapacity = document.getElementById("ResultBorrowingCapacity");
    inputResultBorrowingCapacity.innerText = "Tu capacidad de endeudamiento es de: $" + Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP'}).format(capacidad) + " pesos.";
    
    const inputResultSalaryPercent = document.getElementById("ResultSalaryPercent");
    if (
        porcentajeSueldo > 0 && porcentajeSueldo <= 70 ?
        inputResultSalaryPercent.innerText = "Muy bien estás usando el: " + porcentajeSueldo + "% de tu sueldo.":
        inputResultSalaryPercent.innerText = "Cuidado!! Estás usando el: " + porcentajeSueldo + "% de tu sueldo. El promedio de uso recomendado es no superior a 70%."
    );
    
    const inputResultFixedCostPercent = document.getElementById("ResultFixedCostPercent");
    if (
        porcentajeDeuda > 0 && porcentajeDeuda <= 30 ?
        inputResultFixedCostPercent.innerText = "Muy bien estás usando el: " + porcentajeDeuda + "% de tu sueldo.":
        inputResultFixedCostPercent.innerText = "Cuidado!! Estás usando el: " + porcentajeDeuda + "% de tu sueldo. El promedio de uso recomendado es menor al 30%."
    );
    
}