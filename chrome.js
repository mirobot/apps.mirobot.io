chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('chrome.html', {
    'outerBounds': {
      'width': 850,
      'height': 700
    }
  });
});