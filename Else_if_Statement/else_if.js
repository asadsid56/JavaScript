let percentage = 55; 

if (percentage >= 90 && percentage <= 100) {
    document.write("You are in Merit");
} else if (percentage >= 80 && percentage <= 90){
    document.write("You are in second division");
}
else if (percentage >= 70 && percentage <= 80){
    document.write("You are in thrid division");
}
else if (percentage >= 60 && percentage <= 70){
    document.write("You are in fourth division");
}
else if (percentage >= 50 && percentage <= 60){
    document.write("You are in fifth division");
}
else if (percentage < 50){
    document.write("You are Fail");
}
else {
    document.write("Please enter a valid percentage"); 
}