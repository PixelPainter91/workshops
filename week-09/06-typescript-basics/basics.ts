//typescript basics
//file extension --> .ts / .tsx

//trype declarations
//we need to add a type nnotation to tell TS the tyoe of data we are storing 

let myName: string = "Rory";

console.log(myName);
// cannot change the type of data in the variable once its been declared in typescript



let myAge: number = 34;

let isStudent: boolean = true;

//complex
const colours: string[] = ["blue", "purple", "yellow", "orange"];
const weather: Array<string> = ["cloudy", "sunny", "rainy"];
const misc: (string | number | boolean) [] = [5, "sun", true];
const misc2: Array<string | number | boolean> = [7, false, "sea"];


const dave: {location: string; age: number; isStudent: boolean} = {
    location: "hull",
    age: 2819,
    isStudent: true,
};

const bertie:staffType ={
   location: "london",
    age: 2819,
    isStudent: true,
};
// we can declare the type to be used in multiple objects

//the type needs to have the full list of potential properties 
//if a property is optional (like office) add the opional chaining operator (?.)
type staffType = {
    location: string;
    age: number;
    isStudent: boolean;
    office?: number;
}

//functions 
let a; //TS infers type "any" --> a catch-all type

//use the anytype responsibily

function add(a: number, b: number){
    return a + b;
}

add(6, 7);


//union types 
//type declarion that specifies data type and values 

type subjectsType = "phsyics" | "art" | "english" | "maths";

const course: subjectsType ="phsyics";
// has to be something delcared ig "spanish" is not assignable ... useful for filting data.


type empolyType = {
    location: "norwich" | "liverpool" | "hull"
    age: number;
    isStudent: boolean;
    office?: number;
}

const bob:empolyType ={
   location: "liverpool",
    age: 2819,
    isStudent: true,
    office: 1,
};