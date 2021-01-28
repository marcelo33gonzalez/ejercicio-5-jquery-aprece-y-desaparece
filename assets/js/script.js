$(document).ready(function () {
  $("body").on("click", ".target", function () {
    // alert($(this).attr("id"));

    // var imagenO = $(this).attr("id");
    // imagenO = "#" + imagenO;
    // console.log(imagenO);

    //funcion ocultar para uso fuera del body
    // $(".target").on("click", function () {
    $("#" + $(this).attr("id")).hide(); //oculto mediante clase
    // });
    //fin funcion ocultar para uso fuera del body
  });

  $("#mostrar").on("click", function () {
    $(".target").show(); //muestro mediante id
  });
});
