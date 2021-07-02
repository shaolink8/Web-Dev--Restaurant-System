const carousel = {
  run: function() {
    $(".carousel__slide:gt(0)").hide();
    setInterval(function() {
      $(".carousel__slide:first")
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo(".carousel");
    }, 5000);
  }
};
carousel.run();