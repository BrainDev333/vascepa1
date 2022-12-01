swiper.on("activeIndexChange", function () {
  if (this.activeIndex === 3) {
    // console.log("hereeeeeeeeeeeeeeee");
    $(".mainSLide4_fleches").show();
    $(".mainSLide4_result").show();
  } else {
    $(".mainSLide4_fleches").hide();
    $(".mainSLide4_result").hide();
  }
});
