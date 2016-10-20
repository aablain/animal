$(document).ready(function() {
  $("form").submit(function(event){
    //$("container").removeClass();
    //event.preventDefault();

  var animal = $("input:radio[name=animals]:checked").val();
   if (animal === "turtles") {
     $("#snakes").hide();
     $("#insects").hide();
     $('#turtles').show();
   } else if (animal === "snakes") {
       $("#turtles").hide();
       $("#insects").hide();
       $('#snakes').show();
   } else if (animal === "insects") {
       $("#turtles").hide();
       $("#snakes").hide();
       $('#insects').show();
   }
   event.preventDefault();
   });
});
