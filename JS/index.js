const btn = document.q;

$(document).ready(function () {
  $(".itemBox").click(function () {
    $(".itemBox").removeClass("btnActive fa-beat");
    $(this).addClass("btnActive fa-beat");
  });
});
