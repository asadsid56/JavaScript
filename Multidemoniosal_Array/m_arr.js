// When Data is related we use Multidimensional Arrays 

let table = [
    ["Asad",23,"Male","Becode"],
    ["Jacqueline",25,"Female","Becode"],
    ["Charlotte",22,"Female","Becode"],
    ["Ahmadd",26,"Male","Becode"],
]

for (let a = 0; a < table.length; a++) {  // Outer Table
    for (let b = 0; b < table.length; b++) { // Inner Table
        document.write(table[a][b] + " ");
    }
    document.write("<br>")
}