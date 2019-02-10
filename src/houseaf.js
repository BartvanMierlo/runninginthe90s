class HouseAf {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.houseScale = 10;
    }

    createLeftWall(){
        var houseGeometry = new THREE.BoxGeometry(this.houseScale*3, this.houseScale*5, this.houseScale/10)
        var houseWallGeometry2 = new THREE.BoxGeometry(this.houseScale, this.houseScale*2.5, this.houseScale/10)
        var texture = new THREE.TextureLoader().load( imgDir + "houseaf/brick1.jpg", function(texture){
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 2.5;
        } );
 

        //triangle 
        var houseMaterial = new THREE.MeshPhongMaterial({map: texture, shininess: 10});
        var triangleBit = new THREE.Shape();
        triangleBit.moveTo(this.x-(this.houseScale/2), this.y, this.z);
        triangleBit.lineTo(this.x+(this.houseScale*3), this.y+(this.houseScale*2.7), this.z);
        triangleBit.lineTo(this.x+(this.houseScale*6.5), this.y, this.z);
        triangleBit.lineTo(this.x-(this.houseScale/2), this.y, this.z);

        var geometry = new THREE.ShapeGeometry( triangleBit );
        var meshT = new THREE.Mesh( geometry, houseMaterial ) ;
        meshT.rotation.y = -Math.PI/2;
        meshT.position.y = this.y+(this.houseScale*3.5);
        meshT.position.x = this.x-(this.houseScale*1.5);
        meshT.position.z = this.z-(this.houseScale*5.5);
        this.mesh.add(meshT);

        var wall = new THREE.Mesh(houseGeometry, houseMaterial);
        var wall2 = new THREE.Mesh(houseGeometry, houseMaterial);
        var wall3 = new THREE.Mesh(houseWallGeometry2, houseMaterial);
        var wall4 = new THREE.Mesh(houseWallGeometry2, houseMaterial);
        wall.rotation.y = Math.PI/2;
        wall.position.x = this.x-(this.houseScale*1.5);
        wall.position.y = this.y;
        wall.position.z = this.z-(this.houseScale*1.5);

        wall2.rotation.y = Math.PI/2;
        wall2.position.x = this.x - (this.houseScale*1.5);
        wall2.position.y = this.y;
        wall2.position.z = this.z- (this.houseScale*5.5);
        
        wall3.rotation.y = Math.PI/2;
        wall3.position.x = this.x - (this.houseScale*1.5);
        wall3.position.y = this.y + (this.houseScale*1.25);
        wall3.position.z = this.z - (this.houseScale*3.5);
        
        wall4.rotation.y = Math.PI/2;
        wall4.position.x = this.x - (this.houseScale*1.5);
        wall4.position.y = this.y - (this.houseScale*2);
        wall4.position.z = this.z - (this.houseScale*3.5);
        wall4.scale.set(1,0.4,1);

        this.mesh.add(wall);
        this.mesh.add(wall2);
        this.mesh.add(wall3);
        this.mesh.add(wall4);
    }

    createRightWall(){
        var houseGeometry = new THREE.BoxGeometry(this.houseScale*3, this.houseScale*5, this.houseScale/10)
        var houseWallGeometry2 = new THREE.BoxGeometry(this.houseScale, this.houseScale*2.5, this.houseScale/10)
        var texture = new THREE.TextureLoader().load(imgDir + "houseaf/brick1.jpg", function(texture){
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 2.5;
        } );

        var houseMaterial = new THREE.MeshPhongMaterial({map: texture, shininess: 10});

        var triangleBit = new THREE.Shape();
        triangleBit.moveTo(this.x-(this.houseScale/2), this.y, this.z);
        triangleBit.lineTo(this.x+(this.houseScale*3), this.y+(this.houseScale*2.7), this.z);
        triangleBit.lineTo(this.x+(this.houseScale*6.5), this.y, this.z);
        triangleBit.lineTo(this.x-(this.houseScale/2), this.y, this.z);

        var geometry = new THREE.ShapeGeometry( triangleBit );
        var meshT = new THREE.Mesh( geometry, houseMaterial ) ;
        meshT.rotation.y = Math.PI/2;
        meshT.position.y = this.y+(this.houseScale*3.5);
        meshT.position.x = this.x+(this.houseScale*5.5);
        meshT.position.z = this.z-(this.houseScale*1.5);
        this.mesh.add(MeshT);


        var wall = new THREE.Mesh(houseGeometry, houseMaterial);
        var wall2 = new THREE.Mesh(houseGeometry, houseMaterial);
        var wall3 = new THREE.Mesh(houseWallGeometry2, houseMaterial);
        var wall4 = new THREE.Mesh(houseWallGeometry2, houseMaterial);
        wall.rotation.y = Math.PI/2;
        wall.position.x = this.x + (this.houseScale*5.5);
        wall.position.y = this.y;
        wall.position.z = this.z-(this.houseScale*1.5);

        wall2.rotation.y = Math.PI/2;
        wall2.position.x = this.x + (this.houseScale*5.5);
        wall2.position.y = this.y;
        wall2.position.z = this.z- (this.houseScale*5.5);
        
        wall3.rotation.y = Math.PI/2;
        wall3.position.x = this.x + (this.houseScale*5.5);
        wall3.position.y = this.y + (this.houseScale*1.25);
        wall3.position.z = this.z - (this.houseScale*3.5);
        
        wall4.rotation.y = Math.PI/2;
        wall4.position.x = this.x + (this.houseScale*5.5);
        wall4.position.y = this.y - (this.houseScale*2);
        wall4.position.z = this.z - (this.houseScale*3.5);
        wall4.scale.set(1,0.4,1);

        this.mesh.add(wall);
        this.mesh.add(wall2);
        this.mesh.add(wall3);
        this.mesh.add(wall4);
    }

    createFront(){
        var houseGeometry = new THREE.BoxGeometry(this.houseScale*3, this.houseScale*5, this.houseScale/10)
        var houseWallGeometry2 = new THREE.BoxGeometry(this.houseScale, this.houseScale*3, this.houseScale/10)
        var texture = new THREE.TextureLoader().load( imgDir + "houseaf/brick1.jpg", function(texture){
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 2.5;
        } );
        var houseMaterial = new THREE.MeshPhongMaterial({map: texture, shininess: 10});
        var wall = new THREE.Mesh(houseGeometry, houseMaterial);
        var wall2 = new THREE.Mesh(houseGeometry, houseMaterial);
        var wall3 = new THREE.Mesh(houseWallGeometry2, houseMaterial);
        wall.position.x = this.x;
        wall.position.y = this.y;
        wall.position.z = this.z;
        wall2.position.x = this.x + (this.houseScale*4);
        wall2.position.y = this.y;
        wall2.position.z = this.z;
        wall3.position.x = this.x + (this.houseScale*2);
        wall3.position.y = this.y + (this.houseScale);
        wall3.position.z = this.z;
        
        this.mesh.add(wall);
        this.mesh.add(wall2);
        this.mesh.add(wall3);
    }

    createBack(){
        var houseGeometry = new THREE.BoxGeometry(this.houseScale*7, this.houseScale*5, this.houseScale/10);
        var texture = new THREE.TextureLoader().load( imgDir + "houseaf/brick1.jpg", function(texture){
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 2.5;
        } );


        var houseMaterial = new THREE.MeshPhongMaterial({map: texture, shininess: 10});
        var wall = new THREE.Mesh(houseGeometry, houseMaterial);
        wall.position.x = this.x + (this.houseScale*2);
        wall.position.y = this.y;
        wall.position.z = this.z - (this.houseScale*7);
        
        this.mesh.add(wall);
    }
    createRoof(){
        var houseGeometry = new THREE.BoxGeometry(this.houseScale*7, this.houseScale*5, this.houseScale/10);
        var texture = new THREE.TextureLoader().load( imgDir + "houseaf/roof1.jpg", function(texture){
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 2.5;
            texture.repeat.y = 2.5;
        } );
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 4, 4 );
        var houseMaterial = new THREE.MeshPhongMaterial({map: texture, shininess: 10});

        var roofElement1 = new THREE.Mesh(houseGeometry, houseMaterial);
        var roofElement2 = new THREE.Mesh(houseGeometry, houseMaterial);
        roofElement1.rotation.x = Math.PI/1.4;
        roofElement1.position.z = this.z - (this.houseScale*1.5);
        roofElement1.position.y = this.y + (this.houseScale*3.7);
        roofElement1.position.x = this.x + (this.houseScale*2);

        roofElement2.rotation.x = -Math.PI/1.4;
        roofElement2.position.z = this.z - (this.houseScale*5.5);
        roofElement2.position.y = this.y + (this.houseScale*3.7);
        roofElement2.position.x = this.x + (this.houseScale*2);

        this.mesh.add(roofElement1);
        this.mesh.add(roofElement2);
    }

    render(){
        this.createFront();
        this.createBack();
        this.createLeftWall();
        this.createRightWall();
        this.createRoof();
    }
}