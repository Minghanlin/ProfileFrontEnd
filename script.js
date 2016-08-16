$(document).ready(function() {

  var $btn = $('#btn'); //button
  // var $input = $('#input'); //input box
  var $result = $('#result'); //result box

$btn.on('click', function() {
  console.log('click click click');
  $.ajax({
    url: 'https://evening-headland-43894.herokuapp.com/profile',
    type: 'GET',

   }).done(function(data) {
     $result.html(
       "<p> Full Name: " + data.name + "</p> <p> Email: " + data.email + "</p> <p> Hobbies: " + data.email + "</p> <p> Description: " + data.description + "</p>"
     );
   })
   .fail(function(request, textStatus, errorThrown) {
     $result.html("Sorry! An error occured when processing your phrase. Request " + request.status + " " + textStatus + " " + errorThrown);
   });
 });

});
