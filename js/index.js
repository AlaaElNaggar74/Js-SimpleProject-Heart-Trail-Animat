let macon = document.getElementById("macon");
let header = document.getElementById("header");

macon.addEventListener("click", (e) => {
  let rands = (Math.random() * 7).toFixed(3);
  header.style.display = "none";
  let newIcon = document.createElement("i");
  newIcon.classList.add("fa-solid", "fa-heart");
  newIcon.style.fontSize = `${rands}rem`;
  newIcon.style.left = e.clientX + "px";
  newIcon.style.top = e.clientY + "px";
  macon.style.cursor = "pointer";
  header.classList.add("active");
  setTimeout(() => {
    newIcon.style.display = "none";
  }, 5000);
  macon.appendChild(newIcon);
});

header.addEventListener("click", () => {
  header.classList.add("active");
});
