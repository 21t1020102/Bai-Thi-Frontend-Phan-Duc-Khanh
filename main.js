const title = document.querySelectorAll(".title");
const description = document.querySelectorAll(".description");

for (let i = 0; i < title.length; i++) {
  title[i].onclick = function () {
    if (description[i].style.display === "none") {
      description[i].style.display = "block";
    } else {
      description[i].style.display = "none";
    }
  };
}