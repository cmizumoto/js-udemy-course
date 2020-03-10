// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World');

//     e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log('Clicked');
    let val;

    val = e;

    // Event target Element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;


    console.log(val);
}