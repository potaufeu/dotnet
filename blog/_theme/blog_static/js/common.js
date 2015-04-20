jQuery(function($) {
  var lastIsSticky = undefined,
    $document = $(document),
    $header = $("header");

  $(window).on("scroll", function() {
    var scroll = $document.scrollTop(),
      isSticky = scroll > 80;

    if (lastIsSticky === isSticky) {
      return;
    }
    lastIsSticky = isSticky;

    if (isSticky) {
      $header.addClass("sticky")
    }
    else {
      $header.removeClass("sticky")
    }
  });
});
