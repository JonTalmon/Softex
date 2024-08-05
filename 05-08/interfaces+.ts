interface Person {
    name:string;
    age: number;
};

function sayHello(person:Person) {
    return console.log(`Olá ${person.name}! Você tem ${person.age} anos.`)
};

let pessoa:Person = {
    name:"Jônatas",
    age: 24,
};

sayHello(pessoa);

interface Rectangle {
    widht:number;
    height:number,
};

function getArea(form:Rectangle):number {
    return form.height * form.widht
};

let square:Rectangle = {
    widht: 20,
    height: 15,
};

console.log(getArea(square));

interface Task {
    title:string;
    completed?:boolean;
};

function taskStatus(job:Task):void {
    if(job.completed) {
        console.log("Task completed");
    } else {
        console.log("Task not yet completed");
    };
}

let task1:Task = {
    title: "Task one",
    completed: true,
}

let task2:Task = {
    title: "Task two",
}

taskStatus(task1);
taskStatus(task2);