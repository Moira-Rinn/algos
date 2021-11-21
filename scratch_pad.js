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

const jump = (x1, v1, x2, v2) => {
	let k1 = x1 + v1;
	let k2 = x2 + v2;
	for (let i = 0; i < 10000; i++) {
		k1 += v1;
		k2 += v2;
		if (k1 === k2) {
			return 'yes';
		} else {
			return 'no';
		}
	}
};
