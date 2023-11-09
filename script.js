const search = document.querySelector(".search");
const btn = document.querySelector(".search .btn");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
});

document.onclick = function (e) {
  if (!search.contains(e.target) || e.target.classList.contains("active")) {
    search.classList.remove("active");
  }
};
