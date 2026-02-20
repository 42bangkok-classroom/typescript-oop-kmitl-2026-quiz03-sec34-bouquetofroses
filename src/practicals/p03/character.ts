export class Character {
    name:string ;
    health:number ;
    constructor (name:string , health:number){
        this.name = name ;
        this.health = health ;
    }
    getName(name:string){
        return this.name ;
    }
    getHealth(){
        return this.health ;
    }
    receiveDamage (damage:number):void{
        this.health -= damage ;
    }
}
