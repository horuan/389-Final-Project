// Get a reference to the div you want to auto-scroll.
var someElement = document.querySelector('.className');
// Create an observer and pass it a callback.
var observer = new MutationObserver(scrollToBottom);
// Tell it to look for new children that will change the height.
var config = {
  childList: true
};
observer.observe(someElement, config);

// First, define a helper function.
function animateScroll(duration) {
  var start = someElement.scrollTop;
  var end = someElement.scrollHeight;
  var change = end - start;
  var increment = 20;

  function easeInOut(currentTime, start, change, duration) {
    // by Robert Penner
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  }

  function animate(elapsedTime) {
    elapsedTime += increment;
    var position = easeInOut(elapsedTime, start, change, duration);
    someElement.scrollTop = position;
    if (elapsedTime < duration) {
      setTimeout(function() {
        animate(elapsedTime);
      }, increment)
    }
  }
  animate(0);
}
// Here's our main callback function we passed to the observer
function scrollToBottom() {
  var duration = 300 // Or however many milliseconds you want to scroll to last
  animateScroll(duration);
}