export class User {
    firstname:string = "";
    lastname:string = "";
    private age: number = 0;

    setFirstname(firstname:string){
        th
    }
    setAge(age: number): void {
        this.age = age;
     }
    getAge(): number {
        return this.age;
    }
    getFullName(): string {
        return this.firstname + " " + this.lastname;
    }
}

