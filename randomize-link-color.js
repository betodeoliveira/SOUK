let originalColor;
$("a.colorful-link").mouseenter(function() {
    originalColor = $(this).css("background-color");
    let availableColors = $(".link-colors-wrapper").children().length;
    let randomNum = Math.floor(Math.random() * availableColors);
    let selectedColor = $(".link-color").eq(randomNum).css("background-color");
    $(this).css("background-color", selectedColor);
  })
  .mouseleave(function() {
    $(this).css("background-color", originalColor);
  });