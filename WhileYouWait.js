var end = new Date("May 9, 2018"),
    start = new Date (),
    span = 0,
    days = 24 * 60 * 60 * 1000;

span = (end - start);
var count = Math.floor(span/days);

var target = (span - days);
var targetday = (target/days )

if (span < -86400000){
    console.log("I wish I could give away that last birthday.  :/");
}else if (span >=-86400000 && span <= 0){
    console.log("TODAY IS THE DAY!  LET'S PARTY!!!   ...wait... how old am I now?");
}else if(count > 100){
    console.log(count + " days until my birthday??  But that's more than a hundred!");
}else if(count >= 60 && count <= 100){
    console.log( count + " days until my birthay...  But that's such a long time. <sigh>");
}else if (count >= 30 && count <= 59){
    console.log("Only " + count + " days to go.  Getting closer now, but still so far...");
}else if(count >= 15 && count <=29){
    console.log(count + "days left!! Birthday is IN SIGHT!!");
}else if (count >= 2 && count <=14){
    console.log("T-MINUS " + count + " DAYS UNTIL BIRTHDAY CELEBRATION!!!");
}else if (count = 1){
    console.log(count + " DAY LEFT!!  MY BIRTHDAY IS TOMORROW!!!");
}
    
