$(function () {
  $("#chkveg").multiSelect({
    includeSelectAllOption: true,
  });

  $("#btnget").click(function () {
    alert($("#chkveg").val());
  });
});
