class Plane {
    constructor() { }

    render() {
        const pGeom = new THREE.BoxGeometry(5000, 1, 5000);
        const pTex = new THREE.TextureLoader().load(imgDir + 'grass.png', function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 500;
            texture.repeat.y = 500;
        });
        const pMat = new THREE.MeshPhongMaterial({ shininess: 0, map: pTex });

        var pMesh = new THREE.Mesh(pGeom, pMat);
        scene.add(pMesh);
    }
}