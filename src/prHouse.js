class PrHouse {
    constructor(x, y, z, size = 10) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.mesh = new THREE.Group();
        this.size = size;
    }

    buildWalls() {
        this.buildNorthWalls();
        this.buildEastWalls();
        this.buildSouthWalls();
        this.buildWestWalls();
    }

    buildNorthWalls() {
        // North
        const wTexN1 = new THREE.TextureLoader().load(imgDir + 'prHouse/wall.jpg', function (texture) {
            // Making the texture repeat on the mesh
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 1;
            texture.repeat.y = 1;
        });
        const wMatN1 = new THREE.MeshPhongMaterial({ map: wTexN1, shininess: 0 });
        const wGeomN1 = new THREE.BoxGeometry(this.size, this.size, this.size / 50);
        const wGeomN2 = new THREE.BoxGeometry(this.size * 2.5, this.size, this.size / 50);
        const wTexN2 = new THREE.TextureLoader().load(imgDir + 'prHouse/wall.jpg', function (texture) {
            // Making the texture repeat on the mesh
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 1;
        });
        const wMatN2 = new THREE.MeshPhongMaterial({ map: wTexN2, shininess: 0 });

        var wMeshN1 = new THREE.Mesh(wGeomN1, wMatN1);
        wMeshN1.position.set(-this.size * 0.75, this.size * 0.5, this.size * 1.25);
        this.mesh.add(wMeshN1);

        var wMeshN2 = new THREE.Mesh(wGeomN1, wMatN1);
        wMeshN2.position.set(this.size * 0.75, this.size * 0.5, this.size * 1.25);
        this.mesh.add(wMeshN2);

        var wMeshN3 = new THREE.Mesh(wGeomN2, wMatN2);
        wMeshN3.position.set(0, this.size * 1.5, this.size * 1.25);
        this.mesh.add(wMeshN3);
    }

    buildEastWalls() {
        // East
        const wTexE1 = new THREE.TextureLoader().load(imgDir + 'prHouse/wall.jpg', function (texture) {
            // Making the texture repeat on the mesh
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 1;
        });
        const wMatE1 = new THREE.MeshPhongMaterial({ map: wTexE1, shininess: 0 });
        const wGeomE1 = new THREE.BoxGeometry(this.size / 50, this.size, this.size * 2.5);
        var wMeshE1 = new THREE.Mesh(wGeomE1, wMatE1);
        wMeshE1.position.set(this.size * 1.25, this.size * 0.5, 0);
        this.mesh.add(wMeshE1);

        var wMeshE2 = new THREE.Mesh(wGeomE1, wMatE1);
        wMeshE2.position.set(this.size * 1.25, this.size * 1.5, 0);
        this.mesh.add(wMeshE2);
    }

    buildSouthWalls() {
        // South
        const wTexS1 = new THREE.TextureLoader().load(imgDir + 'prHouse/wall.jpg', function (texture) {
            // Making the texture repeat on the mesh
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 1;
        });
        const wMatS1 = new THREE.MeshPhongMaterial({ map: wTexS1, shininess: 0 });
        const wGeomS1 = new THREE.BoxGeometry(this.size * 2.5, this.size, this.size / 50);
        var wMeshS1 = new THREE.Mesh(wGeomS1, wMatS1);
        wMeshS1.position.set(0, this.size * 0.5, -this.size * 1.25);
        this.mesh.add(wMeshS1);

        var wMeshS2 = new THREE.Mesh(wGeomS1, wMatS1);
        wMeshS2.position.set(0, this.size * 1.5, -this.size * 1.25);
        this.mesh.add(wMeshS2);
    }

    buildWestWalls() {
        // West
        const wTexW1 = new THREE.TextureLoader().load(imgDir + 'prHouse/wall.jpg', function (texture) {
            // Making the texture repeat on the mesh
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 1;
        });
        const wMatW1 = new THREE.MeshPhongMaterial({ map: wTexW1, shininess: 0 });
        const wGeomE1 = new THREE.BoxGeometry(this.size / 50, this.size, this.size * 2.5);
        var wMeshW1 = new THREE.Mesh(wGeomE1, wMatW1);
        wMeshW1.position.set(-this.size * 1.25, this.size * 0.5, 0);
        this.mesh.add(wMeshW1);

        var wMeshW2 = new THREE.Mesh(wGeomE1, wMatW1);
        wMeshW2.position.set(-this.size * 1.25, this.size * 1.5, 0);
        this.mesh.add(wMeshW2);
    }

    buildFloor() {
        // Floor
        const fTex = new THREE.TextureLoader().load(imgDir + 'prHouse/floor.jpg', function (texture) {
            // Making the texture repeat on the mesh
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 2.5;
        });

        const fMat = new THREE.MeshPhongMaterial({ map: fTex, shininess: 0 });
        const fGeom = new THREE.BoxGeometry(this.size * 2.5, this.size / 50, this.size * 2.5);

        var fMesh = new THREE.Mesh(fGeom, fMat);
        this.mesh.add(fMesh);
    }

    buildRoof() {
        // Ceiling
        const cTex = new THREE.TextureLoader().load(imgDir + 'prHouse/ceiling.png', function (texture) {
            // Making the texture repeat on the mesh
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 2.5;
        });

        const cMat = new THREE.MeshPhongMaterial({ map: cTex, shininess: 0 });
        const cGeom = new THREE.BoxGeometry(this.size * 2.5, this.size / 50, this.size * 2.5);

        var cMesh = new THREE.Mesh(cGeom, cMat);
        cMesh.position.set(0, this.size * 2, 0);
        this.mesh.add(cMesh);

        // Roof
        const rTex = new THREE.TextureLoader().load(imgDir + 'prHouse/roof.jpg', function (texture) {
            // Making the texture repeat on the mesh
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 4;
            texture.repeat.y = 2;
        });

        const rMat = new THREE.MeshPhongMaterial({ map: rTex, shininess: 0 });

        const rGeom = new THREE.CylinderGeometry(0, this.size * 2, this.size * 2, 4);
        rGeom.rotateY(Math.PI / 4);

        var rMesh = new THREE.Mesh(rGeom, rMat);
        rMesh.position.set(0, this.size * 3, 0);
        this.mesh.add(rMesh);
    }

    buildDoor() {
        // Door
        const dMat = new THREE.MeshStandardMaterial({ color: '#f6feff', roughness: 0, metalness: 0.5, opacity: 0.5, transparent: true });
        const dGeom = new THREE.BoxGeometry(this.size * 0.5, this.size, this.size / 50);
        var dMesh = new THREE.Mesh(dGeom, dMat);
        dMesh.position.set(this.x, this.y + this.size * 0.5, this.z + this.size * 1.25);

        scene.add(dMesh);
    }

    render() {
        this.buildWalls();
        this.buildFloor();
        this.buildRoof();
        this.buildDoor();

        this.mesh.position.set(this.x, this.y, this.z);
        scene.add(this.mesh);

    }
}