$(function(){
  $("#go").click(function(ev){
    ev.preventDefault();
    $("#result").val('');
    var number = $("#number").val();
    $.getJSON('/primeFactors?number=' + number , function(data) {
      var result = data.number + " = " + data.decomposition.join(" x ");
      $("#result").html(result);
    });
  });
});