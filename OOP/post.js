export class Post {
    title;
    body;
    #id;
    userId;

    constructor(title, body, id, userId) {
        this.title = title;
        this.body = body;
        this.#id = id;
        this.userId = userId;

    }

    get id() {
        return this.#id;
    }


    getPreview(length) {
        return this.body.slice(0, length);
    }
}