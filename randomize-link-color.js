let originalColor;
$("a.colorful-link").mouseenter(function() {
    originalColor = $(this).css("background-color");
    let availableColors = $(".colorful-links-list").children().length;
    let randomNum = Math.floor(Math.random() * availableColors);
    let selectedColor = $(".colorful-links-item").eq(randomNum).css("background-color");
    $(this).css("background-color", selectedColor);
  })
  .mouseleave(function() {
    $(this).css("background-color", originalColor);
  });