var dateclass = "translate-date";

$(".pagination_next-prev-btn").on("click", function () {
  setTimeout(translateDate, 1000);
});

$(".pagination_page-btns-wrapper").on("click", function () {
  setTimeout(translateDate, 1000);
});

$(document).ready(function () {
  translateDate();
});

function translateDate() {
  var wfdc = $("." + dateclass);

  wfdc.each(function () {
    var wfdctxt = $(this).text();

    var monthsEn = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    var monthsPtbr = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "sezembro",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado",
      "domingo"
    ];

    for (var i = 0; i < monthsEn.length; i++) {
      wfdctxt = wfdctxt.replace(monthsEn[i], monthsPtbr[i]);
    }

    $(this).text(wfdctxt);
  });
}