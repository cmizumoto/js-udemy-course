const posts = [
    {title: 'Post one', body: 'this is post one'},
    {title: 'Post two', body: 'this is post two'}
];


// function createPost(){
//     setTimeout(function(){
//         posts.push(post);   
//     }, 2000);
// }

// function getPost(){
//     setTimeout(function (){
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     }, 1000);

// }

// createPost({title: 'Post three', body: 'this is post three'});

// getPost();


function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);   
        callback();
    }, 2000);
}

function getPost(){
    setTimeout(function (){
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

// Even if the first function takes more time to be executed, if we pass in a callback function as an argument, it is possible to manage the function to be executed

createPost({title: 'Post three', body: 'this is post three'}, getPost);