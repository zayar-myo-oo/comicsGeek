$(document).ready(function () {

  $(window).scroll(function () {
    let getscrollTop = $(this).scrollTop();
    if (getscrollTop >= 53) {
      $(".navbars").addClass("navbar-colors");

    } else {
      $(".navbars").removeClass("navbar-colors");
    }

  })

})

