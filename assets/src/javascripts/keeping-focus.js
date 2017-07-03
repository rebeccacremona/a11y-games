document.addEventListener("DOMContentLoaded", function(event) {

  // Display the staircase and place the user at the top of the stairs
  document.getElementById('to-the-staircase').addEventListener('click', function(){
    this.style.display = "none";
    document.getElementById('candle-wrapper').style.display = "none";
    document.getElementById('staircase-wrapper').style.display = "block";
    document.getElementById('staircase-top').focus();
  })

});
