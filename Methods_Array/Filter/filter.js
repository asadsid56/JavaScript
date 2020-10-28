var ages = [10, 12, 23, 24, 25, 20];
document.write(ages + "<br><br>"); 
// Filter method will search in Array & if condition is true then filter method will make a new Array
var check = ages.filter(checkAdult); 
document.write(check + "<br><br>"); 

function checkAdult(age) {
    return age >= 18
}
