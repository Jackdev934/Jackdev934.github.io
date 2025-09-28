document.getElementById("drawBtn").onclick = function () {
  const scene = document.getElementById("scene");
  scene.innerHTML = ""; 

  // time
  const hour = new Date().getHours();
  let isNight = (hour >= 18 || hour < 6);

  // sun/moon
  document.body.style.background = isNight ? "#000" : "#87CEEB";
  let skyObj = document.createElement("div");
  skyObj.className = isNight ? "moon" : "sun";
  scene.appendChild(skyObj);

  // clouds
  for (let i = 0; i < 6; i++) {
    let cloud = document.createElement("div"); 
    cloud.className = "cloud";
    cloud.style.top = Math.random() * 200 + "px";
    cloud.style.left = Math.random() * 80 + (i * 150) + "px";
    
    scene.appendChild(cloud);
  }

  // trees
  for (let i = 0; i < 6; i++) {
    let tree = document.createElement("div");
    tree.className = "tree";
    tree.style.left = (i * 150) + "px";

    let trunk = document.createElement("div");
    trunk.className = "trunk";

    let leaves = document.createElement("div");
    leaves.className = "leaves";

    tree.appendChild(trunk);
    tree.appendChild(leaves);
    scene.appendChild(tree);
  }
};
