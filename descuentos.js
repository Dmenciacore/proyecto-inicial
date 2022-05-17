const tipoCupon = [
    {
        name: "RapiPago",
        discount: 15,
    },
    {
        name: "PagoFacil",
        discount: 20,
    },
    {
        name: "LoCompro",
        discount: 25,
    },
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDescuento) / 100;

    return precioConDescuento;
}

function calcularPrecioConCupon(price, cupon) {
    const cuponDescuento = 100 - cupon;
    const precioConDescuentoCupon = (price * cuponDescuento) / 100;

    return precioConDescuentoCupon;
}

function calculatePriceWithCupon() {

    const inputPrice = document.getElementById("InputPrice");
    const inputCupon = document.getElementById("InputCupon");
    const price = inputPrice.value;
    const cupon = inputCupon.value;

    const cuponValido = function (coupon) {
      return coupon.name === cupon;  
    };

    const userCupon = tipoCupon.find(cuponValido);

    if (!userCupon) {

        const resultInvalidCupon = document.getElementById("ResulCuponDiscount");
        resultInvalidCupon.innerText = "El cupón ingresado no es válido.";

    } else {

        const discount = userCupon.discount;
        const discountCupon = calcularPrecioConCupon(price, discount);
        
        const resultCupon = document.getElementById("ResulCupon");
        const resultCuponDiscount = document.getElementById("ResulCuponDiscount");
        resultCuponDiscount.innerText = "El cupón tiene un descuento del " + discount + " %.";
        resultCupon.innerText = "El valor con el descuento aplicado es de: $" + discountCupon + " USD";
    }
}


function calculatePriceandDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const price = inputPrice.value;
    const discount = inputDiscount.value;

    const priceWithDiscount = calcularPrecioConDescuento(price, discount);

    const resultPrice = document.getElementById("ResultPrice");
    const resultDiscount = document.getElementById("ResultDiscount");
    const resultPriceWithDiscount = document.getElementById("ResultPriceWithDiscount");
    resultPrice.innerText = "El precio original es de: $" + price + " USD";
    resultDiscount.innerText = "El descuento es de: " + discount + "%";
    resultPriceWithDiscount.innerText = "El precio con descuento es de: $" + priceWithDiscount + " USD.";
}