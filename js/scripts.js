$(document).ready(function(){
  $(".animal-grid").click(function(e){
    
    if(e.target.id === "giraffe"){
     
      $(".animal-grid").animate({
        "width": "10vw"
      });
      $(".animal-grid div").css({
        "height":"auto"
      })
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