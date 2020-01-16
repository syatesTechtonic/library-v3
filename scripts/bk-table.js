let $row = $('.js-bk-header');
let info   = '.js-bk-info';

$(document).ready(function(){
  $(info).hide();
});

$row.click(function () {
  $(this).next(info).children().first().addClass('bk-info__content--open');
  $(this).next(info).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  return false;
});