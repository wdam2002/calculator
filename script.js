// Get the display element from the DOM
const display = document.getElementById('display');

// Get all the buttons in the DOM
const buttons = document.querySelectorAll('button');

// Define special buttons that will trigger specific actions
const specialButtons = ['%', '*', '/', '-', '+', '='];

// Initialize the output variable
let output = '';

// Function to calculate the output based on button value
const calculate = (btnValue) => {
    // If the button value is '=' and there's content in the output, evaluate the expression
    if (btnValue === '=' && output !== '') {
        // Replace '%' with '/100' before evaluating the expression
        try {
            output = eval(output.replace('%', '/100'));
        }
        // If an error occurs during evaluation, set the output to 'Error'
        catch (e) {
            output = 'Error';
        }
    } 
    // If the button value is 'AC', reset the output
    else if (btnValue === 'AC') {
        output = '';
    } 
    // If the button value is 'DEL', remove the last character from the output
    else if (btnValue === 'DEL') {
        output = output.slice(0, -1);
    } 
    // For other button values
    else {
        // If the output is empty and the button value is a special button, do nothing
        if (output === '' && specialButtons.includes(btnValue)) {
            return;
        }
        // Otherwise, append the button value to the output
        output += btnValue;
    }
    // Set the value of the display to the updated output
    display.value = output;
}

// Loop through each button and add an event listener for click events
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Call the calculate function with the value of the clicked button
        calculate(e.target.dataset.value);
    });
});
