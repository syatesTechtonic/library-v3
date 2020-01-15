let $row = $('.js-bk-title__row');
let info   = '.js-bk-info';

$(document).ready(function(){
  $(info).hide();
});

$row.click(function () {
  $(this).next(info).children().first().toggleClass('bk-info--open');
  $(this).next(info).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  return false;
});