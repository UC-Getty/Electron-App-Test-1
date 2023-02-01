

// const testButton = document.getElementById('test-button');
// testButton.addEventListener("click",myFunction);

// function myFunction() {
//     document.getElementById("test-p").textContent += "Hey man!";
// }

const addButton = document.getElementById('add');
add.addEventListener("click",addNumbers);

function addNumbers(){
    var firstNum = parseInt(document.getElementById("first-number").value);
    var secondNum = parseInt(document.getElementById("second-number").value);
    var result = firstNum + secondNum;
    document.getElementById('answer').innerHTML = result;
}

// Get the form and file field
let form = document.querySelector('#upload');
let file = document.querySelector('#file');
let app = document.querySelector('#app');

/**
 * Log the uploaded file to the console
 * @param {event} Event The file loaded event
 */
function logFile (event) {
    let str = event.target.result;
    let img = document.createElement('img');
    img.src = str;
    app.append(img);
    console.log(str);
}

/**
 * Handle submit events
 * @param  {Event} event The event object
 */
function handleSubmit (event) {

    // Stop the form from reloading the page
    event.preventDefault();

    // If there's no file, do nothing
    if (!file.value.length) return;

    // Create a new FileReader() object
    let reader = new FileReader();

    // Setup the callback event to run when the file is read
    reader.onload = logFile;

    // Read the file
    reader.readAsDataURL(file.files[0]);

}

// Listen for submit events
form.addEventListener('submit', handleSubmit);






  

