let $row = $('.js-bk-table__row');
let info   = '.js-bk-info';

$row.click(function () {
  $(this).next(info).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  return false;
});