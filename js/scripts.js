function beepBoop(number){
  if(number === "0"){
    return "Beep!";
  } else if(number === "1"){
    return "Boop!";
  } else if(number === "3"){
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  }
}



$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = $("input#number").val();
    var result = beepBoop(number);
    $("#output").text(result);
  });
});
