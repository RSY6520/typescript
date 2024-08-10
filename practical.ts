// npm install -g typescript,  tsc file.ts                           // for global
// npm install typescript --save-dev, npx tsc file.ts                //  for spec dir

// primitive types => boolean, string, number, bigint, symbol (are used to create a globally unique identifier.)
let fName: string = "Ramakant";

// console.log(typeof fName);

// Type Assignment => 1.Implicit > without type, 2.Explicit > with type
// we get data type error in both the cases, imp and Explicit
// let lName: string = "Yadav";
// lName = 55; // error

// let lName = "Yadav";
// lName = 55 // error

// Note: Having TypeScript "guess" the type of a value is called infer.
// unable to infer case ts set datatype to any
let nm = JSON.parse("66"); //number 

// Special Type////////////////////////////////////////////////

// any is a datatype which disable type checking

let u = 5; //now the type of the variable u has beent number for ever
// u = "sadsdz"; error

let v: any = 5; //now not forever
v = "fsdzfdx"; // no error
v = 30;
//v.map(); //no error, but run time error


// usecases=> whereever we are not sue about data ex. user inputs, network responses, json deserialation, js code migration to ts

// any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost..

// the unknown type is safer type to any because it still enforces type checking and type safety(whether a property is accessible or not) 
// variable of type unknown can hold values of any type , but you must perform type checks type assertions before using them in specific ways.

// in case of unknown still we can enforce type and type safety 


let un:unknown;
un = 5;
un = "Ramakant";
un = true;
un = 8;
// Math.round(un); //error

// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.
// console.log(Math.round(un as number));


// if(typeof un === "number") console.log(Math.round(un));
// if(typeof un === "string") console.log(un);
// if(typeof un === "boolean") console.log(un);
// un.map() error

let una:any = 9;
// una = "Ramakant"
let cnv = Math.round(una);
// console.log(cnv); // NaN


// una.map() no error, but run time error


// console.log( typeof v);

// unknown type suggest error before compilation and running code 




// Type: never
// never effectively throws an error whenever it is defined.

let nv:never;
// nv = "Ramakant";
// console.log(nv);

// never type is used when we know that thing is nver going to happen
// as return type of a function which never returns any thing
// like throwError utility method in node.js
// diff between never and void
// unlike never void returns undefined

// function printName(): void {
//     console.log("Ramakant");
// }

function printName(): never {
    // console.log("Ramakant");
    throw new Error("Here");
}
// console.log(printName());
// never effectively throws an error whenever it is defined.
// never is rarely used, especially by itself, its primary use is in advanced generics.

// undefined and Null Type 
// same as in js 
let y: undefined = undefined;
let z: null = null;
// These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.



// TS Arrays

let names: string[] = [];
names.push("RS Yadav");
// console.log(names[0]);
// Readonly 
// The readonly keyword can prevent arrays from being changed. 
let flowers: readonly string[] = ["Lotus"];
// flowers.push("Rose"); error;

// Inference
// TypeScript can infer the type of an array if it has values.
let fruits: string[] = ["Guava"];
fruits.push("Banana"); // no error
// fruits.push(5); // error

// TS Array Recap >> typewithsquarebrackets, readonly, typeinference


// TS-Tuples => tuples are arrays with pre-defined length and types for each index

let myTuple: [boolean, string, number];
myTuple = [true, "Ramakant", 28]; //order matters
// console.log(myTuple);
myTuple.push("new"); // will be added but it's wrong interpretation, meaning that we don't have type safety for lenght+ indexes
// to prevent this make this readonly 
let myTuple2: readonly [boolean, string, number] = [true, "Ram", 20];
// myTuple2.push(3); //error 
// useState in React returns tuple 
// Named tuple .. provide feasibility to add more context for each element
let myTuple3: [x: number, y: number];
myTuple3 = [1,4]; 

// Tuple destructuring.. it's an array so we can destructure this

// Tuple-Recap >> array,readonly, destructuring

// TS-Objects>>
// Has specific syntax for typing objects , before initialization we have to define type of each property value type
const obj: {name: string, age: number} = {name: "Ramakant", age: 28};
// or 
obj.name = "Radha";
// Type Inference alo works // first time value type will be final type

//Optional Properties // use ? mark
const car: {model: string, mileage?: number} = {model: "Ford"}; // no error
car.mileage = 90;
// Index Signatures
// we can also set type of index
// syntax
let obj2: {[index: string]: number} = {};
obj2.year = 3433
// another syntax using utility type  
let obj3: Record<string, number> = {Alice: 21, Bob: 18};

// TS-Object-Type-Recap>> syntax, inference, optionalproperties, indexsignature/withutilityaswell


// TS-Enums
// An enum is a special class that represent a group of constants
// present in two flavour string and number
// syntax 
enum cardinalDirections {
    North,
    West,
    South,
    East
}
// by default these will have number from 0-3 auto incremental
// although we can set our own any number or even string to any constant
// we can make an enum for http status codes
// Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.

// Enum-Recap >> string type number type


// TS-Aliases and Interfaces 
// TypeScript allows types to be defined separately from the variables that use them. Aliases and Interfaces allows types to be easily shared between different variables/objects.

// Type aliases >> allows us to give a custom name to a prim type or complex type
// syntax 
type CarType = string;
type CarYear = number;

let carType:CarType = "Ford";
// console.log(typeof carType);

// comp type
type Car = {
    type: CarType,
    year: CarYear
} 

// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.
// syntax 
interface Rectangle {
    height: number,
    width: number
}
let rect: Rectangle;

// Extending Interfaces
// Interfaces can extend each other's definition.

interface ColoredRectangle extends Rectangle {
    color: string
}

let rect2: ColoredRectangle;

// TS-Aliases and Interfaces-Recap>> primaliases, compaliases, interfaces, extendsinterfaces



// TS-Union Type 
// if we want to allow multiple types
// syntax 
let index: string | number;
// only properties will be applicable which are accessible for all given type

// TS-Functions 
// return type and parameter types can be defined
// return type syntax 
function fullName(): string {
    return "Ramakant Sigh Yadav";
}
// inference works for return type on the basis of returning value
// we can also use void type, will return undefined 
// Parameters Syntax 
function sdzx(dsz: number): number {
    return dsz;
}
// if no type the any, default

// Optinal Parameter 
function fn(c?: number): number {
    return c || 0;
}

// default parameters 
function fn2(c: number = 10): number {
    return c;
}

// Named Parameters 
function fn3({dividend, divisor}: {dividend: number, divisor: number}): number {
    return dividend/divisor;
}

// Rest Parameters
function fn4(a: number, ...rest: number[]): number {
    return a + rest.reduce((p, c) => p + c, 0);
}

// Type Aliases
// we also have flexibility to create type alias for function 
// syntax 
type negate = (value: number) => number;
const fn5: negate = (value) => value;

// TS-Functions-Recap >> returntype, voidreturntype, parameters, optionalparameters, defaultparameters, namedparameters, restparameters, typealias


// TS-Casting
// Casting is the process of overriding a type.
let x: unknown = 5;
// console.log((x as string).length); // undefined because number don't have lenght
let yn: number = 6;
// console.log((yn as string).length); // error neither type is overlappable
let str: unknown = "hello";
// console.log(str.lenght); // error str is of type unknown
// console.log((str as string).length); //works
// casting with <>
let str2: unknown = 'hello';
// console.log((<string>str2).length);
let str3: unknown = 7;
// console.log((<string>str3).length); // no eror but undefined

// This type of casting will not work with TSX, such as when working on React files.

// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

let str4 = 'hello';
// console.log(((str4 as unknown) as number)); // hello 
// console.log(typeof ((str4 as unknown) as number)); // string

// TS-Casting Recap >> as, <>, ForceCasting

// TS-Classes
// TypeScript adds types and visibility modifiers to JavaScript classes.
// every member of a class can be annotated with type while defining a class, 
// we can also apply visibility modifiers public, private, protected
// this keyword represents instance of a claass

//parameter property
// a property can directly be declared in a constructor method parameter and with access modifiers as well
// readonly >> can also be applied to a member

// Interfce >> we can also annotate type in interfaces

// a class can implements multiple interfaces separating by comma

// Inheritance: extends >> a class can extends only one class

// Override 
// override >> is used to override a member of the parent class explicitly
// although it's optional // we can add conf "noImplicitOverride"m to make it mondatory
//By default the override keyword is optional when overriding a method, and only helps to prevent accidentally overriding a method that does not exist. Use the setting noImplicitOverride to force it to be used when overriding.

// Abstract Classes >> a class that can can't be instantiated can  only be used as base class
// we use abstract keyword to define the class and members which are not going to be executed in the abstract class

//* Abstract classes cannot be directly instantiated, as they do not have all their members implemented.

// TS-Classes-Recap >> membertypes,membersvisibility,parameterproperties,readonly,inheritanceimplements,inheritanceextends,override,abstractclasses



// TS-Generics
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.

// MINE>> genrics allow us to put variable where we want to type, to provide type later on(at the time of use)
// It help to make code more reusable

//functions
// function createPair<S, T>(v1: S, v2: T): [S, T] {
//     return [v1, v2];
//   }
//   console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

// Classes
// TypeScript can also infer the type of the generic parameter from the function parameters.

// Type Aliases
// type Wrapped<T> = { value: T };
// const wrappedValue: Wrapped<number> = { value: 10 };

// This also works with interfaces with the following syntax: interface Wrapped<T> {

// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.

// Extends
// Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type
// with the help of eextends keyword we can assign multiple types with or operator

// This can be combined with a default value.


// TS-Basic-Generics-Recap >> functions, classes, typealiases, defaultvalue, extends, 
