
//Variable & Values
let country="India";
let continent="Asia";
let population=135*1000000; //(in millions)

console.log(country);
console.log(continent);
console.log(population);

//Data Types
let island=true;
let language;

console.log(typeof island);
console.log(typeof population);
console.log(typeof language);
console.log(typeof country);

//let,const and var

let rollno = 19311;
rollno=19306;

console.log(rollno);

const mobno=55555555;
//mobno=4444444

console.log(mobno);

var job ='artist';
job='painter'

console.log(job);

firstName='sanchika';

console.log(firstName);

//basic operators


console.log(population);
console.log(population/2);

population ++;
console.log(population);

const finland=6*1000000; 

console.log(population>finland);
console.log(population<33*1000000);
language = "Hindi";
const description = country+" is in "+continent+" and its "+(population-1)/1000000+" millions people speaks "+language+".";
console.log(description);

const johnMark = 78;
const johnHeight = 1.69;
const markMark = 92;
const markHeight = 1.95;

const BMImark = johnMark/johnHeight**2;
const BMIjohn = markMark/(markHeight*markHeight);

const markHeightBMI =BMImark>BMIjohn;
//const markHeightBMI =true;

console.log(BMIjohn);
console.log(BMImark);
//console.log(markHeightBMI);

console.log(BMIjohn,BMImark,markHeightBMI);

//if/else statement

if(population>33*1000000){
    console.log("Portgual's Population is above average.");
}
else{
    const average= population - 33*1000000;
    console.log(average);
    console.log("Portgual's population is 22 million below average.")
}

//coersien and conversion

console.log('9'- '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123'< 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Equality operations == & ===
/*
const numNeighbours = prompt('How many neighbour countries does your country have?');
console.log(prompt);

if(numNeighbours==1){
    console.log('only one 1 border!');
}
else if(numNeighbours > 1){
    console.log('more than 1 border in case');
}
else{
  console.log('no borders!');
}



//logical operators

if (language==='english' && population <=50*1000000 && !island){
    console.log(`you should live in ${country}`);
}
else{
    console.log(`${country} does not meet your criteria.`);
}

//switch statement

const language='hindi';
switch(language){
   case 'chinese':
   case 'mandarin':
       console.log('MOST number of native speakers.');
       break;
    case 'spanish':
        console.log('2nd place in number of native speakers.');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language.');
        break;
    default:
        console.log('great language toolbar.');                
}
*/

//conditional operator

console.log(`${country} population is ${population>33*1000000 ?'above' : 'below'} average.`);