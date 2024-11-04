window.addEventListener("DOMContentLoaded", () => {
  var ggbApp = new GGBApplet(
    {
      appName: "graphing",
      material_id: "wnM9wCvn",
      width: 600,
      height: 400,
      showToolBar: false,
      showAlgebraInput: true,
      showMenuBar: false,
    },
    true
  );
  ggbApp.inject("ggb-element");
});
