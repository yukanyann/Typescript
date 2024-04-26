abstract class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if (age > 17) return true;
        return false;
    }
    constructor(public name: string, protected age: number) {
    }
  
    incrementAge() {
        this.age += 1;
    }
  
    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
  
    abstract explainJob(): void;
  }
  
  class Teacher extends Person {
    private static instance: Teacher;
    private subject: string; // subject プロパティを追加
  
    private constructor(name: string, age: number, subject: string) {
      super(name, age); // Personのコンストラクタを呼び出す
      this.subject = subject;
    }

    static getInstance() {
        if (Teacher.instance) return Teacher.instance;
        Teacher.instance=new Teacher('Quill',38,'Math');
        return Teacher.instance;
    }
  
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}.`);
    }
  }
  
  const teacher = Teacher.getInstance();
  teacher.greeting();
  console.log(teacher,teacher);
  // 出力: Hello! My name is John. I am 30 years old.
  //       I am a teacher and I teach Mathematics.
  





