//// ADVANCE OBJECTS


//// REFERENCE TYPE

/// Reference type basically means that when we create an object we are creating a box where we store the value in it.
/// to reference it we can store it in another variable, but when we create a another object with the same
/// value as the first object, it doesn't mean the two objects are the same. Because the second object stores the value in another box altogether.
 var object1 = { value: 10 };
 var object2 = object1;
 var object3 = { value: 10 };



///// CONTEXT

function a() {
	console.log(this);
}

var object4 = {
	a: function() {
		console.log(this);
	}
}

///// INSTANTIATION

/// instantition is when you make a copy of an object and reuse the code

class Player {
	constructor(name, type) {
		console.log('player', this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name} and I am a ${this.type}.`)
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log('wizard', this)
	}
	play() {
		console.log(`WHEEEEE I AM A ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard("Walt", "Defender against the dark arts")

/// If you want to add extra properties to the new, extended class,
/// you just need to mention them in its own constructor syntax. For example, 
///if you want to add race property to Wizard, you write it like this:

class Wizard extends Player {
 constructor(name, type, race) {
 super(name, type);
 this.race = race;
 }
 play() {
 console.log(`Weee, I'm a ${this.type}, race ${this.race}.`);
 }
}


//// another cool thing I see is that default values also work in the constructor function:  

class Wizard extends Player {
    constructor(name, type, spell="none") {   // default spell 'none', if none passed
        super(name, type)  
        this.spell = spell; 
    } 
    play() { 
        console.log(`I am ${this.name}, a ${this.type} wizard, and my spell is: ${this.spell}.`);
    }
}
 
const wizard1 = new Wizard("Shelly", "Healer", "healing spell");  
const wizard2 = new Wizard("Shawn", "Dark Magic");  // no spell passed on object creation
 
// outputs: I am Shelly, a Healer wizard, and my spell is: healing spell.
wizard1.play();
// outputs: I am Shawn, a Dark Magic wizard, and my spell is: none. (*)
wizard2.play();
