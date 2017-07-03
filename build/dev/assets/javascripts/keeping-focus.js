document.addEventListener("DOMContentLoaded", function(event) {

  // Display the staircase and place the user at the top of the stairs
  document.getElementById('to-the-staircase').addEventListener('click', function(){
    this.style.display = "none";
    document.getElementById('candle-wrapper').style.display = "none";
    document.getElementById('staircase-wrapper').style.display = "block";
    document.getElementById('staircase-top').focus();
  })

  // Reveal nearby steps
  function reveal(elem){
    var prev = elem.previousElementSibling
    if (prev && prev.previousElementSibling){
      prev.previousElementSibling.style.visibility = "hidden";
    }
    var next = elem.nextElementSibling
    if (next){
      next.style.visibility = "visible";
    }
  }
  var steps = document.getElementsByClassName("step");
  for (var i = 0; i < steps.length; i++) {
    steps[i].addEventListener('focus', function(){reveal(this)}, false);
  }

  // Reveal the floor
  var lastStep = document.getElementsByClassName("step-8")[0];
  lastStep.addEventListener('focus', function(){
    document.getElementsByClassName('floor')[0].style.visibility = "visible";
    document.getElementsByClassName('bottom')[0].style.visibility = "visible";}, false
  );

  // Hide the stairs
  var bottom = document.getElementsByClassName('bottom')[0]
  bottom.addEventListener('focus', function(){
    document.querySelectorAll(".step").forEach(function(step){step.style.visibility = "hidden";}, false);
    document.getElementById('staircase').style.visibility = "hidden";}, false
  );

});
