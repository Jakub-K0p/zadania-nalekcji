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
