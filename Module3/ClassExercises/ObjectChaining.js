let pizza = {
    mixdough() {
        console.log("mixing dough");
        return this;
    },
    putinoven() {
        console.log("inside the oven");
        return this;
    },
    waitforready() {
        console.log("waiting for 30 mins");
    }
}

pizza.mixdough().putinoven().waitforready(); // method chaining