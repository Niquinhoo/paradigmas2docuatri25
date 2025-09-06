//crear interfaz para interactuar con user
const readline = require("readline"); //Importa el módulo readline que viene incorporado en Node.js.
// sirve para manejar entradas y salidas de texto en la terminal

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//interfaz de lectura/escritura llamada rl.
// input: process.stdin significa que la entrada de datos va a venir del teclado (stdin = standard input).
// output: process.stdout significa que la salida de datos (las preguntas o mensajes) se van a mostrar en la consola (stdout = standard output).

//pregunta
function pregunta (){
    rl.question('Ingresa un número: ', (num1) => {
        rl.question('Ingresa otro número: ', (num2) => {
            rl.question('Ingresa la operación (+, -, *, /): ', (operacion) => {
                function calculadora (num1, num2, operacion) {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);    
                    switch (operacion) {
                        case '+':
                            return num1 + num2;
                        case '-':
                            return num1 - num2; 
                        case '*':
                            return num1 * num2;
                        case '/':
                            if (num2 === 0) {
                            return 'Error: División por cero no es una operacion valida';                              
                            }
                            return num1 / num2;
                        default:
                            return 'Operación no válida';
                    }
                }
                let resultado = calculadora(num1, num2, operacion);
                console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
                rl.close();
            });
        });
    }
    );
}
pregunta();