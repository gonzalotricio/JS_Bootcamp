function adivinar(num) {
    if (num % 2 == 0) {
        return "es par!";
    } else {
        return "no es par :(";
    }
}

console.log(adivinar(prompt("numero")));
