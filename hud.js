$(document).ready(function() {
  $(".button").on("mousedown", function() {
    var button = this;

    button.style.boxShadow = "none";
    button.style.transform = "scale(1.2)";

    if (this.className === "button button-menu") {
      $(".menuOptionsShader").addClass("reveal-menuOptionsShader");
      $(".button-shareSocial").addClass("reveal-shareSocial-button");
      $(".button-shareQR").addClass("reveal-shareQR-button");
      $(".button-expInfo").addClass("reveal-expInfo-button");
      $(".button-eventInfo").addClass("reveal-eventInfo-button");
      $(".menuOptionsShader").removeClass("hide-menuOptionsShader");
      $(".button-shareSocial").removeClass("hide-shareSocial-button");
      $(".button-shareQR").removeClass("hide-shareQR-button");
      $(".button-expInfo").removeClass("hide-expInfo-button");
      $(".button-eventInfo").removeClass("hide-eventInfo-button");

      setTimeout(function() {
        $(".button-menu").addClass("hide");
        $(".button-menu-close").removeClass("hide");
      }, 200);
    }

    if (this.className === "button button-menu-close") {
      $(".menuOptionsShader").removeClass("reveal-menuOptionsShader");
      $(".button-shareSocial").removeClass("reveal-shareSocial-button");
      $(".button-shareQR").removeClass("reveal-shareQR-button");
      $(".button-expInfo").removeClass("reveal-expInfo-button");
      $(".button-eventInfo").removeClass("reveal-eventInfo-button");
      $(".menuOptionsShader").addClass("hide-menuOptionsShader");
      $(".button-shareSocial").addClass("hide-shareSocial-button");
      $(".button-shareQR").addClass("hide-shareQR-button");
      $(".button-expInfo").addClass("hide-expInfo-button");
      $(".button-eventInfo").addClass("hide-eventInfo-button");

      setTimeout(function() {
        $(".button-menu").removeClass("hide");
        $(".button-menu-close").addClass("hide");
      }, 200);
    }

    setTimeout(function() {
      button.style.boxShadow = "2px 1px 12px 1px #0c51046b";
      button.style.transform = "scale(1)";
    }, 50);
  });
});

function handleShareClick() {
  const shareData = {
    text: "Come check out Scandy's 3D art installation!",
    url: "https://scandy-sxsw.glitch.me/"
  };

  window.navigator.share(shareData);
}
