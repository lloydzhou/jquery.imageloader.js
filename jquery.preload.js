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
        len = urls.length;

    $.each(options.urls, function(i, item) {
      var img = new Image();
      img.src = item;
      img.onerror = function() {
        loadCount++;
        options.onError(item);
      };
      img.onload = function(res) {
        options.onUpdate(++loadCount/len, urls[loadCount-1]);
        if (loadCount === len) options.onComplete(cache);
      };
      cache.push(img);
    });

  };
 
})(jQuery);
