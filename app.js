console.log('hello there!');

//////////////////// Town


// size classification
// total and average length of streets



// average park age = age sum / number of parks
// Park with most trees







/////////////////////// Streets 

// Name
// Build year

// length 


////////////////////// Parks

// Name
// Build year

// Size
// Number of trees



class Element {
	constructor (name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Streets extends Element {
	constructor(name, buildYear, length, size = 3) {
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}

	classifyStreet() {

		const classification = new Map();

		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');
		console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);

	}
}



class Parks extends Element {
	constructor(name, buildYear, size, numberOfTrees) {
		super(name, buildYear);
		this.size = size;
		this.numberOfTrees = numberOfTrees;
	}

	treeDensity() {
		const density = this.numberOfTrees / this.size;
		console.log(`${this.name} has a tree density of ${density} trees per square km.`);
	}
}




const allParks = [new Parks('Hyde park', 1800, 10, 500),
				new Parks('Central Park', 1900, 7, 600),
				new Parks('Praxitelis Park', 2016, 3, 1000)]

const allStreets = [new Streets('Makariou', 1950, 10, 2),
					new Streets('Paphou', 1975, 6, 4),
					new Streets('Ellados', 1990, 2),
					new Streets('Makedonias', 1996, 1, 5)]



function calc(arr) {

	const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

	return [sum, sum / arr.length];

}




function reportParks(p) {

	console.log('--------- Parks Report ---------');

	//Density
	p.forEach(el => el.treeDensity());

	//Average age
	const ages = p.map(el => new Date().getFullYear() - el.buildYear);
	const [totalAge, avgAge] = calc(ages);
	console.log(`Our ${p.length} parks have an average of ${avgAge} years. `);

	//Which park has more than 1000 trees
	const i = p.map(el => el.numberOfTrees).findIndex(el => el >= 1000);
	console.log(`${p[i].name} has more than 1000 trees!`);

}

function reportStreets(s) {

	console.log('---------- Streets Report ----------');

	// Total and average length of the town streets
	const [totalLength, avgLength] = calc(s.map(el => el.length));
	console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

	// Classify sizes
	s.forEach(el => el.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);

											