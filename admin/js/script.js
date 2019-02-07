if (document.querySelector("#about")) {
  CKEDITOR.replace("about");
}

document.querySelector(".wj-bar-icon").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".wj-content").classList.toggle("wj-toggle");
  document.querySelector(".wj-sidebar").classList.toggle("wj-toggle");
});
