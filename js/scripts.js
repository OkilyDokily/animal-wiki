$(document).ready(function(){
  $(".animal-grid").click(function(e){
    
    if(e.target.id === "giraffe"){
     
      $(".animal-grid").animate({
        "width": "10vw"
      });
      $(".animal-grid div").css({
        "height":"auto"
      })
    }
    else if (event.target.id === "honeybee"){

    }
    else if (event.target.id == "coati"){

    }
  })
    
  

});