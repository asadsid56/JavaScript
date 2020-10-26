var animals = ['Cat', 'Dog', 'Elephant', 'Bee', 'Ant'];
document.write(animals + "<br><br>"); 

// Slice Method is for take values from previous array and store into new one
var store = animals.slice(1,4); // create new array with previous array values
document.write(store + "<br><br>"); // display new array 

// Splice Method will add new values to existing Array in middle
animals.splice(2,0,"Lion", "Tiger"); 
document.write(animals);    
