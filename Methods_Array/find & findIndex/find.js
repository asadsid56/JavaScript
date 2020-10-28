var ages = [18, 19, 21, 22, 23, 20];
document.write(ages + "<br><br>"); 
// Find method will check all values of arrays & returns the first value if it's true
// FindIndex method will check all values of arrays & returns the first index of value if it's true
var check = ages.findIndex(checkAdult); 
document.write(check + "<br><br>"); 

function checkAdult(age) {
    return age >= 18
}
