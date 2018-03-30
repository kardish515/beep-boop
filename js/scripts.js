function beepBoop(number){
  if(number === "0"){
    return '"Beep!"';
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
