import {Post} from "./post";

export class Blog {
    #title;
    #author   // instanceof User Class
    #posts;  // every item instanceof Posts Class

    constructor(title, author, posts) {
        this.#title = title;
        this.#author = author;
        this.#posts = this.fetchPost()
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

    fetchPost() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                else return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(error => console.log(error))
    }

    addPost(postItem) {
        if (postItem instanceof Post) {
            this.#posts.push(postItem)
        } else throw Error(`${postItem} not an instance of that class`)
    }

    deletePost(postId) {



        //return boolean
    }

    getPostById(postId) {
        //return Post class
    }


}