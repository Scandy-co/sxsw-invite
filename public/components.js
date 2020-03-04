// used to add hyperlink to entity on touch event
// example: navigate-on-click="url: https://goo.gl/maps/gLu1z8swuQufAyzV8"
AFRAME.registerComponent("navigate-on-click", {
  schema: {
    url: { default: "" }
  },
  init: function() {
    var data = this.data;
    var el = this.el;

    el.addEventListener("click", function() {
      window.open(data.url, "_blank");
    });
  }
});

// PORTAL

// This component gives the invisible hider walls the property they need
AFRAME.registerComponent("hider-material", {
  init: function() {
    const mesh = this.el.getObject3D("mesh");
    mesh.material.colorWrite = false;
  }
});

// This component hides and shows certain elements as the camera moves
AFRAME.registerComponent("portal", {
  schema: {
    width: { default: 4 },
    height: { default: 8 },
    depth: { default: 1 }
  },
  init: function() {
    this.camera = document.getElementById("camera");
    this.contents = document.getElementById("portal-contents");
    this.walls = document.getElementById("hider-walls");
    this.portalWall = document.getElementById("portal-wall");
    this.portalWorld = document.getElementById("portal-world");
    this.isInPortalSpace = false;
    this.wasOutside = true;

    const ground = document.querySelector(".environmentGround");
    console.log(ground);

    let scene = this.el.sceneEl;
    scene.addEventListener("realityready", () => {
      // Hide loading UI
      document.querySelector(".hud").style.display = "block";
    });
  },
  tick: function() {
    const position = this.camera.object3D.position;
    const isOutside = position.z < 15;
    const withinPortalBounds =
      position.y < this.data.height &&
      Math.abs(position.x) < this.data.width / 2;

    if (this.wasOutside != isOutside && withinPortalBounds) {
      this.isInPortalSpace = !isOutside;
    }

    this.contents.object3D.visible = this.isInPortalSpace || isOutside;
    this.walls.object3D.visible = !this.isInPortalSpace && isOutside;
    this.portalWall.object3D.visible = this.isInPortalSpace && !isOutside;
    this.portalWorld.object3D.visible = this.isInPortalSpace;

    this.wasOutside = isOutside;
  }
});

AFRAME.registerComponent("alpha-test", {
  dependencies: ["material"],

  init: function() {
    var material = this.el.getObject3D("mesh").material;
    material.alphaTest = 0.5;
    material.needsUpdate = true;
  }
});

document.querySelector("a-scene").addEventListener("loaded", function() {
  let ground = document.querySelector(".environmentGround");
  ground.setAttribute("position", "0 -0.775 0");
});
