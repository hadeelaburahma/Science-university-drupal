(function ($, _, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.sufunctions = {
    attach: function (context, settings) {
      $('.footer .col').matchHeight();
      $('.events .col .node--type-events').matchHeight();
      var currentYear = (new Date).getFullYear();
      var lastYear = currentYear - 1;
      $('#year').html(lastYear + "/" + currentYear);
      $('#current-year').html(currentYear);
      $('.search-icon').click(function() {
        if ($('.search-block-form').hasClass('open')) {
          $('.search-block-form').removeClass('open');
        } else {
          $('.search-block-form').addClass('open');
        } 
      });
      $(".form-search").prop('required', true);
    }
  }
})(window.jQuery, window._, window.Drupal, window.drupalSettings);
