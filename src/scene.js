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

// Add plane
var plane = new Plane();
plane.render();

// Add prHouse
var prHouse = new PrHouse(-10, 0, 0, 25);
prHouse.render();

// Add treeline
for (i = 0; i < 10; i++) {
	var tree = new Tree(50, 0, 20 + i * 20);
	tree.render();
}

// Add car
var car = new Car();
car.render();

// Add van
var van = new Van();
van.render();

// Add house 1
var house = new HouseAf(50, 0, 0);
house.render();

camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 5;

renderer.render(scene, camera);


// Skybox
// Load skybox images
var directions = [imgDir + "posx.tga", imgDir + "negx.tga", imgDir + "posy.tga", imgDir + "negy.tga", imgDir + "posz.tga", imgDir + "negz.tga"];
var materialArray = [];
var tLoader = new THREE.TGALoader();
for (var i = 0; i < 6; i++) {
	var texture = tLoader.load(directions[i]);

	materialArray.push(
		new THREE.MeshBasicMaterial({
			map: texture,
			side: THREE.BackSide
		})
	);
}

// create skybox
var skyGeometry = new THREE.CubeGeometry(5000, 5000, 5000);
var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(skyBox);

// Lighting
var ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);
var light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(2000, 2000, 2000);
scene.add(light);


// OrbitControls
controls = new THREE.OrbitControls(camera);
controls.autoRotate = false;
controls.autoRotateSpeed = 2;
controls.keys = {
	LEFT: 37, //left arrow
	UP: 38, // up arrow
	RIGHT: 39, // right arrow
	BOTTOM: 40 // down arrow
}

var render = function () {
	requestAnimationFrame(render);
	controls.update();
	car.update();
	van.update();

	renderer.render(scene, camera);
};
render();





