// Create scene
var scene = new THREE.Scene();
var imgDir = "assets/img/";
// Create camera
var camera = new THREE.PerspectiveCamera(75, // fov — Camera frustum vertical field of view.
window.innerWidth / window.innerHeight, // aspect — Camera frustum aspect ratio.
0.1, // near — Camera frustum near plane.
5000); // far — Camera frustum far plane. 
// Create renderer
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//Create meshes
var treeMeshArray = [];
var leafGeometry = new THREE.SphereGeometry(8, 32, 32);
var appleGeometry = new THREE.SphereGeometry(1, 15, 15);
var cylinderGeometry1 = new THREE.CylinderGeometry(2, 2, 50, 32);
var geometry = new THREE.BoxGeometry(1, 1, 1);
var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhongMaterial({ color: 0xff69b4, shininess: 10 });
var treeBaseMaterial = new THREE.MeshPhongMaterial({ color: 0x53290b, shininess: 10 });
var treeLeafMaterial = new THREE.MeshPhongMaterial({ color: 0x004c00, shininess: 10 });
var appleMaterial = new THREE.MeshPhongMaterial({ color: 0xff1919, shininess: 10 });
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry2, material);
var cylinder = new THREE.Mesh(cylinderGeometry1, treeBaseMaterial);
cylinder.position.x = 30;
cylinder.position.y = -10;
cylinder.position.z = 43;
treeMeshArray.push(cylinder);
for (var i = 0; i < 10; i++) {
    var randX = THREE.Math.randInt(-4, 4);
    var randY = THREE.Math.randInt(-4, 4);
    var randZ = THREE.Math.randInt(-4, 4);
    var leaf = new THREE.Mesh(leafGeometry, treeLeafMaterial);
    leaf.position.x += randX + 30;
    leaf.position.y += randY + 15;
    leaf.position.z += randZ + 43;
    treeMeshArray.push(leaf);
}
for (var i = 0; i < 50; i++) {
    var apple = new THREE.Mesh(appleGeometry, appleMaterial);
    apple.position.x += THREE.Math.randInt(-7, 7) + 30;
    apple.position.y += THREE.Math.randInt(-7, 7) + 15 - 2;
    apple.position.z += THREE.Math.randInt(-7, 7) + 43;
    treeMeshArray.push(apple);
}
cube2.position.x = 10;
scene.add(cube);
scene.add(cube2);
scene.add(cylinder);
for (var i = 0; i < treeMeshArray.length; i++) {
    scene.add(treeMeshArray[i]);
}
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 5;
renderer.render(scene, camera);
//Skybox
//Load skybox images
var directions = [imgDir + "posx.jpg", imgDir + "negx.jpg", imgDir + "posy.jpg", imgDir + "negy.jpg", imgDir + "posz.jpg", imgDir + "negz.jpg"];
var materialArray = [];
for (var i = 0; i < 6; i++) {
    materialArray.push(new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture(directions[i]),
        side: THREE.BackSide
    }));
}
//create skybox
var skyGeometry = new THREE.CubeGeometry(5000, 5000, 5000);
var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(skyBox);
//Lighting
var ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);
var light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(0, 0, 1);
scene.add(light);
controls = new THREE.OrbitControls(camera);
controls.autoRotate = false;
controls.autoRotateSpeed = 2;
controls.noKeys = true;
var clock = new THREE.Clock();
var counter = 2100;
var render = function () {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
};
render();
//# sourceMappingURL=bundle.js.map