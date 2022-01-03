// PRECIO Y DESCUENTO

function calcularPrecioConDto(precio, descuento) {
    
    const porcentajePrecioConDto = 100 - (descuento);
    const precioConDto = (precio * porcentajePrecioConDto) / 100;

    return precioConDto.toFixed(2);
}

// CALCULAR PRECIO FINAL

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDto = calcularPrecioConDto(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "MONTO: $" + precioConDto;
}