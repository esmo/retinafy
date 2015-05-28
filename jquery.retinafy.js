/*
 * (c) 2014 Edouard J. Simon
 * 
 */
(function($) {
   $.fn.retinafy = function(options) {
      settings = $.extend({
         'force': false,
         'action': function(img) {
            $(img).attr('src', $(img).attr('src').replace(".", "x2."));
         },
         'error': function(img, src) {
            //revert image to previous source if replacing fails
            $(img).attr('src',src);
         }
      }, options);
      if (window.devicePixelRatio > 1 || settings.force) {
         this.each(function() {
            var src = $(this).attr('src');
            $(this).error(function() {
               settings.error(this, src);
            });
            settings.action(this);
         });
      }
      return this;
   };
})(jQuery);
