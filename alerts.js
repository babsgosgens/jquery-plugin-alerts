/*///////////////////////////////
// CodePlayr Alerts
///////////////////////////////*/

(function ($) {

    'use strict';

    $.fn.cdAlert = function( options ) {

        var defaults = {
            includeCloseButton: true
        };

        var settings = $.extend( {}, defaults, options );

        if ( settings.includeCloseButton === true ) {
            this.append('<span class="alert-close trigger-alert-close">&times;</span>');
        }

        this.click(function(e) {
            var $target = $(e.target),
            	$alert = $target.closest("div[role='alert']");

			if ($target.hasClass("trigger-alert-close")) {

	            if ($alert.data("slide")) {
	                $alert.slideUp();
	            } else {
	                $alert.fadeOut();
	            }

			}
        });

    };
	$('[class^="alert"]').cdAlert();

}(jQuery));