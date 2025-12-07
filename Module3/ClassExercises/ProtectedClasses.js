class Laptop {
    #numberofcpuFans = 1;
  _hardDiskType = "HDD"; // protected property, meant to be internal
  constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() {
    return this._hardDiskType;
    this,#log();
  } // public method to access protected property
  getCPUFans() {
    return this.#numberofcpuFans;
  }
  #log() {
    console.log(`cpu fans ${this.#numberofcpuFans} hard disk type ${this._hardDiskType} brand ${this.brand}`)
  }
  getBothData() {
    return new [this.#numberofcpuFans, this._hardDiskType]();
  }
}

class chromebook extends Laptop {
    getSpecs() {
        this.#numberofcpuFans = 2 // child cannot even modify or access it, because it's private
    }
}

let macbook = new Laptop("Apple");

console.log(macbook.getHDiskType());
console.log(macbook._hardDiskType);
// console.log(macbook.#numberofcpuFans); --> will not work
console.log(macbook.getCPUFans());
console.log(macbook.getBothData());