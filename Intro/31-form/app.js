// in bigger applications we should be more specific with the selector
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input - Usually used after submiting a form
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

//  Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus Click inside a input
// taskInput.addEventListener('focus', runEvent);

// Blur click outside a selectioned input
// taskInput.addEventListener('blur', runEvent);

// Cut ctrl+ x
// taskInput.addEventListener('cut', runEvent);

// Paste ctrl+ V
// taskInput.addEventListener('paste', runEvent);

// Undo ctrl + Z
// taskInput.addEventListener('undo', runEvent);

// Input fires of in any kind of event
// taskInput.addEventListener('input', runEvent);



function runEvent(e){
    console.log(`event type: ${e.type}`);

    console.log(e.target.value);

    heading.innerHTML = e.target.value;

    // Get Input value
    // console.log(taskInput.value);

    // e.preventDefault();
}