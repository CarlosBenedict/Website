$(document).ready(() => {
    $(window).scroll(() => {
      if(this.scrollY > 40) {
        $('.nav').addClass("sticky")
      } else {
        $(".nav").removeClass("sticky")
      }
    })
  })