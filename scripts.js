function Phone(brand, price, color) {
	this.brand = brand; // a czy tutaj może być np. this.INNEokreslenie?
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var Galaxy5S = new Phone("Samsung", 1200, "silver");
var One = new Phone("OnePlus", 800, "white");

iPhone6S.printInfo();
Galaxy5S.printInfo();
One.printInfo();

//Task upgrade

function Phone(brand, price, color, width, system) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
	this.width = width;
	this.system = system;
}

Phone.prototype.Case = function() {
	if (this.system == "Android" && this.width >= 350) {
		var sysUpperCase = this.system.toUpperCase();
		console.log(sysUpperCase);
	} else {
		console.log("Cannot be uppercased");
	}
}

var iPhone6S = new Phone("Apple", 2250, "silver", 350, "iOS");
var Galaxy5S = new Phone("Samsung", 1200, "silver", 400, "Android");
var One = new Phone("OnePlus", 800, "white", 300, "Android");

Galaxy5S.Case();
One.Case();
iPhone6S.Case();

