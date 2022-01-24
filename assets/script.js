$(document).ready(function () {
  function onLoadAnimation(animationDelay) {
    console.log("Function Called");
    $(".layer1")
      .delay(400 + animationDelay)
      .hide("scale", { percent: 2000, direction: "verticle" }, 2500);
    $(".layer2")
      .delay(400 + animationDelay)
      .hide("scale", { percent: 2000, direction: "verticle" }, 5000);
    $(".layer3")
      .delay(400 + animationDelay)
      .hide("scale", { percent: 2000, direction: "verticle" }, 8000);
    $(".invitationText")
      .delay(2400 + animationDelay)
      .fadeOut(300);
    $(".layer4")
      .delay(2400 + animationDelay)
      .fadeOut(2000, function () {
        $(".mainOpening").hide(50, function () {
          $(".mainRainContainer").delay(100).css({
            display: "block",
            opacity: "1",
          });
        });
      });
    localStorage.setItem("animationDone", true);
  }
  var animationDone = localStorage.getItem("animationDone");

  setTimeout(function () {
    onLoadAnimation(0);
  }, 3000);

  // $(document).mousemove(function(event){
  // 	$(".leftSide").addClass("lightBlue");
  // 	$(".leftSide").removeClass("lightGreen");
  // });

  var isMoving = false;

  $(document).bind(
    "mousewheel DOMMouseScroll MozMousePixelScroll",
    function (event, delta) {
      event.preventDefault();
      if (isMoving) return;
      navigateTo();
      onLoadAnimation(0);
    }
  );

  function navigateTo() {
    isMoving = true;
    setTimeout(function () {
      isMoving = false;
    }, 2000);
  }
});
