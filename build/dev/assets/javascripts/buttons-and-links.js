document.addEventListener("DOMContentLoaded", function(event) {

  // Display the candles when the accessible-by-default button is pressed
  document.getElementById('get-candles').addEventListener('click', function(){
    document.getElementById('get-candles-wrapper').style.display = "none";
    document.getElementById('candles').style.display = "flex";
    document.getElementById('candle-landing').focus();
  })

  // Light the candles when their buttons are pressed
  var buttons = document.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){lightCandle(this)}, false);
  }

  // Global counter, tracking how many candles have been lit
  candle_counter = 0;

  // Light candle, and if all candles have been lit, trigger
  // the next step in the game
  function lightCandle(elem) {
    elem.parentNode.querySelector('.light').style.display = "block";
    elem.parentNode.querySelector('.fire').style.display = "block";
    elem.style.display = "none";
    candle_counter += 1;
    if (candle_counter == 3){
      revealLinks();
    } else {
      elem.parentNode.querySelector('.candle-lit').focus();
    }
  };

  // Display options for next game
  function revealLinks() {
    document.getElementById('next').style.display = "block";
    document.getElementById('next-landing').focus();
  }

  // Make .link elements behave a bit like native links
  var links = document.getElementsByClassName("link");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e){
      location.href = this.dataset.href || "";
    });
  }

});
