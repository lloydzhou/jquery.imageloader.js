;(function ($) {
 
  $.imageloader = function(userOptions) {
 
    var options = $.extend({
      urls: [],
      onComplete: function() {},
      onUpdate: function(ratio, image) {},
      onError: function(image) {}
    }, userOptions);
    
    var loadCount = 0,
        cache = [],
        len = options.urls.length;
    var update = 
    $.each(options.urls, function(i, item) {
      var img = new Image();
      img.onload = function() {
        options.onUpdate(++loadCount/len, options.urls[loadCount-1]);
        if (loadCount === len) options.onComplete(cache);
      }
      img.onerror = function() {
        options.onError(item);
        img.onload();
      }
      img.src = options.base ? options.base+item : item;      
      cache.push(img);
    });

  };

})(jQuery);
