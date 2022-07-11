export class ThingTitle{
    readonly name: string
    readonly isbn?: string
    readonly upc?: string
    description?: string

    constructor(name: string, isbn?: string, upc?: string, description?: string){
        this.name = name
        this.upc = upc
        this.isbn = isbn
        this.description = description
    }

    public equals(other: ThingTitle): boolean{
        if(!other){
            return false
        }
        if(other.name !== this.name){
            return false
        }
        if(other.upc && this.upc && this.upc !== other.upc){
            return false
        }

        if(other.isbn && this.isbn && this.isbn != other.isbn){
            return false
        }
        return true
    }

    public get hash(): string{
        return this.name.replace(" ", "-").toLowerCase()
    }
}