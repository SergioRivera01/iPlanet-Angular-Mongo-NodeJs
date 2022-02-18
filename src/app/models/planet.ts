export class Planet {
    _id?: number;
    name: String;
    cathegory: String;
    radius: number;

    constructor(name: String, cathegory: String, radius: number){
        this.name = name;
        this.cathegory = cathegory;
        this.radius = radius;
    }
}