export class PersonName{
    public readonly firstName: string
    public readonly middleName: string
    public readonly lastName: string

    constructor(firstName: string, lastName: string, middleName: string = "") {
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
    }
}