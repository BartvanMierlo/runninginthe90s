var carMesh;

class Car {
    constructor() {

        this.speed = 50;
        this.turnSpeed = 0.1;
    }

    render() {
        var loader = new THREE.ColladaLoader();
        loader.load('assets/models/car/model.dae', function (collada) {
            scene.add(collada.scene);
            carMesh = collada.scene;
            carMesh.position.x = -100;
        });
    }

    calcVelocity() {
        let angle = carMesh.rotation.z + Math.PI;
        carMesh.position.x = Math.sin(angle) * this.speed - 150;
        carMesh.position.z = Math.cos(angle) * this.speed - 100;
    }

    update() {
        if (carMesh) {
            this.calcVelocity();
            carMesh.rotateZ(-this.turnSpeed * 0.5);
        }
    }
}