document.addEventListener("DOMContentLoaded", function () {
  const buttonNo = document.getElementById("button-no");

  buttonNo.addEventListener("click", function () {
    const image = document.querySelector("img");

    const randomNumber = Math.floor(Math.random() * 10);

    switch (randomNumber) {
      case 0:
        randomSentences = `¡Sal conmigo, te sorprenderé!`;
        image.src = "../img/send-kisses.gif";
        break;
      case 1:
        randomSentences = `¡Solo di sí, y lo disfrutaremos!`;
        image.src = "../img/sad.gif";
        break;
      case 2:
        randomSentences = `¡Te prometo una velada única!`;
        image.src = "../img/send-heart.gif";
        break;
      case 3:
        randomSentences = `¡Hazlo, no te arrepentirás!`;
        image.src = "../img/sigh.gif";
        break;
      case 4:
        randomSentences = `¡Piensalo de nuevo!`;
        image.src = "../img/fall-down.gif";
        break;
      case 5:
        randomSentences = `¡Vamos, di que si!`;
        image.src = "../img/lie-down.gif";
        break;
      case 6:
        randomSentences = `¡Te prometo que será inolvidable !`;
        image.src = "../img/please.gif";
        break;
      case 7:
        randomSentences = `¡Una cita, mil sonrisas!`;
        image.src = "../img/give-flower.gif";
        break;
      case 8:
        randomSentences = `¡Salgamos, la pasaremos genial!`;
        image.src = "../img/lying.gif";
        break;
      case 9:
        randomSentences = `¿Qué dices? ¿Nos aventuramos?`;
        image.src = "../img/howl.gif";
        break;
      default:
        randomSentences = `¡Un sí, y te llevaré a lugares increíbles!`;
        image.src = "../img/move-ear.gif";
        break;
    }

    buttonNo.innerText = `${randomSentences}`;
  });
});
