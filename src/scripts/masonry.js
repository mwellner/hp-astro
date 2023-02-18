var $grid = document.querySelector(".grid");
imagesLoaded($grid, function () {
  new Masonry(".grid", {
    itemSelector: ".card",
    columnWidth: 400,
    gutter: 18,
  });
});
