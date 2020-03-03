function bindClick(buttonEl) {
  const button = buttonEl;
  button.style.boxShadow = "none";
  button.style.transform = "scale(1.2)";

  if (button.className === "button button-menu") {
    document
      .querySelector(".menuOptionsShader")
      .classList.add("reveal-menuOptionsShader");
    document
      .querySelector(".button-shareSocial")
      .classList.add("reveal-shareSocial-button");
    document
      .querySelector(".button-shareQR")
      .classList.add("reveal-shareQR-button");
    document
      .querySelector(".button-expInfo")
      .classList.add("reveal-expInfo-button");
    document
      .querySelector(".button-eventInfo")
      .classList.add("reveal-eventInfo-button");
    document
      .querySelector(".menuOptionsShader")
      .classList.remove("hide-menuOptionsShader");
    document
      .querySelector(".button-shareSocial")
      .classList.remove("hide-shareSocial-button");
    document
      .querySelector(".button-shareQR")
      .classList.remove("hide-shareQR-button");
    document
      .querySelector(".button-expInfo")
      .classList.remove("hide-expInfo-button");
    document
      .querySelector(".button-eventInfo")
      .classList.remove("hide-eventInfo-button");

    setTimeout(function() {
      document.querySelector(".button-menu").classList.add("hide");
      document.querySelector(".button-menu-close").classList.remove("hide");
      document.querySelector(".menuOptionsContainer").style.display = "block";
    }, 200);
  }

  if (button.className === "button button-menu-close") {
    document
      .querySelector(".menuOptionsShader")
      .classList.remove("reveal-menuOptionsShader");
    document
      .querySelector(".button-shareSocial")
      .classList.remove("reveal-shareSocial-button");
    document
      .querySelector(".button-shareQR")
      .classList.remove("reveal-shareQR-button");
    document
      .querySelector(".button-expInfo")
      .classList.remove("reveal-expInfo-button");
    document
      .querySelector(".button-eventInfo")
      .classList.remove("reveal-eventInfo-button");
    document
      .querySelector(".menuOptionsShader")
      .classList.add("hide-menuOptionsShader");
    document
      .querySelector(".button-shareSocial")
      .classList.add("hide-shareSocial-button");
    document
      .querySelector(".button-shareQR")
      .classList.add("hide-shareQR-button");
    document
      .querySelector(".button-expInfo")
      .classList.add("hide-expInfo-button");
    document
      .querySelector(".button-eventInfo")
      .classList.add("hide-eventInfo-button");

    setTimeout(function() {
      document.querySelector(".button-menu").classList.remove("hide");
      document.querySelector(".button-menu-close").classList.add("hide");
      document.querySelector(".menuOptionsContainer").style.display = "none";
    }, 200);
  }

  setTimeout(function() {
    button.style.boxShadow = "2px 1px 12px 1px #0c51046b";
    button.style.transform = "scale(1)";
  }, 50);
}

function bindHudClickEvents() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach(b => b.addEventListener("click", () => bindClick(b)));
}

function hudInit() {
  bindHudClickEvents();
}

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  hudInit();
} else {
  document.addEventListener("DOMContentLoaded", hudInit);
}

function handleShareClick() {
  const shareData = {
    text: "Check out Scandy's 3D art installation!",
    url: "https://atx.scandy.co/"
  };

  window.navigator.share(shareData);
}
