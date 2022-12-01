// $("#mainSLide10_Early").on("tap", function () {
//   console.log("hello", this);
// });

window.addEventListener("SlidesLoaded", () => {
  // console.log("here");
  $("#mainSLide10_Early, #mainSLide10_late, #mainSLide10_mid").on(
    "click tap",
    function () {
      // this.style.background = "#B42B80";
      if ($(".box").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");
      // console.log(this.style);

      if ($("#mainSLide10_Early").hasClass("active")) {
        $(".img1").show();
      } else {
        $(".img1").hide();
      }
      if ($("#mainSLide10_mid").hasClass("active")) {
        $(".img2").show();
      } else {
        $(".img2").hide();
      }
      if ($("#mainSLide10_late").hasClass("active")) {
        $(".img3").show();
      } else {
        $(".img3").hide();
      }
    }
  );

  //   if ($("#mainSLide10_Early").hasClass("active")) {
  //   }
  //   if ($("#mainSLide10_Early").hasClass("active")) {
  //   }
});
swiper.on("activeIndexChange", function () {
  if (this.activeIndex !== 10) {
    // console.log("hereeeeeeeeeeeeeeee");
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").hide();
    if ($(".box").removeClass("active")) {
      $(this).removeClass("active");
    }
  }
});
