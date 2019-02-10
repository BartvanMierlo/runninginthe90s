class HuisAf {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.meshArray = [];
    }

    createBase(){
        var houseGeometry = new THREE.BoxGeometry(10, 10, 1)
        var houseMaterial = new THREE.MeshPhongMaterial({color: 0xff69b4, shininess: 10});
        var wall = new THREE.Mesh(houseGeometry, houseMaterial);
        wall.position.x = this.x;
        wall.position.y = this.y;
        wall.position.z = this.z;
        this.meshArray.push(wall);
    }
    createRoof(){

    
    }

    render(){
        for(var i = 0; i< this.meshArray.length;i++){
            scene.add(this.meshArray[i]);
        }
    }
}