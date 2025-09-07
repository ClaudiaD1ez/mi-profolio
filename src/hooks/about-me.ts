import $ from "jquery";

export const verMas = () => {
  const showText = "Ver más";
  const hideText = "Cerrar";

  // Inicializar el texto de todos los botones
  $(".btn-vermas").each(function () {
    $(this).find(".text-ver-mas").html(showText);
  });

  // Evento click para cada botón
  $(".btn-vermas").on("click", function () {
    const btn = $(this); // el botón que se pulsó
    const card = btn.closest(".infocard"); // busca la card correspondiente

    // Toggle de la clase
    card.toggleClass("open");

    // Actualizar texto del botón según estado
    if (card.hasClass("open")) {
      btn.find(".text-ver-mas").html(hideText);
    } else {
      btn.find(".text-ver-mas").html(showText);
    }
  });
};