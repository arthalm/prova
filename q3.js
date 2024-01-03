function verificarNumero() {
    return new Promise((resolve, reject) => {
        let numero = Number
        if (numero > 5){
            resolve("Número alto!")
        }
        else{
            reject("Número baixo!")
        }
    });
};
verificarNumero().then((numero)).catch();