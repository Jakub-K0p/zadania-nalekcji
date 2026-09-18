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

//zad4
let liczba = parseFloat(prompt("Podaj liczbę:"));
 
let pierwiastek = Math.sqrt(liczba);
document.writeln(`<p>Pierwiastek z ${liczba} wynosi: ${pierwiastek}</p>`);

//zad5
let bok = parseFloat(prompt("Podaj długość boku kwadratu:"));
 
let pole = bok * bok;
document.writeln(`<p>Pole kwadratu wynosi: ${pole}</p>`);

//zad6
let prodlopadloscian = a * b + a * c + b * c;
document.writeln(`<p>Pole prostopadłościanu: ${prodlopadloscian}</p>`);

// zad7
let circle1 = Math.PI * Math.pow(a, 2);
let circle2 = 2 * Math.PI * a;

document.writeln(`<p>Pole koła: ${circle1}</p>`);
document.writeln(`<p>Obwód koła: ${circle2}</p>`);

//zad8
const CENA_BENZYNY = 7.83; // za litr
let km = 360;
let l_per_km = 8.0 / 100.0;
let price = l_per_km * km *CENA_BENZYNY;

document.writeln(`<p>koszt przejazdu z gdańska do szczecina: ${price}</p>`);

//zad9
let trasa = parseFloat(prompt("Podaj trasę:"));
let spalanie = parseFloat(prompt("Podaj spalanie samochodu na km:"));

let price2 = CENA_BENZYNY * spalanie  * trasa;

document.writeln(`<p>koszt przejazdu ${trasa} km z spalaniem ${spalanie}: ${price2}</p>`);

//zad10
let lokata = parseFloat(prompt("Podaj kwotę do lokaty:"));
let money1 = lokata * 0.08;
let money2 = money1 * 0.81;

document.writeln(`<p>zysk z lokaty oprocentowanie 8% z podatkiem Belki z ${lokata} pln: ${money2} pln </p>`);