function burgerFunc() {
    let nav = document.getElementsByClassName("burger-nav")[0];
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  }