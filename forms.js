// ---- JAVA SCRIPT DOCUMENT for  ---- //

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
    
    // Wait until the page content is fully loaded before accessing elements in the form, only runs after the entire page has loaded
window.onload = function () {  

    // Each form field is stored in a const variable that refers to an input field with different ID's.This allows the program to retreive the values entered by the user when the form is submitted
    const nameField = document.getElementById("usrname"); 
    const messageField = document.getElementById("msg"); //messageField variable refers to the ID "msg"
    const genderFields = document.getElementsByName("gender");
    const serviceFields = document.getElementsByName("services");
    const reasonField = document.getElementById("rsn");
    const countryField = document.getElementById("cntry");
    const contactDateField = document.getElementById("ctcdte");
    const ageField = document.getElementById("agex");
    const emailField = document.getElementById("emxl");
    const phoneField = document.getElementById("phne");

    // Add event listener for the submit button to save form data to localStorage
    document.querySelector('button[type="button"]').addEventListener("click", function () { // An event listener is added for the submit button, which adds a function that runs whenever the button is clicked. The funvticon collects and saves form data to the localStorage.
        let formData = { //organized into this object 
            name: nameField.value, //retrieves values of text fields using .value method
            message: messageField.value,
            gender: Array.from(genderFields).find(field => field.checked)?.value || "", //retrieves values of radio buttons using field.checked, finds the one option that was checked
            services: Array.from(serviceFields).filter(field => field.checked).map(field => field.value), // //retrieves values of checkboxes by filtering for checked boxes and mapping/saving their values
            reason: reasonField.value,
            country: countryField.value,
            contactDate: contactDateField.value,
            age: ageField.value,
            email: emailField.value,
            phone: phoneField.value
        };

        // Save data in localStorage
        localStorage.setItem("formData", JSON.stringify(formData)); //converted to a string and saved to the browser's local storage, saves the data even if user refreshes/closes the page 
        alert("Your inquiry has been submitted and the data has been saved to the local storage!"); //displays message to confirm the user that his information has been submitted and notify the user that their data has been saved to the local storage
    });
    document.querySelector('button[type="reset"]').addEventListener("click", function () {  // Add event listener for the reset button triggered when button is clicked
        localStorage.removeItem("formData");   // removes the formData object from the local storage, clearing all saved form data 
    });
};
