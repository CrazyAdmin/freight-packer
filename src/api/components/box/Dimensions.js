class Dimensions {
    constructor(width, length, height){
        if(width === undefined) width = 0;
        if(length === undefined) length = 0;
        if(height === undefined) height = 0;
        
        this.Set(width, length, height);
        this._vec3 = new THREE.Vector3();
    }

    Set(width, length, height){
        this.width = width;
        this.length = length;
        this.height = height;
    }

    /**
     * Returns a THREE.Vector3 representation of the dimensions
     * Beware of ordering: y=height, z=length and x=width
     */
    get vec3(){
        return this._vec3.set(this.width, this.height, this.length);
    }

    get volume(){
        return this.width * this.height * this.length;
    }

    Clone(){
        var dimensions = new Dimensions(this.width, this.length, this.height);
        return dimensions;
    }

    ToString(){
        return this.width.toFixed(2) + 'x' + this.length.toFixed(2) + 'x' + this.height.toFixed(2);
    }

    toJSON(){
        return {
            type: 'Dimensions',
            width: this.width,
            length: this.length,
            height: this.height
        };
    }
}

export default Dimensions;