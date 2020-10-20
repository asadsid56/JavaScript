// When you don't know the values that you want to put in array :
// Create a New Array and store values whenever you want to.

let array = new Array(); 

for (let g = 0; g < 3; g++) {
    array[g] = prompt("Enter the Value"); 
    document.write("<li>" + array[g] + "</li>"); 
}
