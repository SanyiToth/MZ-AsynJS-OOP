export class Blog {
    #title;
    #author   // instanceof User Class
    #posts = [];  // every item instanceof Posts Class

    constructor(title, author, posts) {
        this.#title = title;
        this.#author = author;
        this.#posts = this.#posts.push(posts)
    }


    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get posts() {
        return this.#posts;
    }

    #fetchPost() {

    }

    addPost(postItem) {
        
    }

    deletePost() {
        //return boolean
    }

    getPostById(postId) {
        //return Post class
    }


}