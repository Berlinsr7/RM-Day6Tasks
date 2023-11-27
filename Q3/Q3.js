class Person
{
    constructor(name, age, gender, language, batch, isMarried, course)
    {
        this.Name = name;
        this.Age = age;
        this.Gender = gender;
        this.Language = language;
        this.Batch = batch;
        this.IsMarried = isMarried;
        this.Course = course;
    }
    Introduce() 
    {
        console.log(`Hi this is ${this.Name}, currently learning ${this.Course} who belongs to batch ${this.Batch}.`);
    }
}

var person = new Person("Berlin", 23, "Male", "Tamil", 54, false, "FullStack Development");
person.Introduce();