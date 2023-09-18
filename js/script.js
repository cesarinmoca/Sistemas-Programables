document.addEventListener("DOMContentLoaded", function () {

const image = document.querySelector(".centered-image");
const table = document.querySelector("table");
const headings = document.querySelectorAll("h2");

image.addEventListener("mouseenter", function () {
  image.style.transform = "scale(1.1)";
});

image.addEventListener("mouseleave", function () {
  image.style.transform = "scale(1)";
});

const rows = table.querySelectorAll("tr");
rows.forEach((row, index) => {
  row.addEventListener("mouseover", function () {
    if (index % 2 === 0) {
      row.style.backgroundColor = "#f2f2f2"; 
    } else {
      row.style.backgroundColor = "#e0e0e0"; 
    }
  });

  row.addEventListener("mouseout", function () {
    row.style.backgroundColor = ""; 
  });
});

headings.forEach((heading) => {
  heading.addEventListener("mouseover", function () {
    heading.style.color = "#007BFF"; 
  });

  heading.addEventListener("mouseout", function () {
    heading.style.color = ""; 
  });
});
  });
  