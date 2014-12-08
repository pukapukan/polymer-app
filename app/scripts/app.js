(function(document) {
  'use strict';

  window.sharedMixin = {
    ticksToDateString: function (ticks) {
      var date = new Date(parseInt(ticks));
      return date.toLocaleDateString();
    }
  };

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
