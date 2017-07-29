console.log('linked')

$('.hamburger').on('click', function () {
  $('.nav-links').toggleClass('show-nav')
})

$(document).ready(function(){
    $('.divider').slideDown('slow', 'linear')
});
