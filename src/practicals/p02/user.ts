export class User {
    firstname:string = "";
    lastname:string = "";
    private age: number = 0;
    static BIRTH_YEAR :number ;

    setFirstname(firstname:string){
        this.firstname = firstname ;
    }
    setLastname(lastname:string){
        this.lastname = lastname ;
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

