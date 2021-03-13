import {User} from './user.js';
import {Post} from './post.js';
import {Blog} from './blog.js';

let body = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt dolorum explicabo magni nam non soluta voluptates. Ab architecto, consectetur corporis distinctio esse iure nulla pariatur quae reiciendis, sint veniam!"

let user = new User("Sándor", "Tóth", "remus18@gmail.com");
console.log("user", user);

let post1 = new Post("lorem ipsum", body, 101);
console.log("post1", post1);

let post2 = new Post("lorem ipsum", body, 102);
console.log("post1", post2);

let blog = new Blog("firstBlog", user);
console.log("blog", blog);

await blog.delay(1000);

console.log(user.fullName) //--> Sandor Toth
console.log(user.email)   //--> remus18@gmail.com
console.log("blog.getPost", blog.posts);
blog.addPost(post1);
blog.addPost(post2);
console.log("blog.getPost after addPost", blog.posts);
console.log("getPostById", blog.getPostById(54))  //test with valid ID
//console.log(blog.getPostById(105))   //test with invalid ID
blog.deletePost(1);  //test with valid ID
blog.deletePost(105);  //test with invalid ID
console.log("blog.getPost after deletePost(101)", blog.posts);
console.log(post1.getPreview(10).length); //--> 10





