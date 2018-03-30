function beepBoop(number){
  var counter = parseInt(number);
  var array = [];
  for (var i = 0; i <= counter; i++) {
    var n = i.toString();
    if(i%3 === 0 && i !== 0){
      array.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if(n.includes("1")){
      array.push("Boop!");
    } else if(n.includes("0")){
      array.push("Beep!");
    } else {
        array.push(n);
    }
  }
  return array.join(" ");
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = $("input#number").val();
    var result = beepBoop(number);
    $("#output").text(result);
  });
});
