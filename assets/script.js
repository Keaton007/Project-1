document.addEventListener('DOMContentLoaded', function () {
    const box = document.querySelectorAll('.interactions box');
    const text = document.querySelectorAll('imgText');

    box.forEach((box , index) => {
        box.addEventListener('hover', function () {
            text.forEach(text => text.style.display = 'none');
            text[index].style.display = 'block';
        });
    });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get the submit button
    const submitButton = document.querySelector('.modal-footer .btn-primary');


    // Get the email input field
    const emailInput = document.getElementById('modal-email');


    // Add click event listener to the submit button
    submitButton.addEventListener('click', () => {
        // Get the email value
        const emailValue = emailInput.value.trim();


        // Check if the email input field is empty
        if (emailValue === '') {
            alert('Please enter your email address.');
            return; // Stop further execution
        }


        // Save email to localStorage
        localStorage.setItem('userEmail', emailValue);


        alert(`Thank you! Updates will be sent to: ${emailValue}`);


        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('reg-modal'));
        modal.hide();


        // Clear the input field
        emailInput.value = '';
    });


    // Retrieve stored email (optional, for later use)
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        console.log(`Stored email: ${storedEmail}`);
    }
});

