/* HAMBURGER MENU */
function toggleNav() {
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  let hamburgerNav = document.getElementById("hamburgerNav");
  console.log(document.getElementById("hamburgerNav").clientHeight);
  if (hamburgerNav.clientHeight == 0) {
    hamburgerNav.style.height = vh + "px";
    document.getElementById("hamburgerNavLinks").style.display = "block";
    document.getElementById("headerNav").style.position = "fixed";

    console.log("Dostuff");
  } else {
    hamburgerNav.style.height = 0;
    document.getElementById("hamburgerNavLinks").style.display = "none";
    document.getElementById("headerNav").style.position = "absolute";

    console.log(hamburgerNav.clientHeight);
    console.log(window.clientHeight);
    console.log("unDostuff");
  }
}

//Hamburger-button
$(document).ready(function () {
  $("#nav-icon1").click(function () {
    console.log("test1");

    $(this).toggleClass("open");
  });
});
