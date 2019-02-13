var vanMesh;

class Van {
    constructor() {
        this.speed = 50;
        this.turnSpeed = 0.1;
        this.velocity = 0;
    }

    render() {
        var loader = new THREE.ColladaLoader();
        loader.load('assets/models/van/model.dae', function (collada) {
            var obj = new THREE.Object3D();
            scene.add(obj);
            obj.add(collada.scene);
            obj.scale.set(10,10,10);
            obj.rotateY(Math.PI/2);
            obj.position.y = 20;
            vanMesh = obj; 
        });
    }

    calcVelocity() {
        vanMesh.position.z += this.speed/10;
    }

    update() {
        if (vanMesh) {
            this.calcVelocity();
            vanMesh.rotateZ(this.turnSpeed);
        }
    }
}