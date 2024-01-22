function toggleModal() {
  var modal = document.getElementById("modal");
  var overlay = document.getElementById("overlay");

  if (modal.style.display === "flex") {
    modal.style.display = "none";
    overlay.style.display = "none";
  } else {
    modal.style.display = "flex";
    overlay.style.display = "block";
  }
}
