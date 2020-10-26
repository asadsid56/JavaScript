let person = {
    Firstname : "Asad",
    Lastname : "Siddiqui",
    Age : "23",
    Email : "asadsid56@gmail.com",
    Favmovies : ["Dhoom","Hum","Badshah"],
    Salary : function () {      // Method of Obg
        return 2500; 
    },
    Fullname : function () {    // Method of Obg
        return this.Firstname + " " + this.Lastname; 
    },
    Living : {
        "City" : "Brussels",
        "Country" : "Belgium",
    },
}
// console.log(person);
// document.write(person.Living.Country);     
 

