var DatePicker  = require('date-picker');
var triggerEvent = require('trigger-event');

/**
 * Create datepickers
 */
var datepickers = document.querySelectorAll('[data-datepicker]') || [];

Array.prototype.forEach.call(datepickers, function(el){
  var picker = new DatePicker({
    el: el,
    position: el.getAttribute('data-datepicker-position'),
  });
  picker.on('select', function(val) {
    triggerEvent(el, 'change');
  });
});