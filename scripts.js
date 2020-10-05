
let celsius = prompt('Enter the Celsius value') * 1;
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9 / 5 ) + 32 

 
kelvin = kelvin.toFixed(2);
alert(`${celsius} Celsius degree equals ${kelvin} Kelvin, and ${fahrenheit} Fahrenheit`);
