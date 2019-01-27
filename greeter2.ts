export interface User {
    firstName?: string;
    lastName: string;
    event: string;
}
export function greeter(person: User): string {
    return "Hello, " + person.firstName + " " +  person.lastName;
}
