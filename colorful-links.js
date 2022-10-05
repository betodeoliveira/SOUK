let originalTextColor = "#eeeeee";
let hoverTextColor = "#383838";

$(".colorful-link").each(function (index) {
  $(this).attr("original-background-color", $(this).css("background-color"));
});

$(".colorful-link").mouseenter(function() {
    let availableColors = $(".colorful-links-list").children().length;
    let randomNum = Math.floor(Math.random() * availableColors);
    let selectedColor = $(".colorful-links-item").eq(randomNum).css("background-color");
    $(this).css("background-color", selectedColor);
    $(this).css("color", hoverTextColor);
  })
  .mouseleave(function() {
    $(this).css("background-color", $(this).attr("original-background-color"));
    $(this).css("color", originalTextColor);
  });