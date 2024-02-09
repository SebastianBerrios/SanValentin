document.addEventListener("DOMContentLoaded", function () {
  const buttonSi = document.getElementById("button-si");
  const buttonNo = document.getElementById("button-no");
  const title = document.getElementById("title");

  buttonSi.addEventListener("click", function () {
    const image = document.querySelector("img");
    image.src = "../img/accept.gif";
    title.innerText = `¡Sabia que dirías que si! ¡Sera increíble!`;
    buttonNo.style.display = "none";
  });
});
