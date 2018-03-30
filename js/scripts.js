function beepBoop(number){
  var counter = parseInt(number);
  var array = [];
  for (var i = 0; i <= counter; i++) {
    array.push(i);
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
