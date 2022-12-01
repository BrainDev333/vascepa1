swiper.on("activeIndexChange", function () {
  if (this.activeIndex === 14) {
    // console.log("hereeeeeeeeeeeeeeee");
    $(".mainSlide14_courbe").show();
    $(".mainSlide14_textres").show();
  } else {
    $(".mainSlide14_courbe").hide();
    $(".mainSlide14_textres").hide();
  }
});
