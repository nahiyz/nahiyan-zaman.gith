
//Enlarging the images on click
function imagelrg() {
    let image = document.getElementById("myimg");
    if (image.style.width === "500px") { // if image is already englarged 
        image.style.width = "250px"; // Original size when clicked again
    } else {
        image.style.width = "500px"; // Else it will be englarged 
    }
}

// Onmouseover/Onmouseout events and functions
function mOver(element) {   // When user moves the mouse over an element
    element.style.color = "lightgreen";  // Changes color to green
}

function mOut(element) { // When the mouse moves away from the element
    element.style.color = "white";  // Changes color back to white
}

// Toggling the dropdown menu
function tggldropdown() {
    let dropdwncontent = document.querySelector('.dropdown-content');//finds dropdown menu content and stores it in variable
    dropdwncontent.style.display = dropdwncontent.style.display === 'block' ? 'none' : 'block';
    //checks whether the dropdown is visible or not (hidden = block, visible = none), currently set at block 
}

function toggleTextSize() {
    const textElements = document.querySelectorAll('body, p, h1, h2,h2x, .image-caption, .alt-text, a, button'); // Select all text elements
    textElements.forEach(element => {
        if (element.classList.contains('enlarged')) {3
            element.classList.remove('enlarged');
        } else {
            element.classList.add('enlarged');
        }
    });
}


// Toggle Color-Blind Friendly Mode
function toggleColorBlindMode() {
    document.body.classList.toggle('color-blind-mode');
}