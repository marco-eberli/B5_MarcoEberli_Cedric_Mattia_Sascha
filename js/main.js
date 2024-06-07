function burgerFunc() {
    let nav = document.getElementsByClassName("nav");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }