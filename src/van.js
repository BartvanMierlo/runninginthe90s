var vanMesh;

class Van {
    constructor(x, y) {
        this.speed = 50;
        this.turnSpeed = 0.1;
        this.velocity = 0;
    }

    render() {
        var loader = new THREE.ColladaLoader();
        loader.load('assets/models/van/model.dae', function (collada) {
            
            scene.add(collada.scene);
            vanMesh = collada.scene;
            vanMesh.scale.set(1,1,1);
        });
    }

    calcVelocity() {
        let angle = vanMesh.rotation.z + Math.PI;
        vanMesh.position.x = Math.sin(angle) * this.speed;
        vanMesh.position.z = Math.cos(angle) * this.speed;
    }

    update() {
        if (vanMesh) {
            this.calcVelocity();
            cube.position.x = vanMesh.position.x;
            cube.position.z = vanMesh.position.z;

            // carMesh.position.z = this.angle;
            vanMesh.rotateZ(-this.turnSpeed * 0.5);
        }
    }
}