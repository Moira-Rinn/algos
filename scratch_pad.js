//CodeWars

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// let phrase = "the-stealth-warrior";
let phrase = 'The_Stealth_Warrior';

const toCapital = (phrase) => {
	let arr = phrase.split('-' || '_');
	capped = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	return capped.join(' ');
};

console.log(toCapital(phrase));

// let phrase = "the-stealth-warrior";
let phrase = 'The_Stealth_Warrior';

const toCapital = (phrase) => {
	let arr = phrase.split('-');
	// if(arr[0] === phrase){arr = phrase.split('_').join(""); return arr;}

	capped = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	return capped.join(' ');
};

console.log(toCapital(phrase));

//HackerRank

//Grading Students

const rounding = (grades) => {
	if (grades > 38) {
		if (grades % 5 >= 3) {
			return (grades += 5 - (grades % 5));
		} else {
			return grades;
		}
	} else {
		return grades;
	}
};

console.log(rounding(84));
console.log(rounding(29));
console.log(rounding(57));
console.log(rounding(89));

const rounding = (grades) => {
	let arr = grades.map((grade) => {
		grade >= 38 && grade % 5 >= 3 ? (grade += 5 - (grade % 5)) : grade;
		return grade;
	});
	return arr;
};

console.log(rounding([73, 67, 38, 33]));

const rounding = (grades) => {
	arr = grades.map((grade) => {
		if (grade >= 38 && grade % 5 >= 3) {
			console.log(grade);
			return (grade += 5 - (grade % 5));
		} else {
			return grade;
		}
	});
	return arr;
};
console.log(rounding([73, 67, 38, 33]));

//Apple and Orange

const fruits = (s, t, a, b, arr1, arr2) => {
	let appleCnt = 0;
	let orangeCnt = 0;

	let apples = arr1.map((itm) => (itm += a));
	let oranges = arr2.map((itm) => (itm += b));

	apples.map((apple) => apple >= s && apple <= t && (appleCnt += 1));
	oranges.forEach((orange) => orange <= t && orange >= s && (orangeCnt += 1));

	console.log(appleCnt);
	console.log(orangeCnt);
	return appleCnt && orangeCnt;
};

fruits(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
// console.log(fruits(7,11,5,15, [-2, 2, 1], [5, -6]));

//Number Line Jumps

const jump = (x1, v1, x2, v2) => {
	let k1 = x1 + v1;
	let k2 = x2 + v2;
	for (let i = 0; i < 10010; i++) {
		k1 += v1;
		k2 += v2;
		if (k1 === k2) {
			return 'yes';
		}
	}
	return 'no';
};

console.log(jump(0, 3, 4, 2));

//Between Two Sets

let arr1 = [3, 4];
let arr2 = [24, 48];

const getTotalX = (a, b) => {
	let arr3 = [];

	a.sort((a, b) => b - a);
	b.sort((a, b) => b - a);

	for (let i = 1; i < b[0]; i++) {
		b.map((itm) => itm % i === 0 && arr3.push(i));
	}
	// let arr4 = arr3.filter((itm) => itm >= a[0]);
	let arr5 = [];
	arr3.filter((itm) => arr5.indexOf(itm) === -1 && arr5.push(itm));

	b.map((val) => {
		let i = 0;
		while (i < arr5.length) {
			val % arr5[i] !== 0 ? arr5.splice(i, 1) : i++;
		}
		// arr5.map((itm, idx) => val % itm !== 0 && arr5.splice(idx, 1));
	});

	console.log('5', arr5);
	a.map((val) => {
		let i = 0;
		while (i < arr5.length) {
			arr5[i] % val !== 0 ? arr5.splice(i, 1) : i++;
		}
	});

	return arr5.length;
};
console.log(getTotalX(arr1, arr2));

a = [3, 4];
arr5 = [8, 12, 24];
a.map((val) => {
	arr5.map((itm, idx) => itm % val !== 0 && arr5.splice(idx, 1));
});
console.log(arr5);
