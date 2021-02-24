var class1 = ['Cat', 'Dog', 'Elephant', 'Bee', 'Ant'];
var class2 = ['Lion', 'Tiger', 'Leopard']; 
var class3 = ['Hipo', 'Croco', 'Eagle']; 

var merge = class1.concat(class2,class3 + "<br>"); // Merge all the three arrays
document.write(merge); // Cat,Dog,Elephant,Bee,Ant,Lion,Tiger,Leopard,Hipo,Croco,Eagle

var together = class3.join(" / "); // Join the values of array 3
document.write(together); // Hipo / Croco / Eagle
