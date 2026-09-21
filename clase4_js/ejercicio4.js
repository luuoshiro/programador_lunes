let numeros = [47, 22, 189, 6];

let numeromayor = 0;

for (let i=0; i < numeros.length; i++) {
    if (numeros[i] > numeromayor) {
        numeromayor = numeros[i]
    }
    
}

console.log (`el número mayor es ${numeromayor}`)
