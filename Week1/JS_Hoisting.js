1
//variable hello gets hoisted
//console.log(hello) logs undefined
//var hello = 'world'

//Given
// console.log(hello);                       
// var hello = 'world';

var hello
console.log(hello); // logs undefined
hello = 'world';

2
//variable needle gets hoisted
//test() logs magnet

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
var needle

3
//variable brendan gets hoisted
//function never gets called
//log 'super cool'

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

4
//variable food gets hoisted
//log 'chicken'
//call on function and log 'half-chicken'

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

5
//variable food gets hoisted
//mean is not a function so it returns TypeError

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

6
// variable genre gets hoisted
// logs undefined
// call on rewind function
// log "rock"
// log "r&b"
// log "disco"

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

7
// log "san jose"
// call on learn function
// log "seattle"
// log "burbank"
// log "san jose"

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

8
// first log runs and returns list with data
// second log logs error since a const variable cannot change

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}