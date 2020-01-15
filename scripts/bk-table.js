let $row = $('.js-bk-title');
let info   = '.js-bk-info';

$(document).ready(function(){
  $(info).hide();
});

$row.click(function () {
  $(this).next(info).children().first().addClass('bk-info--open');
  $(this).next(info).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  return false;
});