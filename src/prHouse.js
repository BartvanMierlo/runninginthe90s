class PrHouse {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.geometry = new THREE.BoxGeometry(10, 10, 1);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    buildWalls() {

    }

    buildRoof() {

    }

    render() {
        scene.add(this.mesh);
        this.mesh.position.x = this.x;
        this.mesh.position.y = this.y;
        this.mesh.position.z = this.z;
    }
}