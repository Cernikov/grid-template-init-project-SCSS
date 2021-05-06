
// $(document).ready(function () {

//   $('.header-navbar__hamburger').on('click', function () {
//     $(this).toggleClass('active');
//     $('.header-navbar__list').toggleClass('active');
//   });

// });



// $(document).ready(function(){
//   $('.header-navbar__btn').on('click', function(){
//     $(this).toggleClass('active');
//     $('.header-navbar__list').stop(true, true).slideToggle(500)
//   });
// });

$(document).ready(function(){
  $('.header-navbar__btn').click(function(){
    $(this).toggleClass('active');
    $('.header-navbar__list').slideToggle(500)
  });
});