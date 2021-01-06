const Park = function (name, ticketPrice, collectionOfDinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = collectionOfDinosaurs;
}


//Add a dinosaur to its collection of dinosaurs
Park.prototype.addDinosaur = function(dinosaur){
    return this.collectionOfDinosaurs.push(dinosaur);
}

//Remove a dinosaur from its collection of dinosaurs
Park.prototype.removeDinosaur = function(dinosaur){

    for ( i = 0; i < this.collectionOfDinosaurs.length; i++) {
        if (this.collectionOfDinosaurs[i] === dinosaur){
            this.collectionOfDinosaurs.splice(i,1)
           
        }
    }
}

// Find the dinosaur that attracts the most visitors
Park.prototype.mostVisitors = function() {
    let views = 0;
    let topDino;

    for (i=0; i < this.collectionOfDinosaurs.length; i++) {
        if (this.collectionOfDinosaurs[i].guestsAttractedPerDay > views) {
            topDino = this.collectionOfDinosaurs[i];
            views = topDino.guestsAttractedPerDay;
        }
    }
    return topDino
}

//Find all dinosaurs of a particular species
Park.prototype.sameSpecies = function(species) {
    let population = [];
    for (i=0; i < this.collectionOfDinosaurs.length; i++) {
        if(this.collectionOfDinosaurs[i].species === species){
            population.push(this.collectionOfDinosaurs[i])
        }
    }
    return population
}

module.exports = Park;