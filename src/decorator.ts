function Logging(message: string) {
    return function (constructor: Function) {
        console.log(message);
        console.log(constructor);
    }
}

function Component(template: string,selector: string) {
    return function (constructor: {new(...args: any[]):{name: string}}) {
        const mountedElement=document.querySelector(selector);
        console.log('Component');
        const instance =new constructor();
        if (mountedElement){
            mountedElement.innerHTML =template;
            mountedElement.querySelector('h1')!.textContent=instance.name
        }
    }
}

@Logging('Logging User')
@Component('<h1>{{ name}}</h1>','#app')
class User {
    name= 'Quill';
    constructor(age: number) {
        console.log('User was created!');
    }
}







