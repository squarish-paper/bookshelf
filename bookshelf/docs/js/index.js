
$(document).ready(function(){
  $('select').formSelect();
});

$(document).ready(function(){
    $('.pushpin').pushpin();
  });


$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
