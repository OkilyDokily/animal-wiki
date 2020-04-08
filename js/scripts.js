$(document).ready(function(){
  $(".animal-grid").click(function(e){
    var animals = ["giraffe","coati","bumblebee"];
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

      $("#"+ targetId + "-wiki").show();
    }   
    var removeAnimal = animals.filter(item => item != targetId);
    console.log(removeAnimal);
    removeAnimal.forEach(function (item){
      console.log("#" + targetId + "-wiki")
      $("#" + item + "-wiki").hide();
      $("."+item).css({
        "border": "none"
      })
    });
  })
});