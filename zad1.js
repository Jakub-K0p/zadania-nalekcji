// Zad1
let a = Number(prompt("Podaj pierwszą liczbę:"));
let b = Number(prompt("Podaj drugą liczbę:"));
let c = Number(prompt("Podaj trzecią liczbę:"));
 
let suma = a + b + c;
//alert("Suma = " + suma);
document.writeln(`<p>Suma ${a} + ${b} + ${c} = ${suma}</p>`);
 
// Zad2
let avg = suma /3;
document.writeln(`<p>Średnia: ${avg}</p>`);

// Zad3
a = parseFloat(prompt("Podaj pierwszą liczbę:"));
b = parseFloat(prompt("Podaj drugą liczbę:"));
 
suma = a + b;
let roznica = a - b;
let iloczyn = a * b;

document.writeln(`<p>suma: ${a} + ${b} = ${suma}</p>`);
document.writeln(`<p>roznica: ${a} - ${b} = ${roznica}</p>`);
document.writeln(`<p>iloczyn:  ${a} * ${b} = ${iloczyn}</p>`);