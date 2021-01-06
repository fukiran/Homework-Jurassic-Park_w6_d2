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


    for (var i = 0; i < this.collectionOfDinosaurs.length; i++) {
        if (this.collectionOfDinosaurs[i] === dinosaur){
            this.collectionOfDinosaurs.splice(i,1)
           
        }
    }
}

module.exports = Park;