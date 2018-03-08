count =0;

function takeANumber(deli, name){
   //deli.push(name);
   //return "Welcome, " + name + ". You are number " + deli.length  + " in line."
   Time.now
   time = "hours.minutes";
   ++count;
   deli.push(count);
   log.push(time);
   return "Welcome, " + name + ". You are number " + count  + " in line."
   
   take a number keeps pushing in the nnumber, not shifting 
   
}

function nowServing(deli,vare){
  if (deli[0]){
    return "Currently serving " + deli[vare] + "."
  }
  return "There is nobody waiting to be served!";
}

function currentLine(deli){
  if (!deli[0]){
    return "The line is currently empty."
  }
  
  
   var count = 1;
   return "The line is currently: 1. " + deli.reduce((acum, curval) => acum + ", " + (++count) + ". " + curval);
}



