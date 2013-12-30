$(function(){
  $("#go").click(function(ev){
    ev.preventDefault();
    $("#result").val('');
    var number = $("#number").val();
    $.getJSON('/primeFactors?number=' + number , function(data) {
      var result = '';
      if(data.error != null && data.error != ''){
        if(data.error == "not a number")
          result = data.number + ' is ' + data.error;
        else
          result = data.error;
      }
      else
        result = data.number + " = " + data.decomposition.join(" x ");
      
      $("#result").html(result);
    });
  });
});