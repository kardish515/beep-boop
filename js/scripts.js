function beepBoop(number){
  var counter = parseInt(number);
  var array = [];
  for (var i = 0; i <= counter; i++) {
    var n = i.toString();
    if(n === "3"){
      array.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if(n === "1"){
      array.push("Boop!");
    } else if(n === "0"){
      array.push("Beep!");
    } else {
        array.push(n);
    }
  }
  // if(number === "0"){
  //   return "Beep!";
  // } else if(number === "1"){
  //   return "Boop!";
  // } else if(number === "3"){
  //   return "I'm sorry, Dave. I'm afraid I can't do that.";
  // }
  return array;
}



$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = $("input#number").val();
    var result = beepBoop(number);
    $("#output").text(result);
  });
});
