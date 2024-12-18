const images = [];
function preload() {
  for (let i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "/manifesto/background_nyan_cat.png",
  "/top_section/middle_background.png",
  "/top_section/BG_TOP2.png",
  "/fug_media/fug_media_background2.png"
)