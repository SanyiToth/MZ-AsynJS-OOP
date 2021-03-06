import {Post} from "./post.js";

export class Blog {
    #title;
    #author;   // instanceof User Class
    #posts = [];  // every item instanceof Posts Class

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#fetchPost()
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    delay() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    get posts() {
        return this.#posts;
    }

    #fetchPost() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                else return response.json();
            })
            .then(data => {
                this.convertToPostInstance(data);
            })
            .catch(error => {
                console.log(error)
            })

    }

    addPost(postItem) {
        if (postItem instanceof Post) {
            this.#posts.push(postItem)
        } else throw Error(`${postItem} not an instance of that class`)
    }

    deletePost(postId) {
        let isPostIdInArray = false;
        this.#posts.forEach((post, index) => {
            if (post.id === postId) {
                this.#posts.splice(index, 1);
                isPostIdInArray = true;
            }
        })
        if (isPostIdInArray) console.log(`Instance deleted`);
        else console.error(`there is no instance with this id: ${postId}`);
        return isPostIdInArray
        //return boolean
    }

    getPostById(postId) {
        let postItem = null;
        this.#posts.forEach((post, index) => {
            if (post.id === postId) {
                postItem = post;
            }
        })
        if (postItem) {
            return postItem;
        } else throw Error(`there is no instance with this id: ${postId}`)

        //return Post class
    }

    convertToPostInstance(data) {
        this.#posts = data.map((post) => {
            return new Post(post.title, post.body, post.id, post.userId)  //convert every Array item to Post class instance
        })
    }

}