window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("scroll-top").style.display = "block";
  } else {
    document.getElementById("scroll-top").style.display = "none";
  }
});

document.getElementById("scroll-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
