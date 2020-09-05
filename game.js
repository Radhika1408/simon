var gamePattern=[];
var buttonColours =["red","blue", "green", "yellow"];

function nextSquence()
{
    var Number=Math.random()*4;
   var randomNumber= Math.floor(Number);
   var randomChosenColour ;

   switch (randomNumber)
    {
       case 0:randomChosenColour=buttonColours[0];
              gamePattern.push(randomChosenColour);
              $("#red").fadeIn(100).fadeOut(100).fadeIn(100);
              var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
              audio.play();
            
           
           break;
       case 1:randomChosenColour=buttonColours[1];
              gamePattern.push(randomChosenColour);
              $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
              var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
              audio.play();
            
           break;
       case 2:randomChosenColour=buttonColours[2]
              gamePattern.push(randomChosenColour);
              $("#green").fadeIn(100).fadeOut(100).fadeIn(100);
              var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
              audio.play();
            
              break;
   
       default:randomChosenColour=buttonColours[3]
               gamePattern.push(randomChosenColour);
              $("yellow").fadeIn(100).fadeOut(100).fadeIn(100);
              var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
              audio.play();

              break;
   }
  

}