$(document).ready(function(){
  $(".animal-grid").click(function(e){
    var animals = ["giraffe","coati","honey-bee"];
    if(animals.includes(e.target.id)){
      $(".animal-grid").animate({
        "width": "10vw"
      });
      $(".animal-grid div").css({
        "height":"auto"
      })
    }
    if(e.target.id === "giraffe"){
     
      $(".giraffe").css({
        "border": "green solid 1px"
      })

      $(".giraffe-wiki").show();
    }
    else if (event.target.id === "honeybee"){

    }
    else if (event.target.id === "coati"){

    }
  })
    
  

});