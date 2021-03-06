export class User {
    #firstName;
    #lastName;
    #email;

    constructor(firstName, lastName, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    get email() {
        return this.#email;
    }


}