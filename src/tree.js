class Tree {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.meshArray = [];
    }

    createTrunk(){
        var cylinderGeometry1 = new THREE.CylinderGeometry(2, 2, 50, 32);
        var treeBaseMaterial = new THREE.MeshPhongMaterial({ color: 0x53290b, shininess: 10 });
        var cylinder = new THREE.Mesh(cylinderGeometry1, treeBaseMaterial);
        cylinder.position.x = this.x;
        cylinder.position.y = this.y;
        cylinder.position.z = this.z;
        this.meshArray.push(cylinder);
    }

    createCanopy(){
        var leafGeometry = new THREE.SphereGeometry(8, 32, 32);
        var treeLeafMaterial = new THREE.MeshPhongMaterial({ color: 0x004c00, shininess: 10 });
        for (var i = 0; i < 10; i++) {
            var randX = THREE.Math.randInt(-4, 4);
            var randY = THREE.Math.randInt(-4, 4);
            var randZ = THREE.Math.randInt(-4, 4);
            var leaf = new THREE.Mesh(leafGeometry, treeLeafMaterial);
            leaf.position.x += randX + this.x;
            leaf.position.y += randY + this.y+15;
            leaf.position.z += randZ + this.z;
            this.meshArray.push(leaf);
        }
    }

    createApples(){
        var appleGeometry = new THREE.SphereGeometry(1, 15, 15);
        var appleMaterial = new THREE.MeshPhongMaterial({ color: 0xff1919, shininess: 10 });
        for (var i = 0; i < 50; i++) {
        	var apple = new THREE.Mesh(appleGeometry, appleMaterial);
        	apple.position.x += THREE.Math.randInt(-7, 7) + this.x;
        	apple.position.y += THREE.Math.randInt(-7, 7) + this.y + 13;
        	apple.position.z += THREE.Math.randInt(-7, 7) + this.z;
        	this.meshArray.push(apple);
        }
    }

    render(){
        for (var i = 0; i < this.meshArray.length; i++) {
            scene.add(this.meshArray[i]);
        }

    }
}