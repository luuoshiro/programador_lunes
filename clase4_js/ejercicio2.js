const distancia = 260

if (distancia > 0 && distancia < 1000) {
    console.log(`ir a pie`);
} else if (distancia >= 1000 && distancia < 10000) {
    console.log(`ir en bicicleta`);
} else if (distancia >= 10000 && distancia < 30000) {
    console.log(`ir en colectivo`)
} else if (distancia >= 30000 && distancia < 100000) {
    console.log(`ir en auto`);
} else if (distancia >= 100000) {
    console.log(`ir en avión`);
}