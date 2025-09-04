class Car {
    constructor() {
      this.brand = null;
      this.model = null;
      this.year = null;
      this.engine = null;
      this.color = null;
      this.gps = null;
    }
  
    showDetails() {
      console.log(
        `${this.year} 
        ${this.brand} 
        ${this.model} 
        - Motor: ${this.engine}, 
        Cor: ${this.color}, 
        GPS: ${this.gps ? "Sim" : "Não"}`
      );
    }
}

class CarBuilder {
    constructor () {
        this.car = new Car();
    }

    setBrand(brand) {
        this.car.brand = brand;
        return this;
    }

    setModel(model) {
        this.car.model = model;
        return this;
    }

    setYear(year) {
        this.car.year = year;
        return this;
    }

    setEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    setColor(color) {
        this.car.color = color;
        return this;
    }

    setGps(gps) {
        this.car.gps = gps;
        return this;
    }
}

class CarDirector {
    static buildRacingCar() {
        return new CarBuilder()
            .setBrand('ferrari')
            .setColor('red')
            .setEngine('Ferrari 066/12 1.6 V6 Turbo híbrido')
            .setGps(true)
            .setModel('Ferrari V3')
            .setYear('2025')
    }

    static buildCityCar() {
        return new CarBuilder()
            .setBrand('chevrolet')
            .setColor('white')
            .setEngine('css prime')
            .setGps(true)
            .setModel('onix')
            .setYear('2023')
    }
}

const racing = CarDirector.buildRacingCar();
const city = CarDirector.buildCityCar();

racing.showDetails();
city.showDetails();