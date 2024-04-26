interface Engineer {
    name: string;
    role: string;
}
interface Blogger {
    name: string;
    follower: number;
}

// type EngineerBlogger= Engineer & Blogger;
interface EngineerBlogger extends Engineer,Blogger {}
const quill:EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

type NumberBoolean= number | boolean;
type StringNumber= string | number;
type Mix =NumberBoolean& StringNumber;

// function toUpperCase(x: string): string; 
function toUpperCase(x: string | number): string | number; 
function toUpperCase(x: string | number) {
    if (typeof x=== 'string') {
        return x.toUpperCase();  }
        return '';
}

type NomadWorker =Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}

class Dog {
    kind: 'dog' ='dog';
    speak() {
        console.log('bow-wow');

    }
}
class Bird {
    kind: 'bird' ='bird';
    speak() {
        console.log('tweet-twee');
    }
    fly() {
        console.log('flutter');
    }
}

type Pet=Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch(pet.kind) {
        case 'bird':
        pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());


(document.getElementById('input')as HTMLInputElement).value= 'initial input value';

interface Designer {
    name: string;
    [index: string]: string;
}
const designer: Designer = {
    name: 'Quill',
    role: 'asasa',
    
}
designer.name= 'Lll'

interface TmpFunc {
    (x: string): number;
    (x: number): number;
}

const upperHello: TmpFunc= function (x: string| number) {return 0 };


interface DownloadedData {
    id: number;
    user: {
        name?: {
            first: string;
            last: string;
        }
    }
}
const downloadedData: DownloadedData={
    id:1,
    user: {}
}
console.log(downloadedData.user?.name?.first);
const userData =downloadedData.user ?? 'no-user';

type id =DownloadedData["id"|"user"]

enum Color {
    RED,
    BLUE
}
class AdvancedPerson {
    name: string ='Peter'
    age: number=35;
}
class AdvancedCar {
    name: string= 'Prius'
    age: number=5;
}

let target= new AdvancedPerson();
let source= new AdvancedCar();
target= source;

function advancedFn(...args:readonly [number,string?,boolean?,... number[]]) {
    advancedFn(0,'hi',true,3)
}

let milk= 'milk' as const;
let drink =milk;

const array=[10,20] as const

const peter= {
    name: 'Peter',
    age: 38
} as const;

type PeterType= typeof peter;






