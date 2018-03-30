function beepBoop(number, name){
  var counter = parseInt(number);
  var array = [];
  for (var i = 0; i <= counter; i++) {
    var n = i.toString();
    if(i%3 === 0 && i !== 0){
      array.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
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

function showRobot(number){
  var n = parseInt(number);
  if(n%3 === 0 && n !== 0){
    return 3;
  } else if(number.includes("1")){
    return 4;
  } else if(number.includes("0")){
    return 5;
  } else {
    return 6;
  }
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = $("input#number").val();
    var name = $("input#name").val();
    var result = beepBoop(number, name);
    var robot = showRobot(number);
    $("#output").text(result);
    if(robot === 3){
      $("#robot3").show();
      $("#robot4").hide();
      $("#robot5").hide();
      $("#robot6").hide();
    } else if(robot === 4){
      $("#robot4").show();
      $("#robot3").hide();
      $("#robot5").hide();
      $("#robot6").hide();
    } else if(robot === 5){
      $("#robot5").show();
      $("#robot3").hide();
      $("#robot4").hide();
      $("#robot6").hide();
    } else{
      $("#robot6").show();
      $("#robot3").hide();
      $("#robot4").hide();
      $("#robot5").hide();
    }
  });
});
