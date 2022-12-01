window.addEventListener("SlidesLoaded", () => {
  $(".support").click(function () {
    $(".shadow").remove();
    $(".exit_x").remove();
    $(".modal").remove();
    $("footer").css({ "z-index": "2" });
    $(".mainSlide15_title").append(`
    <div class="shadow" >

    <div class="modal" >  <div class="exit_x"></div>
    <p>
    <strong>VASCEPA</strong> (IPE) has received <strong>increasing support from leading medical bodies in cardiology and endocrinology</strong> as an <strong>important CV treatment option</strong> (ESC , ADA, AACE, AHA, NLA), to be used in <strong>high risk Cardiovascular patients with elevated Triglycerides</strong> (TG levels between 150 – 599 mg/dl).
    </p>
    </div>
     </div>
    `);
    $(".exit_x").on("click", function () {
      //   console.log("heree clicked ");
      $(".shadow").remove();
      $(".exit_x").remove();
      $(".modal").remove();
      $("footer").css({ "z-index": "unset" });
    });
  });
  $(".approved").click(function () {
    $(".shadow").remove();
    $(".exit_x").remove();
    $(".modal").remove();
    $("footer").css({ "z-index": "2" });
    $(".mainSlide15_title").append(`
    <div class="shadow" >

    <div class="modal" >  <div class="exit_x"></div>
    <p>
    <strong>VASCEPA</strong> (IPE) is the <strong>only FDA approved prescription purified EPA  clinically proven to decrease triglyceride levels and multiple Atherogenic lipid parameters</strong> (without increasing LDL-C levels) - Patients on Vascepa will benefit from a significant <strong>decrease in elevated TG levels</strong>  that are associated with a  progression of  <strong>cardiovascular sequelae</strong> and a risk of pancreatitis.
    </p>
    </div>
     </div>
    `);
    $(".exit_x").on("click", function () {
      //   console.log("heree clicked ");
      $(".shadow").remove();
      $(".exit_x").remove();
      $(".modal").remove();
      $("footer").css({ "z-index": "unset" });
    });
  });
  $(".tg").click(function () {
    $(".shadow").remove();
    $(".exit_x").remove();
    $(".modal").remove();
    $("footer").css({ "z-index": "2" });
    $(".mainSlide15_title").append(`
    <div class="shadow" >

    <div class="modal" >  <div class="exit_x"></div>
    <p>
   <strong>VASCEPA</strong> (IPE) is indicated as an <strong>adjunct to diet to reduce TG levels</strong> in adult patients with <strong>severe (≥ 500 mg/dL)</strong> hypertriglyceridemia.
    </p>
    </div>
     </div>
    `);
    $(".exit_x").on("click", function () {
      //   console.log("heree clicked ");
      $(".shadow").remove();
      $(".exit_x").remove();
      $(".modal").remove();
      $("footer").css({ "z-index": "unset" });
    });
  });
});

// swiper.on("activeIndexChange", function () {
//   if (this.activeIndex === 13) {
//   } else {
//   }
// });
