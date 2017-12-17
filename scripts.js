function Phone(brand, price, color) {
	this.brand = brand; // a czy tutaj może być np. this.INNEokreslenie?
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var galaxy5S = new Phone("Samsung", 1200, "silver");
var one = new Phone("OnePlus", 800, "white");

iPhone6S.printInfo();
galaxy5S.printInfo();
one.printInfo();

//Task upgrade

function Phone(brand, price, color, width, system) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
	this.width = width;
	this.system = system;
}

Phone.prototype.case = function() {
	if (this.system == "Android" && this.width >= 350) {
		var sysUpperCase = this.system.toUpperCase();
		console.log(sysUpperCase);
	} else {
		console.log("Cannot be uppercased");
	}
}

var iPhone6S = new Phone("Apple", 2250, "silver", 350, "iOS");
var galaxy5S = new Phone("Samsung", 1200, "silver", 400, "Android");
 

galaxy5S.Case();
one.Case();
iPhone6S.Case();

//Apply discount
/*Dopisz do telefonu funkcję applyDiscount z parametrem, która 
będzie obniżać cenę telefonu. Funkcja ma modyfikować cenę telefonu 
w taki sposób, że wartość telefonu zostanie obniżona o podaną kwotę 
podaną jako parametr. Aby sprawdzić poprawność działania kodu, wypisz 
dane telefonu, zastosuj obniżkę i ponownie wypisz dane telefonu. 
Powinny pokazać się 2 różne wartości.
Generalnie rzecz ujmując, po wywołaniu odpowiednio poleceń printInfo, 
applyDiscount i ponownie printInfo, cena telefonu powinna ulec zmianie:
var phone = new Phone(…, 1000, …); // ustawiamy cenę na 1000
phone.printInfo(); // price = 1000
phone.applyDiscount(100); // nic się nie wypisuje
phone.printInfo(); // price = 900
*/
one.printInfo();

Phone.prototype.applyDiscount = function(discount) {
	this.price = this.price - discount;
	return this.price;
}

one.applyDiscount(100);
one.printInfo();

