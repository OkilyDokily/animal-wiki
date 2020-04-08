$(document).ready(function(){
  $(".animal-grid").click(function(e){
    var animals = ["giraffe","coati","honey-bee"];
    var targetId = e.target.id;
    if(animals.includes(e.target.id)){
      $(".animal-grid").animate({
        "width": "10vw"
      });
      $(".animal-grid div").css({
        "height":"auto"
      })
      $("."+targetId).css({
        "border": "green solid 1px"
      })

      $("."+ targetId + "-wiki").show();
    }   
    
  })
    
  

});