

$("h2.changeCost").css("visibility","hidden");

function showCost()
{
  var display ="Your total cost is: $" + calculateCost() + " /night";
  var x = $("h2.changeCost");
  x.text(display);
  $("h2.changeCost").css("visibility","visible");
}

function calculateCost(){
  var a = $("#inputAdult").val();
  var c = $("#inputChildren").val();
  var cost = 0;
  var people = parseInt(a) + parseInt(c);

   if (((people)%3==0)||((people)%3==1))
   {
    var cost = parseInt(people/3)*300;
    }
   else
   {
    var cost = (parseInt(people/3)+1)*300;
    }
  return cost;
}

function bookClick(){
  alert("Your room has been succesfully booked.");
}
