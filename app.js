// // 1 -> minutlarni sekundga aylantiring?
function convert(minutes) {
	return minutes * 60;
}
console.log(convert(5));

// 2 -> sonlarni ko'paytiring?
function circuitPower(voltage, current) {
	return voltage * current;
}
console.log(circuitPower(13, 6));

// 3 -> sonlarni kubga oshiring?
function cubes(a) {
	return a ** 3;
}
console.log(cubes(9));

// 4 -> soatda qancha sekund bor?
function howManySeconds(hours) {
	return hours * 60 * 60;
}
console.log(howManySeconds(25));

// 5 -> uchburchak yuzini toping?
function triArea(base, height) {
	return (base * height) / 2;
}
console.log(triArea(10, 14));

// 6 -> Bo'sh joy va berilgan argument "something" bilan birlashtirilgan satrni qaytaruvchi funktsiyani yozing?
function giveMeSomething(a) {
	return "something" + " " + a;
}
console.log(giveMeSomething(4));

// 7 -> Faqat raqamlardan iborat massivni oladigan funksiya yarating va birinchi elementni qaytaring?
function getFirstValue(arr) {
	return arr[0];
}
console.log(getFirstValue([1, 5, 9]));

// 8 -> Uchburchakning uchinchi chetining maksimal diapazonini topadigan funksiya yarating?
function nextEdge(side1, side2) {
	return side1 + side2 - 1;
}
console.log(nextEdge(16, 10));

// 9 -> Yillarni kunlarga o'tkazadigan funksiya yarating
function calcAge(age) {
	return age * 365;
}
console.log(calcAge(7));

// 10 -> to'rtburchakni yuzini hisoblaydigan funksiya yarating
function findPerimeter(length, width) {
	return (length + width) * 2;
}
console.log(findPerimeter(9, 16));
