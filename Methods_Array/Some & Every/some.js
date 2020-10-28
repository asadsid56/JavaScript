var ages = [18, 19, 21, 22, 23, 20];
document.write(ages + "<br><br>"); 
// Some method will check all values of arrays & untill one of them is not true 
// Every method will check all values of arrays & untill all values are not true 
var check = ages.every(checkAdult); 
document.write(check + "<br><br>"); 

function checkAdult(age) {
    return age >= 18
}

