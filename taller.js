// ==========================================
// PARTE 1: Consumo con Promesas Tradicionales (.then y .catch)
// ==========================================

// Ejercicio 1: Simulador de Retiro de Cajero Automático (ATM)
function retirarDinero(monto) {
    return new Promise((resolve, reject) => {
        const saldoDisponible = 500;
        
        setTimeout(() => {
            if (monto <= saldoDisponible) {
                const saldoRestante = saldoDisponible - monto;
                resolve(`Retiro exitoso de $${monto}. Saldo restante: $${saldoRestante}`);
            } else {
                reject(`Fondos insuficientes. Límite de retiro: $${saldoDisponible}`);
            }
        }, 1500); // Retraso de 1.5 segundos
    });
}

// Consumo Ejercicio 1 (Caso Exitoso)
console.log("Procesando retiro de $200...");
retirarDinero(200)
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));

// Consumo Ejercicio 1 (Caso Fallido)
setTimeout(() => {
    console.log("Procesando retiro de $600...");
    retirarDinero(600)
        .then(resultado => console.log(resultado))
        .catch(error => console.error(error));
}, 2000);


// Ejercicio 2: Verificación de Edad para Suscripción
function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma");
            } else {
                reject("Acceso denegado. Registro permitido solo para mayores de edad");
            }
        }, 1000); // Retraso de 1 segundo
    });
}

// Consumo Ejercicio 2
setTimeout(() => {
    console.log("Verificando edad (20 años)...");
    verificarEdad(20)
        .then(res => console.log(res))
        .catch(err => console.error(err));
}, 4000);


// ==========================================
// PARTE 2: Consumo Moderno con async / await y try-catch
// ==========================================

// Ejercicio 3: Consulta de Clima Local
function consultarClima(ciudad) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulamos un clima fijo o basado en la ciudad
            resolve({
                ciudad: ciudad,
                temperatura: "24°C",
                condicion: "Soleado"
            });
        }, 1500);
    });
}

// Consumo usando async / await y try-catch
async function mostrarClima(ciudad) {
    try {
        console.log(`Consultando el clima para ${ciudad}...`);
        const clima = await consultarClima(ciudad);
        console.log(`--- Clima en ${clima.ciudad} ---`);
        console.log(`Temperatura: ${clima.temperatura}`);
        console.log(`Condición: ${clima.condicion}`);
    } catch (error) {
        console.error("Error al consultar el clima:", error);
    }
}

// Ejecutar Ejercicio 3 después de que terminen los anteriores
setTimeout(() => {
    mostrarClima("Quito");
}, 5500);