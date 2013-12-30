$(function(){
  $("#go").click(function(ev){
    ev.preventDefault();
    
    
    var number = $("#number").val();
    var qs = 'number=';
    if(number.indexOf(',') != -1)
      qs += number.split(",").join("&number=");
    else
      qs += number;
      
    var url = '/primeFactors?';
    $.getJSON(url + qs , function(data) {
      
      $("#result").html('');
      $("#results").html('');
      
      if(isArray(data))
        showArrayResult(data);
      else
        $("#result").html(getSingleResult(data));
      
    });
  });
});

function showArrayResult(data)
{
  data.forEach(function(single){
    $("#results").append("<li>" + getSingleResult(single) + "</li>");
  });
}

function getSingleResult(data)
{
  var result = '';
  if(data.error != null && data.error != ''){
    if(data.error == "not a number")
      result = data.number + ' is ' + data.error;
    else
      result = data.error;
  }
  else
    result = data.number + " = " + data.decomposition.join(" x ");
  
  return result;
}

function isArray(object) {
  return object != null && typeof object === "object" &&
    'splice' in object && 'join' in object;
}