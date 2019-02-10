var carMesh;

class Car {
    constructor(x, y) {
        this.speed = 50;
        this.turnSpeed = 0.1;
        this.velocity = 0;
    }

    render() {
        var loader = new THREE.ColladaLoader();
        loader.load('assets/models/car/model.dae', function (collada) {
            scene.add(collada.scene);
            carMesh = collada.scene;
        });
    }

    calcVelocity() {
        let angle = carMesh.rotation.z + Math.PI;
        carMesh.position.x = Math.sin(angle) * this.speed;
        carMesh.position.z = Math.cos(angle) * this.speed;
    }

    update() {
        if (carMesh) {
            this.calcVelocity();
            cube.position.x = carMesh.position.x;
            cube.position.z = carMesh.position.z;

            // carMesh.position.z = this.angle;
            carMesh.rotateZ(-this.turnSpeed * 0.5);
        }
    }
}