//console.log('esto funciona?')
//let salvar = prompt('pone algo a ver si lo puedo guardar');

//console.log(salvar);
let quiero = true;
function mercadito(){
do {
    alert('Bienvenido a la tienda de Gardie')
    let confirn = confirm('hola, queres comprar una fruta?')
    if (confirn == true) {
        alert('Catalogo: Naranja, Manzana, Banana y Mango ')
        let ih = prompt('Cual queres?')
        switch (ih) {
            case "naranja":
                alert('ok, serian $500')
                let cuanto = prompt('con cuanto va a pagar?')
                if(cuanto >= 500 ){
                    let vuelto = cuanto - 500;
                    alert(`Su vuelto es de $${vuelto}. Gracias por comprar en Gardie :)`)
                    quiero = false
                }else{ alert('No alcanza, veni cuanto tengas plata.')};
                break;
            case "manzana":
                alert('ok, serian $600')
                  let cuanto1 = prompt('con cuanto va a pagar?')
                if(cuanto1 >= 600 ){
                    let vuelto1 = cuanto1 - 600;
                    alert(`Su vuelto es de $${vuelto1}. Gracias por comprar en Gardie :)`)
                    quiero = false
                }else{ alert('No alcanza, veni cuanto tengas plata.')};
                break;
            case "banana":
                alert('ok, serian $800')
                let cuanto2 = prompt('con cuanto va a pagar?')
                if(cuanto2 >= 800 ){
                    let vuelto = cuanto2 - 800;
                    alert(`Su vuelto es de $${vuelto}. Gracias por comprar en Gardie :)`)
                    quiero = false
                }else{ alert('No alcanza, veni cuanto tengas plata.')};
                break;
            case "mango":
                alert('ok, serian $200')
                let cuanto3 = prompt('con cuanto va a pagar?')
                if(cuanto3 >= 200 ){
                    let vuelto = cuanto3 - 200;
                    alert(`Su vuelto es de $${vuelto}. Gracias por comprar en Gardie :)`)
                    quiero = false
                }else{ alert('No alcanza, veni cuanto tengas plata.')};
                break;
            default:
                alert("no tenemos eso, volve hacer todo de nuevo");
        }

        console.log('puso que si')
    } else {
        alert('no?, y que haces aca. Compra dale')
    }
} while (quiero);
}

mercadito();

