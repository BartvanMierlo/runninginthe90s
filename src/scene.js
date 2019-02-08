// Create scene
var scene = new THREE.Scene();

var imgDir = "assets/img/";

// Create camera
var camera = new THREE.PerspectiveCamera(
	75, // fov — Camera frustum vertical field of view.
	window.innerWidth / window.innerHeight, // aspect — Camera frustum aspect ratio.
	0.1, // near — Camera frustum near plane.
	5000); // far — Camera frustum far plane. 

// Create renderer
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Create meshes


var geometry = new THREE.BoxGeometry(1, 1, 1);
var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhongMaterial({ color: 0xff69b4, shininess: 10 });


var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry2, material);




cube2.position.x = 10;

scene.add(cube)
scene.add(cube2);
var tree = new Tree(20,-10,20);
tree.createTrunk();
tree.createCanopy();
tree.createApples();
tree.render();

camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 5;
renderer.render(scene, camera);


//Skybox
//Load skybox images
var directions = [imgDir + "posx.jpg", imgDir + "negx.jpg", imgDir + "posy.jpg", imgDir + "negy.jpg", imgDir + "posz.jpg", imgDir + "negz.jpg"];
var materialArray = [];
for (var i = 0; i < 6; i++) {
	materialArray.push(
		new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture(directions[i]),
			side: THREE.BackSide
		})
	);
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





